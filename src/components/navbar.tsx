"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Scholarships", href: "/#scholarships" },
  { label: "About Us", href: "/#how-it-works" },
  { label: "Contact", href: "/#footer" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <nav
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 px-[clamp(20px,5vw,80px)] ${
          scrolled
            ? "bg-white/97 backdrop-blur-md border-b border-black/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-[72px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-[22px] tracking-tight no-underline"
          >
            <span className={scrolled ? "text-navy" : "text-white"}>
              Dream
            </span>
            <span className="text-brand-500">Bridge</span>
            <span className={scrolled ? "text-navy" : "text-white"}>
              {" "}Edu
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`text-[14.5px] font-medium tracking-[0.2px] transition-colors hover:text-brand-500 no-underline ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/85"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/447407748717?text=Hi%20DreamBridge%20Edu%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe57] text-white text-sm font-semibold px-[18px] py-2.5 rounded-lg transition-all hover:-translate-y-px no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Button
              onClick={() => setModalOpen(true)}
              className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-[22px] py-2.5 rounded-lg transition-all hover:-translate-y-px"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`bg-transparent border-none cursor-pointer text-2xl ${
                scrolled ? "text-navy" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden flex flex-col bg-white rounded-b-2xl shadow-xl overflow-hidden">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-foreground px-6 py-3.5 border-b border-border hover:text-brand-500 transition-colors no-underline"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/447407748717?text=Hi%20DreamBridge%20Edu%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-[15px] font-semibold px-6 py-3.5 border-b border-border text-[#25D366] no-underline"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <button
              onClick={() => {
                setModalOpen(true);
                setMobileOpen(false);
              }}
              className="text-[15px] font-semibold px-6 py-3.5 border-none cursor-pointer bg-brand-50 text-brand-500 text-left"
            >
              Get in Touch →
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
