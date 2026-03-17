export interface MediumPost {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

function extractImage(content: string): string {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : "/homepage.jpg";
}

function extractDescription(content: string): string {
  const text = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text.slice(0, 160) + (text.length > 160 ? "..." : "");
}

function estimateReadTime(content: string): string {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "Unknown date";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "Unknown date";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Fetches posts from Medium via the rss2json.com public API.
 */

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sarahndungu815",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();
    if (data.status !== "ok") return [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.items.map((item: any) => ({
      id: String(item.guid || item.link || item.title),
      title: item.title,
      description: extractDescription(item.content || item.description || ""),
      link: item.link,
      date: formatDate(item.pubDate),
      category: (item.categories?.[0] || "GENERAL").toUpperCase(),
      image: extractImage(item.content || item.description || ""),
      readTime: estimateReadTime(item.content || item.description || ""),
    }));
  } catch {
    return [];
  }
}
