// ============================================================
// Destination data — edit this file to add/remove destinations.
// Each destination can later link to /destinations/[slug].
// ============================================================

export interface Destination {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  flagEmoji: string;
  highlights: string[];
  imageAlt: string;
  programCount: number;
}

export const destinations: Destination[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    shortName: "UK",
    description:
      "Home to world-renowned universities like Oxford, Cambridge, and Imperial College. The UK offers globally respected degrees with flexible study options.",
    flagEmoji: "🇬🇧",
    highlights: ["1-year Master's programs", "Post-study work visa", "World top 10 universities"],
    imageAlt: "Study in the United Kingdom",
    programCount: 12,
  },
  {
    slug: "canada",
    name: "Canada",
    shortName: "Canada",
    description:
      "Canada combines top-tier education with one of the highest qualities of life. Affordable tuition and clear pathways to permanent residency make it a top choice.",
    flagEmoji: "🇨🇦",
    highlights: ["PR pathway available", "Affordable tuition", "Multicultural cities"],
    imageAlt: "Study in Canada",
    programCount: 9,
  },
  {
    slug: "germany",
    name: "Germany",
    shortName: "Germany",
    description:
      "Study in Europe's economic powerhouse with many tuition-free public universities. Germany is ideal for engineering, technology, and research-oriented students.",
    flagEmoji: "🇩🇪",
    highlights: ["Tuition-free public universities", "STEM excellence", "18-month job seeker visa"],
    imageAlt: "Study in Germany",
    programCount: 7,
  },
  {
    slug: "australia",
    name: "Australia",
    shortName: "Australia",
    description:
      "Australia's universities consistently rank among the world's best. With a relaxed lifestyle, post-study work rights, and a welcoming culture, it's a student favorite.",
    flagEmoji: "🇦🇺",
    highlights: ["Post-study work visa up to 4 years", "High QS rankings", "Work while studying"],
    imageAlt: "Study in Australia",
    programCount: 8,
  },
  {
    slug: "usa",
    name: "United States",
    shortName: "USA",
    description:
      "The US hosts the largest number of top-ranked universities globally. From Ivy League to state universities, the options are endless.",
    flagEmoji: "🇺🇸",
    highlights: ["Ivy League opportunities", "OPT work authorization", "Diverse campus life"],
    imageAlt: "Study in the USA",
    programCount: 15,
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    shortName: "Netherlands",
    description:
      "The Netherlands offers innovative, English-taught programs and an internationally minded academic culture. Excellent for business, tech, and creative fields.",
    flagEmoji: "🇳🇱",
    highlights: ["English-taught programs", "Innovative education", "Central European location"],
    imageAlt: "Study in the Netherlands",
    programCount: 5,
  },
];
