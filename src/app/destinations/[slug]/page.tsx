import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { destinations } from "@/data/destinations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return {};

  return {
    title: `Study in ${dest.name}`,
    description: `Explore study abroad opportunities in ${dest.name}. ${dest.description}`,
  };
}

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-50 via-white to-brand-100/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#destinations"
            className="inline-flex items-center gap-1 text-sm text-brand-500 hover:text-brand-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Destinations
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{dest.flagEmoji}</span>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Study in {dest.name}
              </h1>
              <p className="text-muted-foreground mt-1">{dest.shortName}</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {dest.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Why Study in {dest.name}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {dest.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                <p className="text-sm font-medium text-foreground">{h}</p>
              </div>
            ))}
          </div>

          {/* Placeholder for future detailed content */}
          <div className="rounded-2xl bg-brand-50 border border-brand-200 p-10 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Detailed Guide Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We&apos;re preparing comprehensive guides with university
              listings, visa requirements, living costs, and student
              testimonials for {dest.name}.
            </p>
            <Link
              href="/#contact"
              className={cn(
                buttonVariants(),
                "bg-brand-500 hover:bg-brand-600 text-white rounded-full px-8 font-semibold"
              )}
            >
              Get {dest.shortName} Guidance
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
