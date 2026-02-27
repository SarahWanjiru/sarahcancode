import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-secondary">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface text-accent text-sm font-medium rounded-full mb-6">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                AVAILABLE FOR SOFTWARE & CLOUD PROJECTS
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Engineering Reliable Systems{" "}
                <span className="text-accent">
                  From Interface to Infrastructure
                </span>
              </h1>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                I'm Sarah, a Software Engineer building modern web applications
                backed by scalable cloud architecture and structured DevOps
                practices. I care about clean systems, performance, and
                long-term sustainability — not just shipping fast, but building
                right.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/homepage.jpg"
                  alt="Coding workspace"
                  width={600}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                ABOUT ME
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-text-primary mb-8">
                I craft <span className="text-accent">digital experiences</span>{" "}
                that matter.
              </h2>

              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  I'm Sarah, a multidisciplinary product designer and developer
                  based in the heart of San Francisco. My journey began in
                  graphic design, but my curiosity for how things work led me
                  into the world of code.
                </p>
                <p>
                  Today, I sit at the intersection of design and engineering,
                  bridging the gap between user needs and business goals. I
                  believe that the best products are built with empathy,
                  precision, and a deep understanding of the human experience.
                </p>
                <p>
                  When I'm not pushing pixels or writing clean code, you can
                  find me exploring the California coast, experimenting with
                  analog photography, or brewing the perfect cup of coffee.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Interaction Design",
                    "Front-end Architecture",
                    "Design Systems",
                    "User Research",
                    "Accessibility (a11y)",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-surface border border-border rounded-lg text-text-primary text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-text-primary mb-8">
                  Experience
                </h3>
                <div className="space-y-8">
                  {/* Job 1 */}
                  <div className="border-l-2 border-accent pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-text-primary">
                        Senior Product Designer
                      </h4>
                      <span className="text-sm text-text-secondary">
                        2021 — Present
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-accent hover:underline mb-3 inline-block"
                    >
                      TechFlow Inc.
                    </a>
                    <p className="text-text-secondary">
                      Spearheading the design system 2.0 initiative and
                      mentoring junior designers. Successfully reduced
                      design-to-dev handoff time by 40%.
                    </p>
                  </div>

                  {/* Job 2 */}
                  <div className="border-l-2 border-border pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-text-primary">
                        UX Designer
                      </h4>
                      <span className="text-sm text-text-secondary">
                        2019 — 2021
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-accent hover:underline mb-3 inline-block"
                    >
                      CreativeAgency
                    </a>
                    <p className="text-text-secondary">
                      Designed end-to-end user flows for major fintech clients.
                      Collaborated closely with stakeholders to define product
                      requirements.
                    </p>
                  </div>

                  {/* Job 3 */}
                  <div className="border-l-2 border-border pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-text-primary">
                        Junior Designer
                      </h4>
                      <span className="text-sm text-text-secondary">
                        2017 — 2019
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-accent hover:underline mb-3 inline-block"
                    >
                      StartupInc
                    </a>
                    <p className="text-text-secondary">
                      Assisted in UI component creation and marketing
                      collateral. Gained expertise in agile methodologies and
                      responsive web design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image & Stats */}
            <div className="lg:sticky lg:top-32">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/homepage.jpg"
                  alt="Sarah"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-6 right-6 bg-bg-primary px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-xs text-text-secondary">STATUS</p>
                    <p className="text-sm font-semibold text-text-primary">
                      Open to Work
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface border border-border rounded-xl p-6">
                  <p className="text-4xl font-bold text-text-primary mb-2">
                    5<sup className="text-2xl">+</sup>
                  </p>
                  <p className="text-text-secondary text-sm">
                    Years of Experience
                  </p>
                </div>
                <div className="bg-surface border border-border rounded-xl p-6">
                  <p className="text-4xl font-bold text-text-primary mb-2">
                    50<sup className="text-2xl">+</sup>
                  </p>
                  <p className="text-text-secondary text-sm">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
