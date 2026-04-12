"use client";

import { testimonials } from "@/data/testimonials";

export function StudentStoriesSection() {
  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="w-10 h-1 bg-brand-500 rounded-sm mb-4" />
          <h2 className="font-heading text-[32px] text-navy mb-2">
            Student Stories
          </h2>
          <p className="text-[15px] text-muted-foreground">
            Real students, real results
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((s, i) => (
            <div
              key={i}
              className="bg-off-white rounded-[14px] p-7 border border-border hover:-translate-y-[3px] transition-transform duration-250"
            >
              <div className="text-gold-500 text-base mb-3.5 tracking-[2px]">
                ★★★★★
              </div>
              <p className="text-[14.5px] text-foreground leading-[1.65] italic mb-5">
                &quot;{s.quote}&quot;
              </p>
              <div>
                <div className="text-sm font-semibold text-navy">
                  {s.name}
                </div>
                <div className="text-[12.5px] text-muted-foreground mt-0.5">
                  {s.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="mt-10 bg-off-white rounded-2xl border-2 border-dashed border-border py-12 px-5 text-center">
          <div className="text-5xl mb-3 opacity-30">▶</div>
          <p className="text-base text-muted-foreground font-medium">
            Success Stories — Video Coming Soon
          </p>
          <p className="text-[13px] text-muted-foreground mt-1.5 opacity-70">
            YouTube video embed will appear here
          </p>
        </div>
      </div>
    </section>
  );
}
