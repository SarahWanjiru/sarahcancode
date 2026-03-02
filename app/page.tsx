"use client";

import Image from "next/image";
import { useState } from "react";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  return (
    <div className="min-h-screen bg-bg-primary px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface text-accent text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-[10px] sm:text-sm">AVAILABLE FOR PROJECTS</span>
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
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                ABOUT ME
              </div>

              <div className="space-y-4 text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                <p>
                  AWS-certified Cloud Engineer with hands-on experience designing and implementing secure, scalable, and
                  resilient cloud architectures. Skilled in deploying and managing infrastructure using AWS services such as EC2,
                  S3, RDS, VPC, IAM, and EKS, combined with automation tools like Terraform and CloudFormation.
                </p>
                <p>
                  Experienced in developing and deploying containerized applications using Docker and Kubernetes, and supporting
                  continuous integration and delivery through GitHub Actions and Jenkins. Strong background in Python, Linux, and
                  end-to-end infrastructure monitoring with CloudWatch and related tools.
                </p>
                <p>
                  Capable of architecting and optimizing database solutions using RDS and DynamoDB, while ensuring compliance,
                  performance, and operational excellence across hybrid and cloud-native environments. Passionate about enabling
                  efficiency, security, and innovation through cloud technologies and collaborative engineering practices.
                </p>
              </div>

            </div>
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

          {/* Category Tabs */}
          <div className="flex gap-2 sm:gap-4 mb-8 sm:mb-12 border-b border-border overflow-x-auto" role="tablist">
            {["Web Development", "App Development", "Cloud & DevOps"].map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap ${
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
      <section id="tech-stack" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Image src="/react.png" alt="React" width={230} height={219} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">React</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/typescript.png" alt="TypeScript" width={64} height={64} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/next.png" alt="Next.js" width={64} height={64} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/tailwind.png" alt="Tailwind CSS" width={382} height={132} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">Tailwind</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/aws.png" alt="AWS" width={275} height={183} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/docker.png" alt="Docker" width={64} height={64} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">Docker</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/kubernetes.png" alt="Kubernetes" width={275} height={183} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/git.png" alt="Git" width={64} height={64} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">Git</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/python.png" alt="Python" width={300} height={168} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">Python</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src="/terraform.png" alt="Terraform" width={64} height={64} className="h-16 w-auto hover:scale-110 transition-transform" />
              <span className="text-sm text-text-secondary font-medium">Terraform</span>
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
