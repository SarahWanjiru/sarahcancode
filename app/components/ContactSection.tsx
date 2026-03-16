"use client";

import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
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
  const [apiError, setApiError] = useState<string>("");

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
    setApiError("");

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
      
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setApiError(body.error || "Failed to send message. Please try again or email me directly.");
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setApiError("Failed to send message. Please try again or email me directly.");
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
                
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@sarahcancode.dev"
                  className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">Email</p>
                      <p className="text-sm text-text-secondary">sarahlearn84@gmail.com</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/254720171697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">WhatsApp</p>
                      <p className="text-sm text-text-secondary">+254 720 171 697</p>
                    </div>
                  </div>
                </a>

                <div className="flex items-center justify-between p-4 bg-surface border border-border rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-text-secondary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">Location</p>
                      <p className="text-sm text-text-secondary">Nairobi, Kenya</p>
                    </div>
                  </div>
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
                ✗ {apiError}
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
