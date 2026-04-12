"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

// Based on the reference JSX
export function Footer() {
  const quickLinks = [
    { label: "Home", href: "/#hero" },
    { label: "About Us", href: "/#how-it-works" },
    { label: "Destinations", href: "/#destinations" },
    { label: "Scholarships", href: "/#scholarships" },
    { label: "Contact", href: "/#footer" },
  ];
  const destLinks = [
    { label: "UK", href: "/destinations/uk" },
    { label: "Canada", href: "/destinations/canada" },
    { label: "Germany", href: "/destinations/germany" },
    { label: "Australia", href: "/destinations/australia" },
    { label: "USA", href: "/destinations/usa" },
  ];

  return (
    <footer id="footer" className="bg-navy pt-16 px-5 relative z-10 w-full">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
        {/* Brand */}
        <div>
          <div className="font-heading text-[22px] mb-3">
            <span className="text-white">Dream</span>
            <span className="text-brand-500">Bridge</span>
            <span className="text-white"> Edu</span>
          </div>
          <p className="text-[13.5px] text-white/50 leading-[1.65] m-0 pr-4">
            Helping students build global futures through expert education
            consultancy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-white mb-4 tracking-[0.5px]">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2.5">
            {quickLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13.5px] text-white/50 hover:text-brand-500 transition-colors no-underline block"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-white mb-4 tracking-[0.5px]">
            Destinations
          </h4>
          <div className="flex flex-col gap-2.5">
            {destLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13.5px] text-white/50 hover:text-brand-500 transition-colors no-underline block"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-sm font-semibold text-white mb-4 tracking-[0.5px]">
            Contact Us
          </h4>
          <div className="flex flex-col gap-2.5">
            <div className="text-[13.5px] text-white/50">
              {siteConfig.contact.email}
            </div>
            <div className="text-[13.5px] text-white/50">
              {siteConfig.contact.phone}
            </div>
            <div className="text-[13.5px] text-white/50">
              {siteConfig.contact.address}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center">
        <p className="text-[12.5px] text-white/35 m-0">
          © {new Date().getFullYear()} DreamBridge Edu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
