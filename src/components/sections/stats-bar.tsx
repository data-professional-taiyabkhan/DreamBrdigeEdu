"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, count };
}

export function StatsBar() {
  const s1 = useCountUp(500, 2000);
  const s2 = useCountUp(40, 1800);
  const s3 = useCountUp(95, 2200);

  const stats = [
    { ...s1, label: "Students Placed", suffix: "+" },
    { ...s2, label: "Destinations", suffix: "+" },
    { ...s3, label: "Visa Success Rate", suffix: "%" },
  ];

  return (
    <section className="bg-white py-12 border-b border-border">
      <div className="max-w-[900px] mx-auto flex justify-around flex-wrap gap-[30px] px-5">
        {stats.map((s, i) => (
          <div key={i} ref={s.ref} className="text-center min-w-[140px]">
            <div className="font-heading text-[44px] text-brand-500 leading-none">
              {s.count}
              {s.suffix}
            </div>
            <div className="text-sm text-muted-foreground mt-1.5 font-medium tracking-[0.3px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
