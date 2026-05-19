import { NextResponse } from "next/server";
import { getGitHubProjects } from "../../lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const projects = await getGitHubProjects();
    console.log(`[api/projects] returning ${projects.length} projects`);
    return NextResponse.json(projects);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to fetch projects";
    console.error("[api/projects] error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
