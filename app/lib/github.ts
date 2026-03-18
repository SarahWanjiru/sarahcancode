export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

const CATEGORY_KEYWORDS: [string, string][] = [
  ["web", "Web Development"],
  ["mobile", "App Development"],
  ["cloud", "Cloud & DevOps"],
];

function detectCategory(topics: string[]): string | null {
  for (const topic of topics) {
    const parts = topic.split("-");
    for (const [keyword, label] of CATEGORY_KEYWORDS) {
      if (parts.includes(keyword)) return label;
    }
  }
  return null;
}

function extractTags(topics: string[]): string[] {
  const skip = new Set(["web", "mobile", "cloud", "or"]);
  return [...new Set(
    topics.flatMap((t) => t.split("-")).filter((t) => !skip.has(t) && t.length > 1)
  )].map((t) => t.charAt(0).toUpperCase() + t.slice(1));
}

export type Project = {
  id: number;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  language: string | null;
  stars: number;
  forks: number;
};

export async function getGitHubProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/SarahWanjiru/repos?sort=updated&per_page=100",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];

    const repos: GitHubRepo[] = await res.json();

    return repos
      .filter((r) => r.description && detectCategory(r.topics) !== null)
      .map((r) => ({
        id: r.id,
        name: r.name.replace(/[-_]/g, " "),
        description: r.description!,
        url: r.html_url,
        category: detectCategory(r.topics)!,
        tags: extractTags(r.topics),
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
      }));
  } catch {
    return [];
  }
}
