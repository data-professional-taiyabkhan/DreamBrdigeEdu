"use client";

export function ScholarshipsHighlightSection() {
  return (
    <section
      id="scholarships"
      className="py-16 px-5"
      style={{
        background: "linear-gradient(135deg, #0a2e23, #0f4a38)",
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-6">
        <div>
          <h2 className="font-heading text-[28px] text-white mb-2">
            Find Your Scholarship
          </h2>
          <p className="text-[15px] text-white/70 mb-1.5 max-w-[520px]">
            Browse 100+ scholarships available for international students in
            2025–26
          </p>
          <p className="text-[13px] text-white/50">
            Academic & Merit Scholarships by globally recognized universities
          </p>
        </div>
        <a
          href="/scholarships"
          className="text-[15px] font-semibold py-3.5 px-7 border-2 border-white/30 rounded-[10px] bg-white/10 text-white transition-all backdrop-blur-sm hover:bg-white/20 hover:border-white/50 whitespace-nowrap no-underline"
        >
          Browse Scholarships →
        </a>
      </div>
    </section>
  );
}
