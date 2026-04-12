"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck, Send } from "lucide-react";

const destinationOptions = [
  "United Kingdom",
  "Canada",
  "Germany",
  "Australia",
  "New Zealand",
  "United States",
  "Other",
];

const budgetOptions = [
  "Under £10,000/year",
  "£10,000 – £20,000/year",
  "£20,000 – £30,000/year",
  "£30,000+/year",
  "Need scholarship/funding",
];

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // TODO: Replace with API call / email integration
    console.log("Lead Form Submission:", data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-brand-100 text-brand-700 border-brand-200"
            >
              Get Started
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Start Your Study Abroad Journey Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fill out this quick form and one of our expert advisors will reach
              out within 24 hours with a personalized plan — completely free,
              no obligations.
            </p>

            {/* Trust Points */}
            <div className="space-y-4">
              {[
                "Free initial consultation — no hidden charges",
                "Expert advisors with 10+ years experience",
                "Your data is secure and never shared with third parties",
                "95% visa success rate across all destinations",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-brand-100 text-brand-600 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ve received your inquiry. Our team will contact you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+44 1234 567890"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-1.5">
                      Preferred Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="">Select destination</option>
                      {destinationOptions.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-foreground mb-1.5">
                      Interested Course
                    </label>
                    <Input
                      id="course"
                      name="course"
                      placeholder="e.g. MSc Data Science"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-1.5">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="">Select budget</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="qualification" className="block text-sm font-medium text-foreground mb-1.5">
                    Current Qualification
                  </label>
                  <Input
                    id="qualification"
                    name="qualification"
                    placeholder="e.g. Bachelor's in Computer Science"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your goals..."
                    rows={3}
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 rounded border-input"
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs text-muted-foreground leading-relaxed"
                  >
                    I consent to DreamBridge Edu contacting me regarding my
                    inquiry. My data will be handled securely per the privacy
                    policy.
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-full font-semibold shadow-md"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Inquiry
                </Button>

                <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Your information is secure and encrypted
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
