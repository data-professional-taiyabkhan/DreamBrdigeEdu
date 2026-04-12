import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { steps } from "@/data/steps";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From dream to degree in 6 simple steps. Learn how DreamBridge Edu guides you through every stage of your study abroad journey.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-50 via-white to-brand-100/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              From <span className="text-brand-500">Dream</span> to{" "}
              <span className="text-brand-500">Degree</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Our proven 6-step process ensures you have expert support at every
              stage of your study abroad journey — from the first conversation
              to your first day on campus.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-200 hidden sm:block" />

            <div className="space-y-12">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="relative flex gap-6 sm:gap-8"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500 text-white shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center rounded-2xl bg-brand-50 border border-brand-200 p-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Book a free consultation and let our experts create a
              personalized roadmap for your study abroad goals.
            </p>
            <Link
              href="/#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-500 hover:bg-brand-600 text-white rounded-full px-8 font-semibold shadow-md"
              )}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
