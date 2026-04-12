"use client";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(165deg, #0a2e23 0%, #0f4a38 50%, #0d6b52 100%)",
        padding: "120px 20px 80px",
      }}
    >
      {/* Decorative glows */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(15,122,95,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-[15%] -left-[8%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(15,122,95,0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[720px] animate-in fade-in slide-in-from-bottom-6 duration-700">
        {/* Badge */}
        <span className="inline-block text-[13px] font-medium text-brand-500 bg-brand-500/15 px-[18px] py-1.5 rounded-full mb-6 border border-brand-500/25 tracking-[0.8px]">
          Your Gateway to Global Education
        </span>

        {/* Headline */}
        <h1 className="font-heading text-[clamp(36px,5.5vw,60px)] text-white leading-[1.15] mb-5 font-normal">
          Build Your Future
          <br />
          <em className="text-brand-300">Across the World</em>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(15px,2vw,17px)] text-white/70 leading-[1.7] mx-auto mb-9 max-w-[560px]">
          DreamBridge Education connects ambitious students with top
          universities abroad. Expert guidance, scholarship support, and
          end-to-end help — every step of the way.
        </p>

        {/* CTAs */}
        <div className="flex gap-3.5 justify-center flex-wrap">
          <a
            href="#destinations"
            className="text-[15px] font-semibold px-8 py-3.5 border-2 border-white/30 rounded-[10px] bg-white/[0.08] text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50 no-underline"
          >
            Explore Destinations
          </a>
          <a
            href="#scholarships"
            className="text-[15px] font-semibold px-8 py-3.5 border-none rounded-[10px] bg-white text-brand-600 transition-all hover:-translate-y-0.5 no-underline"
          >
            Find Scholarships
          </a>
        </div>
      </div>
    </section>
  );
}
