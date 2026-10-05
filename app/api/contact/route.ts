import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Max length per field; anything longer is rejected
const FIELD_LIMITS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
  contact: 200,
} as const;

// Simple in-memory rate limiting (for production, use Redis/Upstash).
// x-forwarded-for can be spoofed and each serverless instance keeps its own map,
// so the global cap is the real backstop: it holds no matter what IP a client claims.
const RATE_WINDOW_MS = 60_000;
const MAX_PER_IP = 3;
const MAX_GLOBAL = 20;
const MAX_TRACKED_IPS = 10_000;

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
let globalWindow = { count: 0, resetTime: 0 };

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  if (now > globalWindow.resetTime) {
    globalWindow = { count: 0, resetTime: now + RATE_WINDOW_MS };
  }
  if (globalWindow.count >= MAX_GLOBAL) {
    return false;
  }

  for (const [key, val] of rateLimitMap) {
    if (val.resetTime <= now) rateLimitMap.delete(key);
  }
  const limit = rateLimitMap.get(ip);

  if (!limit) {
    if (rateLimitMap.size >= MAX_TRACKED_IPS) return false;
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    globalWindow.count++;
    return true;
  }

  if (limit.count >= MAX_PER_IP) {
    return false;
  }

  limit.count++;
  globalWindow.count++;
  return true;
}

// Returns the trimmed string, or null if the value is not a string or exceeds the limit
function readField(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length <= maxLength ? trimmed : null;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL ?? "sarahlearn84@gmail.com";
    if (!apiKey) {
      console.error("Contact form misconfigured: RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    // Get IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Honeypot check - if "website" field is filled, it's a bot
    if (body?.website) {
      console.log("Spam detected via honeypot");
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 },
      );
    }

    const name = readField(body?.name, FIELD_LIMITS.name);
    const email = readField(body?.email, FIELD_LIMITS.email);
    const subject = readField(body?.subject, FIELD_LIMITS.subject);
    const message = readField(body?.message, FIELD_LIMITS.message);
    const contact = body?.contact
      ? readField(body.contact, FIELD_LIMITS.contact)
      : "";

    // Validate required fields
    if (!name || !email || !subject || !message || contact === null) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Send email via Resend
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // change to 'portfolio@sarahcancode.dev' after domain verification
      to: recipient,
      // Subject is plain text, so it is not HTML-escaped; strip newlines to keep it on one line
      subject: `Contact Form: ${subject.replace(/[\r\n]+/g, " ")}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        ${contact ? `<p><strong>Preferred Contact:</strong> ${escapeHtml(contact)}</p>` : ""}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
