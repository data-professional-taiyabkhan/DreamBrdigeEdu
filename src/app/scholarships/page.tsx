import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Scholarships",
  description:
    "Explore scholarships for international students. Find university merit scholarships and government grants.",
};

const universityScholarships = [
  {
    title: "Merit-Based Scholarships",
    description:
      "Many top universities offer scholarships based on academic excellence. We identify and match you with the best opportunities based on your grades, test scores, and extracurriculars.",
    examples: [
      "Chevening Scholarships (UK)",
      "Vanier Canada Graduate Scholarships",
      "DAAD Scholarships (Germany)",
      "Australia Awards Scholarships",
    ],
  },
  {
    title: "Need-Based Financial Aid",
    description:
      "Universities and governments offer financial aid for students who demonstrate genuine financial need. Our team helps you navigate the application process and maximize your chances.",
    examples: [
      "University-specific bursaries",
      "Government-funded student loans",
      "Country-specific aid programs",
      "Institutional fee waivers",
    ],
  },
  {
    title: "Research & Teaching Assistantships",
    description:
      "For postgraduate students, many universities offer funded positions as research or teaching assistants. These cover tuition and provide a living stipend.",
    examples: [
      "PhD research funding",
      "Graduate teaching positions",
      "Lab assistantships",
      "Department fellowships",
    ],
  },
];

export default function ScholarshipsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-50 via-white to-brand-100/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-brand-100 text-brand-700 text-sm font-medium border border-brand-200">
              <Award className="w-4 h-4" />
              Scholarships & Funding
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Fund Your{" "}
              <span className="text-brand-500">Global Education</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We believe finances should never be a barrier to quality
              education. Explore scholarship opportunities from universities and
              governments.
            </p>
          </div>
        </div>
      </section>

      {/* University Scholarships */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              University & Government Scholarships
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {universityScholarships.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.examples.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Placeholder */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Have questions about scholarships? We&apos;re here to help.
            Contact us or check back soon for our detailed FAQ section.
          </p>
          <Link
            href="/#contact"
            className={cn(
              buttonVariants(),
              "bg-brand-500 hover:bg-brand-600 text-white rounded-full px-8 font-semibold"
            )}
          >
            Ask Us Anything
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
