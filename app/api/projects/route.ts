import { NextResponse } from "next/server";
import { getGitHubProjects } from "../../lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  const projects = await getGitHubProjects();
  return NextResponse.json(projects);
}
