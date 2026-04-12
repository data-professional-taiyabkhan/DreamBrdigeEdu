// ============================================================
// "How It Works" steps — edit to update the process timeline.
// ============================================================

import {
  MessageCircle,
  Search,
  FileText,
  GraduationCap,
  Stamp,
  Plane,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const steps: Step[] = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "Talk to our advisors about your goals, budget, and preferred destinations. We'll create a personalized roadmap for your journey.",
    icon: MessageCircle,
  },
  {
    number: 2,
    title: "Choose a Program",
    description:
      "Browse and shortlist universities and programs that match your profile, interests, and career ambitions.",
    icon: Search,
  },
  {
    number: 3,
    title: "Apply with Support",
    description:
      "We handle your entire application — from SOPs and recommendation letters to document checklist and submission.",
    icon: FileText,
  },
  {
    number: 4,
    title: "Scholarship Search",
    description:
      "We actively search for funding opportunities, merit scholarships, and need-based financial aid on your behalf.",
    icon: GraduationCap,
  },
  {
    number: 5,
    title: "Visa Guidance",
    description:
      "Step-by-step visa preparation, document verification, and mock interview coaching to maximize your success rate.",
    icon: Stamp,
  },
  {
    number: 6,
    title: "Fly & Thrive",
    description:
      "Pre-departure orientation, accommodation guidance, and airport pickup coordination so you land ready and confident.",
    icon: Plane,
  },
];
