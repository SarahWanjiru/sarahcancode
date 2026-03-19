import Image from "next/image";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProjectsGrid from "./components/ProjectsGrid";
import { getGitHubProjects } from "./lib/github";
import { Suspense } from "react";

async function Projects() {
  const projects = await getGitHubProjects();
  return <ProjectsGrid projects={projects} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface text-accent text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-[10px] sm:text-sm">
                  AVAILABLE FOR PROJECTS
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
                Engineering Reliable Systems{" "}
                <span className="text-accent">
                  From Interface to Infrastructure
                </span>
              </h1>
            </div>

            <Image
              src="/herosection.jpg"
              alt="Coding workspace"
              width={600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            ABOUT ME
          </div>

          <div className="space-y-5 text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>
              I&apos;m a <strong className="text-text-primary">Frontend Developer</strong> and <strong className="text-text-primary">Cloud/DevOps Engineer</strong> with hands-on experience building and deploying modern, scalable web applications from development to production.
            </p>
            <p>
              On the <strong className="text-text-primary">frontend</strong>, I specialize in React, Next.js, TypeScript, and Tailwind CSS &mdash; creating responsive, high-performance user interfaces with clean, maintainable code and pixel-perfect design implementation.
            </p>
            <p>
              On the <strong className="text-text-primary">cloud side</strong>, I design and manage infrastructure using AWS, ensuring applications are secure, scalable, and highly available. I also leverage Docker, Kubernetes, Terraform, and CI/CD pipelines to automate deployments and streamline development workflows.
            </p>
            <p>
              This combination allows me to bridge the gap between <strong className="text-text-primary">frontend development, cloud infrastructure, and DevOps</strong> &mdash; delivering applications that are not only visually polished but also reliable, scalable, and production-ready.
            </p>
            <p>
              I focus on building solutions that are efficient, maintainable, and optimized for real-world performance &mdash; helping products grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            PROJECTS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8 sm:mb-12">
            Featured Work
          </h2>

          <Suspense fallback={<p className="text-text-secondary text-sm">Loading projects...</p>}>
            <Projects />
          </Suspense>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            TECH STACK
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8 sm:mb-12">
            My Tech Universe
          </h2>

          {/* Tech Icons Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8 sm:gap-12">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/react.png"
                alt="React"
                width={230}
                height={219}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                React
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/typescript.png"
                alt="TypeScript"
                width={64}
                height={64}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                TypeScript
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/next.png"
                alt="Next.js"
                width={64}
                height={64}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                Next.js
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/tailwind.png"
                alt="Tailwind CSS"
                width={382}
                height={132}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                Tailwind
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/aws.png"
                alt="AWS"
                width={275}
                height={183}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                AWS
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/docker.png"
                alt="Docker"
                width={64}
                height={64}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                Docker
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/kubernetes.png"
                alt="Kubernetes"
                width={275}
                height={183}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                Kubernetes
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/git.png"
                alt="Git"
                width={64}
                height={64}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                Git
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/python.png"
                alt="Python"
                width={300}
                height={168}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                Python
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/terraform.png"
                alt="Terraform"
                width={64}
                height={64}
                className="h-16 w-auto hover:scale-110 transition-transform"
              />
              <span className="text-sm text-text-secondary font-medium">
                Terraform
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
