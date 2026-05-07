"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [state, handleSubmit, reset] = useForm("mojrndnd");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Auto-close after successful submission
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose, reset]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/55 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-[90%] max-w-[500px] p-9 relative shadow-2xl animate-in slide-in-from-bottom-4 fade-in duration-300"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 bg-transparent border-none text-2xl cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
        >
          ×
        </button>

        <h3 className="font-heading text-[26px] text-navy mb-1.5">
          Get in Touch
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Fill out the form and our advisors will reach out within 24 hours.
        </p>

        {state.succeeded ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-3">✓</div>
            <p className="text-lg text-brand-500 font-semibold">
              Thank you! We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="text-[15px] px-4 py-3 border-[1.5px] border-border rounded-[10px] outline-none transition-colors focus:border-brand-500 bg-white"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 -mt-2" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="text-[15px] px-4 py-3 border-[1.5px] border-border rounded-[10px] outline-none transition-colors focus:border-brand-500 bg-white"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 -mt-2" />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="text-[15px] px-4 py-3 border-[1.5px] border-border rounded-[10px] outline-none transition-colors focus:border-brand-500 bg-white"
            />

            <select
              name="destination"
              defaultValue=""
              className="text-[15px] px-4 py-3 border-[1.5px] border-border rounded-[10px] outline-none bg-white text-muted-foreground focus:border-brand-500"
            >
              <option value="" disabled>
                Preferred Destination
              </option>
              {[
                "UK",
                "Canada",
                "Germany",
                "Australia",
                "USA",
                "Netherlands",
                "Other",
              ].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              className="text-[15px] px-4 py-3 border-[1.5px] border-border rounded-[10px] outline-none resize-y focus:border-brand-500 bg-white"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 -mt-2" />

            <Button
              type="submit"
              disabled={state.submitting}
              className="mt-1 bg-brand-500 hover:bg-brand-600 text-white text-base font-semibold py-3.5 rounded-[10px] h-auto disabled:opacity-60"
            >
              <Send className="w-4 h-4 mr-2" />
              {state.submitting ? "Sending…" : "Submit Inquiry"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
