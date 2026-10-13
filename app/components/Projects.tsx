import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          PROJECTS
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8 sm:mb-12">
          Featured Work
        </h2>

        <ProjectsGrid />
      </div>
    </section>
  );
}
