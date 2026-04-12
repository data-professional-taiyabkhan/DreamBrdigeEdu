"use client";

import { steps } from "@/data/steps";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-off-white py-20 px-5">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header — centered */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-[32px] text-navy mb-2">
            How It Works
          </h2>
          <p className="text-[15px] text-muted-foreground">
            From dream to degree in 6 steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((s) => (
            <div key={s.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow-[0_4px_16px_rgba(15,122,95,0.3)]">
                {s.number}
              </div>
              <h4 className="text-[15px] font-semibold text-navy mb-1.5">
                {s.title}
              </h4>
              <p className="text-[13.5px] text-muted-foreground leading-[1.55]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
