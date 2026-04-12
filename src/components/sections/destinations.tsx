"use client";

import { destinations } from "@/data/destinations";

export function DestinationsSection() {
  return (
    <section id="destinations" className="bg-white py-20 px-5">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="w-10 h-1 bg-brand-500 rounded-sm mb-4" />
          <h2 className="font-heading text-[32px] text-navy mb-2">
            Explore Destinations
          </h2>
          <p className="text-[15px] text-muted-foreground">
            Study across 6 continents
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((d, i) => (
            <a
              key={i}
              href={`/destinations/${d.slug}`}
              className="bg-off-white rounded-[14px] py-7 px-5 text-center cursor-pointer transition-all duration-250 border-[1.5px] border-transparent hover:border-brand-500 hover:bg-brand-50 no-underline"
            >
              <div className="text-4xl mb-2">{d.flagEmoji}</div>
              <div className="font-heading text-lg text-navy">
                {d.shortName}
              </div>
              <div className="text-[13px] text-muted-foreground mt-1 font-medium">
                {d.programCount} programs
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
