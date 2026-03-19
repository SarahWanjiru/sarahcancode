"use client";

import { useCallback, useState } from "react";
import { Star, GitFork, ExternalLink } from "lucide-react";
import type { Project } from "../lib/github";

const CATEGORIES = ["All", "Web Development", "App Development", "Cloud & DevOps"];
const PAGE_SIZE = 6;

const slug = (cat: string) => cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState("All");
  const [page, setPage] = useState(1);

  const filtered =
    selected === "All" ? projects : projects.filter((p) => p.category === selected);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const idx = CATEGORIES.indexOf(selected);
      let next: string | null = null;
      if (e.key === "ArrowRight") next = CATEGORIES[(idx + 1) % CATEGORIES.length];
      if (e.key === "ArrowLeft") next = CATEGORIES[(idx - 1 + CATEGORIES.length) % CATEGORIES.length];
      if (next) {
        setSelected(next);
        setPage(1);
        (document.getElementById(`${slug(next)}-tab`) as HTMLElement)?.focus();
      }
    },
    [selected]
  );

  return (
    <>
      <div
        className="flex gap-2 sm:gap-4 mb-8 sm:mb-12 border-b border-border overflow-x-auto"
        role="tablist"
        onKeyDown={handleKeyDown}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            id={`${slug(cat)}-tab`}
            role="tab"
            aria-selected={selected === cat}
            aria-controls={`${slug(cat)}-panel`}
            tabIndex={selected === cat ? 0 : -1}
            onClick={() => { setSelected(cat); setPage(1); }}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap ${
              selected === cat
                ? "text-accent border-b-2 border-accent"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        id={`${slug(selected)}-panel`}
        role="tabpanel"
        aria-labelledby={`${slug(selected)}-tab`}
      >
        {paginated.length === 0 ? (
          <p className="text-text-secondary text-sm">No projects in this category yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-text-primary capitalize leading-snug">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors shrink-0 mt-0.5" />
                </div>

                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.language && (
                    <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                      {project.language}
                    </span>
                  )}
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-bg-secondary text-text-secondary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-text-secondary text-xs">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {project.forks}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
              className="px-4 py-2 text-sm font-medium text-text-secondary border border-border rounded-lg hover:text-text-primary hover:border-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <span className="text-sm text-text-secondary">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 text-sm font-medium text-text-secondary border border-border rounded-lg hover:text-text-primary hover:border-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
