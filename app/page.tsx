"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  return (
    <div className="min-h-screen bg-bg-primary">
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
      <section id="about" className="py-20 px-6">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            PROJECTS
          </div>

          <h2 className="text-5xl font-bold text-text-primary mb-12">
            Featured Work
          </h2>

          {/* Category Tabs */}
          <div className="flex gap-4 mb-12 border-b border-border" role="tablist">
            {["Web Development", "App Development", "Cloud & DevOps"].map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-sm font-medium ${
                  selectedCategory === category
                    ? "text-accent border-b-2 border-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-bg-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Full-stack marketplace with real-time inventory and payment processing
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    Stripe
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-bg-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  SaaS Dashboard
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Analytics platform with real-time data visualization and reporting
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    D3.js
                  </span>
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    Node.js
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-bg-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Portfolio Website
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Modern portfolio with dark mode and smooth animations
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 bg-bg-secondary text-text-primary text-xs rounded-full">
                    Framer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-6 bg-bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
            ⚡ INTERACTIVE VISUALIZATION
          </div>

          <h2 className="text-5xl font-bold text-text-primary mb-6">
            My Tech Universe
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-16">
            Hover over any technology to explore my proficiency level and experience. A collection of powerful tools I use to craft digital realities.
          </p>

          {/* Tech Icons Grid */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none">
              <div className="text-[120px] font-bold text-text-primary">
                FRONTEND
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none" style={{top: '200px'}}>
              <div className="text-[120px] font-bold text-text-primary">
                BACKEND
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none" style={{top: '400px'}}>
              <div className="text-[120px] font-bold text-text-primary">
                TOOLS
              </div>
            </div>

            {/* Tech Icons */}
            <div className="relative z-10">
              {/* React */}
              <div className="absolute" style={{left: '50px', top: '100px'}}>
                <div className="w-16 h-16 bg-surface border border-border rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-10 h-10 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.07 1.93l.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.37-4.46c.3.53.62 1 .91 1.47l.81 1.5.81-1.5c.3-.53.62-1 .91-1.47-.54-.03-1.11-.03-1.71-.03-.6 0-1.17 0-1.71.03m-6.54.76l-.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51M9.09 9.54c-.3-.53-.62-1-.91-1.47L7.37 6.57l-.81 1.5c-.3.53-.62 1-.91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03z"/>
                  </svg>
                </div>
              </div>

              {/* TypeScript */}
              <div className="absolute" style={{left: '-20px', top: '180px'}}>
                <div className="w-14 h-14 bg-surface border border-border rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-[#3178C6] font-bold text-xl">TS</span>
                </div>
              </div>

              {/* Tailwind */}
              <div className="absolute" style={{left: '180px', top: '50px'}}>
                <div className="w-16 h-16 bg-surface border border-border rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-10 h-10 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
                  </svg>
                </div>
              </div>

              {/* Next.js */}
              <div className="absolute" style={{left: '120px', top: '140px'}}>
                <div className="w-16 h-16 bg-surface border border-border rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-text-primary font-bold text-2xl">N</span>
                </div>
              </div>

              {/* AWS */}
              <div className="absolute" style={{right: '100px', top: '80px'}}>
                <div className="w-16 h-16 bg-surface border border-border rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-10 h-10 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.76 14.96l.25-.19c.3-.23.62-.43.96-.6.34-.17.7-.3 1.07-.4.37-.1.75-.15 1.14-.15.39 0 .77.05 1.14.15.37.1.73.23 1.07.4.34.17.66.37.96.6l.25.19-.25.19c-.3.23-.62.43-.96.6-.34.17-.7.3-1.07.4-.37.1-.75.15-1.14.15-.39 0-.77-.05-1.14-.15-.37-.1-.73-.23-1.07-.4-.34-.17-.66-.37-.96-.6l-.25-.19m8.48-5.92c0-.39-.05-.77-.15-1.14-.1-.37-.23-.73-.4-1.07-.17-.34-.37-.66-.6-.96l-.19-.25.19-.25c.23-.3.43-.62.6-.96.17-.34.3-.7.4-1.07.1-.37.15-.75.15-1.14 0-.39-.05-.77-.15-1.14-.1-.37-.23-.73-.4-1.07-.17-.34-.37-.66-.6-.96L14.1 0l.19.25c.23.3.43.62.6.96.17.34.3.7.4 1.07.1.37.15.75.15 1.14 0 .39-.05.77-.15 1.14-.1.37-.23.73-.4 1.07-.17.34-.37.66-.6.96l-.19.25-.19-.25c-.23-.3-.43-.62-.6-.96-.17-.34-.3-.7-.4-1.07-.1-.37-.15-.75-.15-1.14 0-.39.05-.77.15-1.14.1-.37.23-.73.4-1.07.17-.34.37-.66.6-.96L13.9 0l-.19.25c-.23.3-.43.62-.6.96-.17.34-.3.7-.4 1.07-.1.37-.15.75-.15 1.14 0 .39.05.77.15 1.14.1.37.23.73.4 1.07.17.34.37.66.6.96l.19.25"/>
                  </svg>
                </div>
              </div>

              {/* Database */}
              <div className="absolute" style={{right: '20px', top: '140px'}}>
                <div className="w-16 h-16 bg-surface border border-border rounded-2xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-10 h-10 text-[#4DB33D]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                  </svg>
                </div>
              </div>

              {/* Docker */}
              <div className="absolute" style={{left: '200px', top: '250px'}}>
                <div className="w-14 h-14 bg-surface border border-border rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.95-5.43h2.12a.19.19 0 0 0 .19-.19V3.58a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m0 2.71h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.93 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.93 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H5.17a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m5.86 2.72h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.93 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.93 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H5.17a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.92 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H2.25a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19M23.97 13.39c-.26-.73-.76-1.3-1.47-1.7-.41-.23-.86-.38-1.33-.44-.47-.07-.95-.07-1.42 0-.47.06-.92.21-1.33.44-.41.23-.76.54-1.04.92-.28.38-.48.82-.59 1.29-.11.47-.13.96-.06 1.44.07.48.23.94.47 1.36.24.42.56.79.94 1.09.38.3.82.52 1.29.65.47.13.96.17 1.44.12.48-.05.95-.19 1.38-.41.43-.22.81-.52 1.13-.89.32-.37.56-.8.71-1.27.15-.47.21-.96.18-1.45-.03-.49-.14-.97-.33-1.42-.19-.45-.46-.86-.8-1.21-.34-.35-.74-.63-1.18-.83z"/>
                  </svg>
                </div>
              </div>

              {/* Git */}
              <div className="absolute" style={{left: '100px', top: '280px'}}>
                <div className="w-14 h-14 bg-surface border border-border rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                  </svg>
                </div>
              </div>

              {/* Kubernetes */}
              <div className="absolute" style={{right: '180px', top: '280px'}}>
                <div className="w-14 h-14 bg-surface border border-border rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-[#326CE5]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.005-.142-.02-.3-.231-.548-.526-.548s-.506.249-.526.548l-.005.142c.007.177.045.312.068.475.042.348.079.637.057.905-.02.135-.098.188-.163.25l-.012.223a6.544 6.544 0 0 0-4.146 2.003l-.19-.135c-.064.004-.206.023-.303-.033-.223-.151-.427-.358-.673-.609-.113-.12-.196-.234-.33-.35-.03-.026-.077-.061-.111-.088-.239-.191-.573-.171-.745.045-.172.216-.117.545.123.736.034.027.078.065.11.089.142.105.273.158.415.242.299.184.546.337.743.522.093.099.086.191.094.282.028.026.125.112.177.159a6.465 6.465 0 0 0-.936 2.163 6.45 6.45 0 0 0-.105 2.332l-.201.059c-.036.051-.111.176-.216.216-.257.081-.545.111-.895.148-.164.013-.305.005-.479.038-.042.008-.103.024-.145.034-.295.074-.506.33-.506.614 0 .285.211.54.506.614.042.01.103.026.145.034.174.033.315.025.479.038.35.037.638.067.895.148.105.04.18.165.216.216l.201.059a6.45 6.45 0 0 0 .105 2.332 6.465 6.465 0 0 0 .936 2.163c-.052.047-.15.133-.177.159-.008.09-.001.183-.094.282-.197.185-.444.338-.743.522-.142.084-.273.137-.415.242-.032.024-.076.062-.11.089-.24.191-.295.52-.123.736.172.216.506.236.745.045.034-.027.08-.062.111-.088.134-.116.217-.23.33-.35.246-.25.45-.458.673-.609.097-.056.239-.037.303-.033l.19.135a6.545 6.545 0 0 0 4.146 2.003l.012.223c.065.062.143.115.163.25.022.268-.015.557-.057.905-.023.163-.061.298-.068.475-.001.04.001.099.005.142.02.3.231.548.526.548s.506-.249.526-.548l.005-.142c-.007-.177-.045-.312-.068-.475-.042-.348-.079-.637-.057-.905.02-.135.098-.188.163-.25l.012-.223a6.544 6.544 0 0 0 4.146-2.003l.19.135c.064-.004.206-.023.303.033.223.151.427.358.673.609.113.12.196.234.33.35.03.026.077.061.111.088.239.191.573.171.745-.045.172-.216.117-.545-.123-.736-.034-.027-.078-.065-.11-.089-.142-.105-.273-.158-.415-.242-.299-.184-.546-.337-.743-.522-.093-.099-.086-.191-.094-.282-.028-.026-.125-.112-.177-.159a6.465 6.465 0 0 0 .936-2.163 6.45 6.45 0 0 0 .105-2.332l.201-.059c.036-.051.111-.176.216-.216.257-.081.545-.111.895-.148.164-.013.305-.005.479-.038.042-.008.103-.024.145-.034.295-.074.506-.33.506-.614 0-.285-.211-.54-.506-.614z"/>
                  </svg>
                </div>
              </div>

              {/* Figma */}
              <div className="absolute" style={{right: '50px', top: '200px'}}>
                <div className="w-14 h-14 bg-surface border border-border rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
                    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
                    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
                    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
                    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-surface border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Mastery across the stack.
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              Whether it's frontend magic or backend logic, I bring the right tools to build your vision. Ready to start?
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                Start a Project
              </a>
              <a href="#contact" className="px-8 py-3 border border-border text-text-primary rounded-lg font-medium hover:bg-bg-secondary transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
