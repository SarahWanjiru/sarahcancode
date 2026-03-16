"use client";

import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!subject || subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }

    if (!message || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    if (formData.get("website")) {
      setSubmitStatus("success");
      form.reset();
      return;
    }
    
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      contact: formData.get("your-contact"),
      website: formData.get("website") // honeypot field
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          CONNECT
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-8 sm:mb-12">
          Let&apos;s Talk.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Find Me On
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/sarahndungu"
                  className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">
                        LinkedIn
                      </p>
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
                  href="https://github.com/SarahWanjiru"
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
                  href="https://x.com/shirawbedan"
                  className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1DA1F2] rounded-lg flex items-center justify-center">
                      <Twitter className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">
                        Twitter / X
                      </p>
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
                  <span>+254 720 171 697</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary">
                  <MapPin className="w-5 h-5" />
                  <span>Nairobi Kenya </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Send a Message
            </h3>
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400">
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400">
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users, catches bots */}
              {/* Using enticing name "website" to attract bots */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              
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
                    name="name"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-bg-primary border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.name ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                  )}
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
                    name="email"
                    placeholder="hello@example.com"
                    className={`w-full px-4 py-3 bg-bg-primary border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                  )}
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
                  name="subject"
                  placeholder="Project Inquiry"
                  className={`w-full px-4 py-3 bg-bg-primary border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.subject ? "border-red-500" : "border-border"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                )}
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
                  name="message"
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  className={`w-full px-4 py-3 bg-bg-primary border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>

               <div>
                <label
                  htmlFor="your-contact"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  PREFERRED CONTACT METHOD
                </label>
                <textarea
                  id="your-contact"
                  name="your-contact"
                  rows={2}
                  placeholder="Phone number, best time to reach you, or preferred method..."
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
