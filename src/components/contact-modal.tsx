"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setForm({ name: "", email: "", phone: "", destination: "", message: "" });
      }, 2000);
    },
    [onClose]
  );

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

        {submitted ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-3">✓</div>
            <p className="text-lg text-brand-500 font-semibold">
              Thank you! We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            {[
              { key: "name", label: "Full Name", type: "text" },
              { key: "email", label: "Email Address", type: "email" },
              { key: "phone", label: "Phone Number", type: "tel" },
            ].map((f) => (
              <input
                key={f.key}
                type={f.type}
                placeholder={f.label}
                required
                value={form[f.key as keyof typeof form]}
                onChange={(e) =>
                  setForm({ ...form, [f.key]: e.target.value })
                }
                className="text-[15px] px-4 py-3 border-[1.5px] border-border rounded-[10px] outline-none transition-colors focus:border-brand-500 bg-white"
              />
            ))}
            <select
              value={form.destination}
              onChange={(e) =>
                setForm({ ...form, destination: e.target.value })
              }
              className="text-[15px] px-4 py-3 border-[1.5px] border-border rounded-[10px] outline-none bg-white text-muted-foreground focus:border-brand-500"
            >
              <option value="">Preferred Destination</option>
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
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              rows={3}
              className="text-[15px] px-4 py-3 border-[1.5px] border-border rounded-[10px] outline-none resize-y focus:border-brand-500 bg-white"
            />
            <Button
              type="submit"
              className="mt-1 bg-brand-500 hover:bg-brand-600 text-white text-base font-semibold py-3.5 rounded-[10px] h-auto"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Inquiry
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
