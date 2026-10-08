//About
export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-3 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          ABOUT ME
        </div>

        <div className="space-y-5 text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
          <p>
            I&apos;m a{" "}
            <strong className="text-text-primary">Frontend Developer</strong>{" "}
            and{" "}
            <strong className="text-text-primary">Cloud/DevOps Engineer</strong>{" "}
            with hands-on experience building and deploying modern, scalable web
            applications from development to production.
          </p>
          <p>
            On the <strong className="text-text-primary">frontend</strong>, I
            specialize in React, Next.js, TypeScript, and Tailwind CSS &mdash;
            creating responsive, high-performance user interfaces with clean,
            maintainable code and pixel-perfect design implementation.
          </p>
          <p>
            On the <strong className="text-text-primary">cloud side</strong>, I
            design and manage infrastructure using AWS, ensuring applications
            are secure, scalable, and highly available. I also leverage Docker,
            Kubernetes, Terraform, and CI/CD pipelines to automate deployments
            and streamline development workflows.
          </p>
          <p>
            This combination allows me to bridge the gap between{" "}
            <strong className="text-text-primary">
              frontend development, cloud infrastructure, and DevOps
            </strong>{" "}
            &mdash; delivering applications that are not only visually polished
            but also reliable, scalable, and production-ready.
          </p>
          <p>
            I focus on building solutions that are efficient, maintainable, and
            optimized for real-world performance &mdash; helping products grow
            with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
