"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            CONNECT
          </div>
          <h2 className="text-5xl font-bold text-text-primary mb-6">
            Let&apos;s Talk.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ready to start your next project? Fill out the form below or find me on
            social platforms to discuss how we can build something great together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Find Me On
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">LinkedIn</p>
                      <p className="text-sm text-text-secondary">
                        Professional network & resume
                      </p>
                    </div>
                  </div>
                  <span className="text-text-secondary group-hover:text-accent transition-colors">
                    →
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#333] dark:bg-white rounded-lg flex items-center justify-center">
                      <Github className="w-6 h-6 text-white dark:text-[#333]" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">GitHub</p>
                      <p className="text-sm text-text-secondary">
                        Code repositories & contributions
                      </p>
                    </div>
                  </div>
                  <span className="text-text-secondary group-hover:text-accent transition-colors">
                    →
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1DA1F2] rounded-lg flex items-center justify-center">
                      <Twitter className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">Twitter / X</p>
                      <p className="text-sm text-text-secondary">
                        Thoughts & updates
                      </p>
                    </div>
                  </div>
                  <span className="text-text-secondary group-hover:text-accent transition-colors">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-text-secondary">
                  <Mail className="w-5 h-5" />
                  <span>hello@sarahcancode.dev</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 000-0000</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
