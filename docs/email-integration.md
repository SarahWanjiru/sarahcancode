# Contact Form Email Integration

The contact form is fully functional with validation and API route. To receive emails, integrate one of these services.

## Option 1: Resend (Recommended)

**Why:** Simple, modern, great developer experience, generous free tier

### Setup

```bash
pnpm add resend
```

### Configuration

1. Sign up at https://resend.com
2. Get your API key
3. Add to `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### Update API Route

Update `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In POST function:
const { data, error } = await resend.emails.send({
  from: 'portfolio@sarahcancode.dev',
  to: 'hello@sarahcancode.dev',
  subject: `Contact Form: ${subject}`,
  replyTo: email,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    ${contact ? `<p><strong>Preferred Contact:</strong> ${contact}</p>` : ''}
  `
});

if (error) throw error;
```

---

## Option 2: SendGrid

**Why:** Established service, reliable, good free tier

### Setup

```bash
pnpm add @sendgrid/mail
```

### Configuration

1. Sign up at https://sendgrid.com
2. Get your API key
3. Add to `.env.local`:

```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

### Update API Route

Update `app/api/contact/route.ts`:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In POST function:
await sgMail.send({
  to: 'hello@sarahcancode.dev',
  from: 'portfolio@sarahcancode.dev',
  replyTo: email,
  subject: `Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    ${contact ? `<p><strong>Preferred Contact:</strong> ${contact}</p>` : ''}
  `
});
```

---

## Option 3: Nodemailer (SMTP)

**Why:** Use your own email server, no third-party service

### Setup

```bash
pnpm add nodemailer
pnpm add -D @types/nodemailer
```

### Configuration

Add to `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Update API Route

Update `app/api/contact/route.ts`:

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// In POST function:
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: 'hello@sarahcancode.dev',
  replyTo: email,
  subject: `Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    ${contact ? `<p><strong>Preferred Contact:</strong> ${contact}</p>` : ''}
  `
});
```

---

## Current Status

**Implemented:**
- Form validation (client-side)
- Error handling
- Loading states
- Success/error messages
- API route created

**Pending:**
- Email service integration (choose one above)

---

## Testing

### Before Email Integration

The form will:
- Validate all inputs
- Show loading state
- Log submissions to console
- Show success message

### After Email Integration

Test the following:
- Submit a real form
- Check spam folder
- Verify reply-to works
- Test error handling

---

## Security Notes

- Never commit `.env.local` to Git
- Add `.env.local` to `.gitignore` (already done)
- Use environment variables for all API keys
- Validate and sanitize all inputs (already done)
- Rate limiting is enforced: max 3 submissions per minute per IP (see `app/api/contact/route.ts` to review or adjust the limiter)

---

## Comparison Table

| Feature | Resend | SendGrid | Nodemailer |
|---------|--------|----------|------------|
| Free Tier | 3,000/month | 100/day | Unlimited |
| Setup Time | 5 min | 10 min | 15 min |
| Reliability | High | Very High | Depends on SMTP |
| Developer Experience | Excellent | Good | Moderate |
| Documentation | Excellent | Good | Good |
| Recommended For | Modern apps | Enterprise | Self-hosted |
