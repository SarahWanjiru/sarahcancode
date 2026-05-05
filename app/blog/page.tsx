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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
      <PostsGrid posts={posts} />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Enjoying the content?</h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto">
            These are my latest 10 posts. Follow me on Medium to get notified when I publish new articles and to read the full archive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://medium.com/@sarahcancode"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Read More on Medium
            </a>
            <a
              href="https://medium.com/@sarahcancode"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 border border-border text-text-primary rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Follow @sarahcancode
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
