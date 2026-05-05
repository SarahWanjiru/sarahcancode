import { NextResponse } from "next/server";
import { getGitHubProjects } from "../../lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const projects = await getGitHubProjects();
    return NextResponse.json(projects);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch projects";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
