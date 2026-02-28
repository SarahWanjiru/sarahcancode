"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Design", "Engineering", "Personal"];

  const posts = [
    {
      id: 1,
      category: "ENGINEERING",
      title: "Scaling React Applications with Micro-frontends",
      description: "Learn how to break down your monolithic React apps into manageable, independently deployable pieces.",
      image: "/homepage.jpg",
      readTime: "12 min read",
      date: "Mar 12, 2024",
    },
    {
      id: 2,
      category: "DESIGN",
      title: "Typography Rules for High-Density Screens",
      description: "How to choose the right font weight and scale for mobile devices and high-resolution displays.",
      image: "/homepage.jpg",
      readTime: "5 min read",
      date: "Feb 28, 2024",
    },
    {
      id: 3,
      category: "PERSONAL",
      title: "Maintaining Creativity in a Burnout Culture",
      description: "My personal journey through creative blocks and the strategies I used to find my spark again.",
      image: "/homepage.jpg",
      readTime: "10 min read",
      date: "Feb 14, 2024",
    },
    {
      id: 4,
      category: "ENGINEERING",
      title: "The Shift to Serverless in Corporate Tech",
      description: "Analyzing why major enterprises are finally moving their legacy systems to serverless architectures.",
      image: "/homepage.jpg",
      readTime: "15 min read",
      date: "Jan 30, 2024",
    },
    {
      id: 5,
      category: "DESIGN",
      title: "Color Psychology in SaaS Branding",
      description: "How different hues impact user trust and conversion rates in modern software platforms.",
      image: "/homepage.jpg",
      readTime: "7 min read",
      date: "Jan 10, 2024",
    },
    {
      id: 6,
      category: "PERSONAL",
      title: "Why I Started Writing Every Single Day",
      description: "Reflecting on 365 days of consistent journaling and how it changed my perspective on productivity.",
      image: "/homepage.jpg",
      readTime: "4 min read",
      date: "Dec 28, 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Featured Post */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-surface border border-border rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-80 lg:h-full min-h-[400px]">
              <Image
                src="/homepage.jpg"
                alt="Featured post"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-4">
                FEATURED POST
              </span>
              <h1 className="text-4xl font-bold text-text-primary mb-4">
                The Future of Minimalist Design in 2024
              </h1>
              <p className="text-text-secondary mb-6">
                Exploring how simplicity continues to dominate the digital landscape through thoughtful user experiences and intentional whitespace.
              </p>
              <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
                <span>Jan 15, 2024</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Stories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-2">
                Recent Stories
              </h2>
              <p className="text-text-secondary">
                Insights, thoughts, and technical deep dives.
              </p>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-accent text-white"
                      : "bg-surface text-text-secondary hover:text-text-primary border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-text-secondary">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center border border-border rounded-lg text-text-secondary hover:bg-surface transition-colors">
              ←
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-lg font-medium">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-border rounded-lg text-text-secondary hover:bg-surface transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-border rounded-lg text-text-secondary hover:bg-surface transition-colors">
              3
            </button>
            <span className="text-text-secondary">...</span>
            <button className="w-10 h-10 flex items-center justify-center border border-border rounded-lg text-text-secondary hover:bg-surface transition-colors">
              8
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-border rounded-lg text-text-secondary hover:bg-surface transition-colors">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Stay in the loop
          </h2>
          <p className="text-text-secondary mb-8">
            Subscribe to get my latest posts delivered directly to your inbox. No spam, just deep dives and insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
