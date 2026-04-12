// ============================================================
// Site-wide constants: nav links, footer links, contact info
// Edit this file to update site-wide content in one place.
// ============================================================

export const siteConfig = {
  name: "DreamBridge Edu",
  tagline: "Your Bridge to Global Education",
  description:
    "Expert overseas education consultants helping students study abroad with scholarship support, university placement, and end-to-end guidance.",
  url: "https://dreambridgeedu.com",
  contact: {
    phone: "+44 7407748717",
    email: "info@dreambridgeedu.com",
    address: "Staines, London, United Kingdom",
  },
  social: {
    // Placeholder links — replace with real ones
    instagram: "https://instagram.com/dreambridgeedu",
    linkedin: "https://linkedin.com/company/dreambridgeedu",
    facebook: "https://facebook.com/dreambridgeedu",
    twitter: "https://twitter.com/dreambridgeedu",
    youtube: "https://youtube.com/@dreambridgeedu",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact Us", href: "/#contact" },
];

export const footerDestinationLinks = [
  { label: "Study in UK", href: "/destinations/uk" },
  { label: "Study in Canada", href: "/destinations/canada" },
  { label: "Study in Germany", href: "/destinations/germany" },
  { label: "Study in Australia", href: "/destinations/australia" },
  { label: "Study in New Zealand", href: "/destinations/new-zealand" },
];

export const trustMetrics = [
  { value: "500+", label: "Students Placed" },
  { value: "40+", label: "Destinations" },
  { value: "95%", label: "Visa Success Rate" },
];
