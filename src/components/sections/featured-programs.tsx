"use client";

import { programs } from "@/data/programs";

export function FeaturedProgramsSection() {
  return (
    <section className="bg-off-white py-20 px-5">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="w-10 h-1 bg-brand-500 rounded-sm mb-4" />
          <h2 className="font-heading text-[32px] text-navy mb-2">
            Featured Programs
          </h2>
          <p className="text-[15px] text-muted-foreground">
            Handpicked programs across top study destinations
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] overflow-hidden border border-border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-250 cursor-pointer"
            >
              {/* Country header */}
              <div
                className="text-center py-7 px-5"
                style={{
                  background:
                    "linear-gradient(135deg, #0a2e23, #0f4a38)",
                }}
              >
                <div className="text-[32px] mb-1">{p.flagEmoji}</div>
                <div className="font-heading text-[28px] text-white tracking-[2px]">
                  {p.countryCode}
                </div>
              </div>

              <div className="p-5 pt-4">
                <span
                  className="inline-block text-[11px] font-semibold uppercase tracking-[0.8px] px-2.5 py-0.5 rounded-sm"
                  style={{
                    color: p.regionColor,
                    background: `${p.regionColor}15`,
                  }}
                >
                  {p.region}
                </span>
                <h4 className="text-[15px] font-semibold text-navy mt-3 mb-1">
                  {p.university}
                </h4>
                <p className="text-[13px] text-muted-foreground mb-0.5">
                  {p.course} · {p.intake}
                </p>
                <p className="text-sm text-brand-500 font-semibold mt-2.5">
                  {p.fee}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
