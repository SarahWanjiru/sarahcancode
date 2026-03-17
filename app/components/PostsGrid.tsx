"use client";

import { useState } from "react";
import Image from "next/image";
import { MediumPost } from "../lib/medium";

export default function PostsGrid({ posts }: { posts: MediumPost[] }) {
  const allCategories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" ? posts : posts.filter((p) => p.category === selected);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-text-primary mb-2">Recent Stories</h2>
            <p className="text-text-secondary">Insights, thoughts, and technical deep dives.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selected === cat
                    ? "bg-accent text-white"
                    : "bg-surface text-text-secondary hover:text-text-primary border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-text-secondary text-center py-12">No posts found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-accent transition-all group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent mb-2 block">{post.category}</span>
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">{post.description}</p>
                  <div className="flex justify-between items-center text-xs text-text-secondary">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
