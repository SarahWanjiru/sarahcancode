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
  const username = process.env.GITHUB_USERNAME;
  if (!username) {
    console.error("[github] GITHUB_USERNAME env var is not set");
    return [];
  }

  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);

  try {
    const res = await fetch(url, { headers, signal: controller.signal, next: { revalidate: 300 } } as RequestInit);
    clearTimeout(timer);

    if (!res.ok) {
      console.error(`[github] fetch failed: ${res.status} ${res.statusText} — ${url}`);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();

    return repos.reduce<Project[]>((acc, r) => {
      const category = detectCategory(r.topics);
      if (!category || !r.description) return acc;
      acc.push({
        id: r.id,
        name: r.name.replace(/[-_]/g, " "),
        description: r.description,
        url: r.html_url,
        category,
        tags: extractTags(r.topics),
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
      });
      return acc;
    }, []);
  } catch (err) {
    clearTimeout(timer);
    if (err instanceof Error && err.name === "AbortError") {
      console.error(`[github] request timed out after 10s — ${url}`);
    } else {
      console.error(`[github] unexpected error fetching ${url}:`, err);
    }
    return [];
  }
}
