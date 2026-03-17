import Image from "next/image";
import Footer from "../components/Footer";
import PostsGrid from "../components/PostsGrid";
import { getMediumPosts } from "../lib/medium";

export default async function BlogPage() {
  const posts = await getMediumPosts();
  const featured = posts[0];

  return (
    <div className="min-h-screen bg-bg-primary">

      {/* Featured Post */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {featured ? (
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="grid lg:grid-cols-2 gap-12 items-center bg-surface border border-border rounded-2xl overflow-hidden shadow-xl hover:border-accent transition-colors group"
            >
              <div className="relative h-80 lg:h-full min-h-[400px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4">
                  FEATURED POST
                </span>
                <h1 className="text-4xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                  {featured.title}
                </h1>
                <p className="text-text-secondary mb-6">{featured.description}</p>
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Read Article
                </span>
              </div>
            </a>
          ) : (
            <div className="text-center py-20 text-text-secondary">
              No posts found. Check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Posts Grid with category filter */}
      <PostsGrid posts={posts.slice(1)} />

      {/* Newsletter */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Stay in the loop</h2>
          <p className="text-text-secondary mb-8">
            Follow me on Medium to get my latest posts delivered directly to your feed.
          </p>
          <a
            href="https://medium.com/@sarahndungu815"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Follow on Medium →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
