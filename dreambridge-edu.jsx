import { useState, useEffect, useRef, useCallback } from "react";

const COLORS = {
  primary: "#0f7a5f",
  primaryDark: "#0a5e49",
  primaryLight: "#e8f5f0",
  heroGradientStart: "#0a2e23",
  heroGradientEnd: "#0f4a38",
  dark: "#1a1a2e",
  text: "#2d2d3a",
  textLight: "#6b7280",
  white: "#ffffff",
  offWhite: "#f8faf9",
  border: "#e5e7eb",
  gold: "#f59e0b",
  cardShadow: "0 4px 24px rgba(0,0,0,0.07)",
};

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');`;

/* ─── Utility: smooth scroll ─── */
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ─── Count-up hook ─── */
function useCountUp(end, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, count, suffix };
}

/* ─── Contact Modal ─── */
function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); setForm({ name: "", email: "", phone: "", destination: "", message: "" }); }, 2000);
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      animation: "fadeIn 0.3s ease"
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: COLORS.white, borderRadius: 20, width: "90%", maxWidth: 500,
        padding: "40px 36px", position: "relative",
        boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
        animation: "slideUp 0.35s ease"
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 20, background: "none",
          border: "none", fontSize: 24, cursor: "pointer", color: COLORS.textLight
        }}>×</button>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, margin: "0 0 6px", color: COLORS.dark }}>
          Get in Touch
        </h3>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: COLORS.textLight, margin: "0 0 24px" }}>
          Fill out the form and our advisors will reach out within 24 hours.
        </p>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 0", fontFamily: "'Outfit', sans-serif" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>✓</div>
            <p style={{ fontSize: 18, color: COLORS.primary, fontWeight: 600 }}>Thank you! We'll be in touch soon.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { key: "name", label: "Full Name", type: "text" },
              { key: "email", label: "Email Address", type: "email" },
              { key: "phone", label: "Phone Number", type: "tel" },
            ].map(f => (
              <input key={f.key} type={f.type} placeholder={f.label} value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 15, padding: "12px 16px",
                  border: `1.5px solid ${COLORS.border}`, borderRadius: 10, outline: "none",
                  transition: "border 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = COLORS.primary}
                onBlur={e => e.target.style.borderColor = COLORS.border}
              />
            ))}
            <select value={form.destination} onChange={e => setForm({ ...form, destination: e.target.value })}
              style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 15, padding: "12px 16px",
                border: `1.5px solid ${COLORS.border}`, borderRadius: 10, outline: "none",
                color: form.destination ? COLORS.text : COLORS.textLight, background: COLORS.white,
              }}>
              <option value="">Preferred Destination</option>
              {["UK", "Canada", "Germany", "Australia", "USA", "Netherlands", "Other"].map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <textarea placeholder="Your Message" value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              rows={3} style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 15, padding: "12px 16px",
                border: `1.5px solid ${COLORS.border}`, borderRadius: 10, outline: "none",
                resize: "vertical",
              }}
              onFocus={e => e.target.style.borderColor = COLORS.primary}
              onBlur={e => e.target.style.borderColor = COLORS.border}
            />
            <button onClick={handleSubmit} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600,
              padding: "14px", border: "none", borderRadius: 10, cursor: "pointer",
              background: COLORS.primary, color: COLORS.white, marginTop: 4,
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.target.style.background = COLORS.primaryDark}
              onMouseLeave={e => e.target.style.background = COLORS.primary}
            >Submit Inquiry</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar({ onContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", target: "hero" },
    { label: "Destinations", target: "destinations" },
    { label: "Scholarships", target: "scholarships" },
    { label: "About Us", target: "how-it-works" },
    { label: "Contact", target: "footer" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
      background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      transition: "all 0.35s ease", padding: "0 clamp(20px, 5vw, 80px)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        height: scrolled ? 64 : 72, transition: "height 0.3s",
      }}>
        {/* Logo */}
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, cursor: "pointer", letterSpacing: -0.5 }}
          onClick={() => scrollTo("hero")}>
          <span style={{ color: scrolled ? COLORS.dark : COLORS.white }}>Dream</span>
          <span style={{ color: COLORS.primary }}>Bridge</span>
          <span style={{ color: scrolled ? COLORS.dark : COLORS.white }}> Edu</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}
          className="nav-desktop">
          {links.map(l => (
            <span key={l.label} onClick={() => scrollTo(l.target)} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14.5, fontWeight: 500,
              color: scrolled ? COLORS.text : "rgba(255,255,255,0.85)",
              cursor: "pointer", transition: "color 0.2s", letterSpacing: 0.2,
            }}
              onMouseEnter={e => e.target.style.color = COLORS.primary}
              onMouseLeave={e => e.target.style.color = scrolled ? COLORS.text : "rgba(255,255,255,0.85)"}
            >{l.label}</span>
          ))}
          <button onClick={onContact} style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600,
            padding: "10px 22px", border: "none", borderRadius: 8, cursor: "pointer",
            background: COLORS.primary, color: COLORS.white, transition: "transform 0.2s, background 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = COLORS.primaryDark; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.background = COLORS.primary; e.target.style.transform = "translateY(0)"; }}
          >Get in Touch</button>
        </div>

        {/* Mobile hamburger */}
        <div className="nav-mobile" style={{ display: "none" }}>
          <button onClick={() => setMobileOpen(!mobileOpen)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: scrolled ? COLORS.dark : COLORS.white, fontSize: 26,
          }}>{mobileOpen ? "×" : "☰"}</button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-mobile" style={{
          display: "flex", flexDirection: "column", gap: 0,
          background: COLORS.white, borderRadius: "0 0 16px 16px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.12)", overflow: "hidden",
        }}>
          {links.map(l => (
            <span key={l.label} onClick={() => { scrollTo(l.target); setMobileOpen(false); }} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 500,
              color: COLORS.text, cursor: "pointer", padding: "14px 24px",
              borderBottom: `1px solid ${COLORS.border}`,
            }}>{l.label}</span>
          ))}
          <button onClick={() => { onContact(); setMobileOpen(false); }} style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
            padding: "14px 24px", border: "none", cursor: "pointer",
            background: COLORS.primaryLight, color: COLORS.primary, textAlign: "left",
          }}>Get in Touch →</button>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="hero" style={{
      background: `linear-gradient(165deg, ${COLORS.heroGradientStart} 0%, ${COLORS.heroGradientEnd} 50%, #0d6b52 100%)`,
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 20px 80px", position: "relative", overflow: "hidden",
    }}>
      {/* Decorative elements */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(15,122,95,0.3) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", left: "-8%", width: 500, height: 500,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(15,122,95,0.2) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 720, animation: "fadeInUp 0.8s ease" }}>
        <span style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500,
          color: COLORS.primary, background: "rgba(15,122,95,0.15)",
          padding: "6px 18px", borderRadius: 20, display: "inline-block", marginBottom: 24,
          border: "1px solid rgba(15,122,95,0.25)", letterSpacing: 0.8,
        }}>Your Gateway to Global Education</span>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 5.5vw, 60px)",
          color: COLORS.white, lineHeight: 1.15, margin: "0 0 20px", fontWeight: 400,
        }}>
          Build Your Future<br />
          <em style={{ color: "#4aeaaf" }}>Across the World</em>
        </h1>

        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "clamp(15px, 2vw, 17px)",
          color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: "0 auto 36px",
          maxWidth: 560,
        }}>
          DreamBridge Education connects ambitious students with top universities abroad.
          Expert guidance, scholarship support, and end-to-end help — every step of the way.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("destinations")} style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
            padding: "14px 32px", border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 10, cursor: "pointer", background: "rgba(255,255,255,0.08)",
            color: COLORS.white, transition: "all 0.25s", backdropFilter: "blur(4px)",
          }}
            onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.15)"; e.target.style.borderColor = "rgba(255,255,255,0.5)"; }}
            onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.08)"; e.target.style.borderColor = "rgba(255,255,255,0.3)"; }}
          >Explore Destinations</button>

          <button onClick={() => scrollTo("scholarships")} style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
            padding: "14px 32px", border: "none", borderRadius: 10, cursor: "pointer",
            background: COLORS.white, color: COLORS.primaryDark, transition: "all 0.25s",
          }}
            onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.target.style.transform = "translateY(0)"}
          >Find Scholarships</button>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const s1 = useCountUp(500, 2000);
  const s2 = useCountUp(40, 1800);
  const s3 = useCountUp(95, 2200);

  const stats = [
    { ...s1, label: "Students Placed", suf: "+" },
    { ...s2, label: "Destinations", suf: "+" },
    { ...s3, label: "Visa Success Rate", suf: "%" },
  ];

  return (
    <section style={{
      background: COLORS.white, padding: "48px 20px",
      borderBottom: `1px solid ${COLORS.border}`,
    }}>
      <div style={{
        maxWidth: 900, margin: "0 auto", display: "flex",
        justifyContent: "space-around", flexWrap: "wrap", gap: 30,
      }}>
        {stats.map((s, i) => (
          <div key={i} ref={s.ref} style={{ textAlign: "center", minWidth: 140 }}>
            <div style={{
              fontFamily: "'DM Serif Display', serif", fontSize: 44,
              color: COLORS.primary, lineHeight: 1,
            }}>{s.count}{s.suf}</div>
            <div style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 14,
              color: COLORS.textLight, marginTop: 6, fontWeight: 500, letterSpacing: 0.3,
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Featured Programs ─── */
function FeaturedPrograms() {
  const programs = [
    { code: "GB", flag: "🇬🇧", region: "Europe", regionColor: "#0f7a5f", uni: "University of London, UK", course: "Business & Economics", intake: "Fall / Spring", fee: "From £8,500 / year" },
    { code: "CA", flag: "🇨🇦", region: "Americas", regionColor: "#d97706", uni: "University of Toronto, Canada", course: "Engineering", intake: "All Intakes", fee: "From $12,000 / year" },
    { code: "DE", flag: "🇩🇪", region: "Europe", regionColor: "#0f7a5f", uni: "TU Munich, Germany", course: "Technology", intake: "Winter / Summer", fee: "Tuition Free" },
    { code: "AU", flag: "🇦🇺", region: "Oceania", regionColor: "#6366f1", uni: "University of Melbourne, AUS", course: "Health Sciences", intake: "All Intakes", fee: "From $18,000 / year" },
  ];

  return (
    <section style={{ background: COLORS.offWhite, padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: 40, height: 4, background: COLORS.primary, borderRadius: 2, marginBottom: 16 }} />
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: COLORS.dark, margin: "0 0 8px" }}>
            Featured Programs
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: COLORS.textLight, margin: 0 }}>
            Handpicked programs across top study destinations
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20,
        }}>
          {programs.map((p, i) => (
            <div key={i} style={{
              background: COLORS.white, borderRadius: 14, overflow: "hidden",
              boxShadow: COLORS.cardShadow, transition: "transform 0.25s, box-shadow 0.25s",
              cursor: "pointer", border: `1px solid ${COLORS.border}`,
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = COLORS.cardShadow; }}
            >
              {/* Country header */}
              <div style={{
                background: `linear-gradient(135deg, ${COLORS.heroGradientStart}, ${COLORS.heroGradientEnd})`,
                padding: "28px 20px", textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 4 }}>{p.flag}</div>
                <div style={{
                  fontFamily: "'DM Serif Display', serif", fontSize: 28,
                  color: COLORS.white, letterSpacing: 2,
                }}>{p.code}</div>
              </div>

              <div style={{ padding: "18px 20px 22px" }}>
                <span style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 600,
                  color: p.regionColor, background: `${p.regionColor}15`,
                  padding: "3px 10px", borderRadius: 4, textTransform: "uppercase", letterSpacing: 0.8,
                }}>{p.region}</span>
                <h4 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
                  color: COLORS.dark, margin: "12px 0 4px",
                }}>{p.uni}</h4>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 13, color: COLORS.textLight,
                  margin: "0 0 2px",
                }}>{p.course} · {p.intake}</p>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 14, color: COLORS.primary,
                  fontWeight: 600, margin: "10px 0 0",
                }}>{p.fee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Explore Destinations ─── */
function Destinations() {
  const destinations = [
    { code: "GB", flag: "🇬🇧", name: "UK", programs: 12 },
    { code: "CA", flag: "🇨🇦", name: "Canada", programs: 9 },
    { code: "DE", flag: "🇩🇪", name: "Germany", programs: 7 },
    { code: "AU", flag: "🇦🇺", name: "Australia", programs: 8 },
    { code: "US", flag: "🇺🇸", name: "USA", programs: 15 },
    { code: "NL", flag: "🇳🇱", name: "Netherlands", programs: 5 },
  ];

  return (
    <section id="destinations" style={{ background: COLORS.white, padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: 40, height: 4, background: COLORS.primary, borderRadius: 2, marginBottom: 16 }} />
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: COLORS.dark, margin: "0 0 8px" }}>
            Explore Destinations
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: COLORS.textLight, margin: 0 }}>
            Study across 6 continents
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: 16,
        }}>
          {destinations.map((d, i) => (
            <div key={i} style={{
              background: COLORS.offWhite, borderRadius: 14, padding: "28px 20px",
              textAlign: "center", cursor: "pointer", transition: "all 0.25s",
              border: `1.5px solid transparent`,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.primary; e.currentTarget.style.background = COLORS.primaryLight; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.background = COLORS.offWhite; }}
            >
              <div style={{ fontSize: 36, marginBottom: 8 }}>{d.flag}</div>
              <div style={{
                fontFamily: "'DM Serif Display', serif", fontSize: 18, color: COLORS.dark,
              }}>{d.name}</div>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13, color: COLORS.textLight,
                marginTop: 4, fontWeight: 500,
              }}>{d.programs} programs</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    { num: 1, title: "Free Consultation", desc: "Talk to our advisors about your goals and budget." },
    { num: 2, title: "Choose a Program", desc: "Browse and shortlist universities that match you." },
    { num: 3, title: "Apply with Support", desc: "We handle your application, SOP, and documents." },
    { num: 4, title: "Scholarship Search", desc: "We find funding and scholarship options for you." },
    { num: 5, title: "Visa Guidance", desc: "Step-by-step visa prep and interview coaching." },
    { num: 6, title: "Fly & Thrive", desc: "Pre-departure support so you land ready." },
  ];

  return (
    <section id="how-it-works" style={{ background: COLORS.offWhite, padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: COLORS.dark, margin: "0 0 8px" }}>
            How It Works
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: COLORS.textLight, margin: 0 }}>
            From dream to degree in 6 steps
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: 24,
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%", background: COLORS.primary,
                color: COLORS.white, fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px", boxShadow: "0 4px 16px rgba(15,122,95,0.3)",
              }}>{s.num}</div>
              <h4 style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
                color: COLORS.dark, margin: "0 0 6px",
              }}>{s.title}</h4>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13.5, color: COLORS.textLight,
                lineHeight: 1.55, margin: 0,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Scholarships Banner ─── */
function Scholarships() {
  return (
    <section id="scholarships" style={{
      background: `linear-gradient(135deg, ${COLORS.heroGradientStart}, ${COLORS.heroGradientEnd})`,
      padding: "64px 20px",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 24,
      }}>
        <div>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif", fontSize: 28, color: COLORS.white, margin: "0 0 8px",
          }}>Find Your Scholarship</h2>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.7)",
            margin: "0 0 6px", maxWidth: 520,
          }}>
            Browse 100+ scholarships available for international students in 2025–26
          </p>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)",
            margin: 0,
          }}>
            Academic Scholarships by universities · DreamBridge Edu Scholarships (in-house)
          </p>
        </div>
        <button style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
          padding: "14px 28px", border: "2px solid rgba(255,255,255,0.3)",
          borderRadius: 10, cursor: "pointer", background: "rgba(255,255,255,0.1)",
          color: COLORS.white, transition: "all 0.25s", whiteSpace: "nowrap",
          backdropFilter: "blur(4px)",
        }}
          onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.2)"; e.target.style.borderColor = "rgba(255,255,255,0.5)"; }}
          onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.borderColor = "rgba(255,255,255,0.3)"; }}
        >Browse Scholarships →</button>
      </div>
    </section>
  );
}

/* ─── Student Stories ─── */
function StudentStories() {
  const stories = [
    {
      quote: "Dream Bridge made the whole process so smooth. From my application to my visa — they were with me every step.",
      name: "Priya S.", loc: "Now studying in London, UK"
    },
    {
      quote: "I had no idea where to start. They helped me find a scholarship and get into my dream university in Germany — tuition free!",
      name: "Rahul M.", loc: "Now studying in Munich, Germany"
    },
    {
      quote: "The team really understood what I wanted. The visa coaching was especially helpful. Highly recommend to anyone thinking of studying abroad.",
      name: "Fatima A.", loc: "Now studying in Toronto, Canada"
    },
  ];

  return (
    <section style={{ background: COLORS.white, padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: 40, height: 4, background: COLORS.primary, borderRadius: 2, marginBottom: 16 }} />
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: COLORS.dark, margin: "0 0 8px" }}>
            Student Stories
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, color: COLORS.textLight, margin: 0 }}>
            Real students, real results
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20,
        }}>
          {stories.map((s, i) => (
            <div key={i} style={{
              background: COLORS.offWhite, borderRadius: 14, padding: "28px 24px",
              border: `1px solid ${COLORS.border}`, transition: "transform 0.25s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ color: COLORS.gold, fontSize: 16, marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 14.5, color: COLORS.text,
                lineHeight: 1.65, margin: "0 0 20px", fontStyle: "italic",
              }}>"{s.quote}"</p>
              <div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.dark,
                }}>{s.name}</div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 12.5, color: COLORS.textLight, marginTop: 2,
                }}>{s.loc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div style={{
          marginTop: 40, background: COLORS.offWhite, borderRadius: 16,
          border: `2px dashed ${COLORS.border}`, padding: "48px 20px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 48, marginBottom: 12, opacity: 0.3 }}>▶</div>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 16, color: COLORS.textLight,
            fontWeight: 500, margin: 0,
          }}>Success Stories — Video Coming Soon</p>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 13, color: COLORS.textLight,
            margin: "6px 0 0", opacity: 0.7,
          }}>YouTube video embed will appear here</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const quickLinks = ["Home", "About Us", "Destinations", "Scholarships", "Contact"];
  const destLinks = ["UK", "Canada", "Germany", "Australia", "USA"];

  return (
    <footer id="footer" style={{
      background: COLORS.dark, padding: "64px 20px 0",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40,
        paddingBottom: 48,
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "'DM Serif Display', serif", fontSize: 22, marginBottom: 12,
          }}>
            <span style={{ color: COLORS.white }}>Dream</span>
            <span style={{ color: COLORS.primary }}>Bridge</span>
            <span style={{ color: COLORS.white }}> Edu</span>
          </div>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.5)",
            lineHeight: 1.65, margin: 0,
          }}>Helping students build global futures through expert education consultancy.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600,
            color: COLORS.white, margin: "0 0 16px", letterSpacing: 0.5,
          }}>Quick Links</h4>
          {quickLinks.map(l => (
            <div key={l} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 13.5,
              color: "rgba(255,255,255,0.5)", marginBottom: 10, cursor: "pointer",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = COLORS.primary}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
            >{l}</div>
          ))}
        </div>

        {/* Destinations */}
        <div>
          <h4 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600,
            color: COLORS.white, margin: "0 0 16px", letterSpacing: 0.5,
          }}>Destinations</h4>
          {destLinks.map(l => (
            <div key={l} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 13.5,
              color: "rgba(255,255,255,0.5)", marginBottom: 10, cursor: "pointer",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = COLORS.primary}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
            >{l}</div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600,
            color: COLORS.white, margin: "0 0 16px", letterSpacing: 0.5,
          }}>Contact Us</h4>
          {[
            "info@dreambridgeedu.com",
            "+44 000 000 0000",
            "Staines, England",
          ].map(l => (
            <div key={l} style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 13.5,
              color: "rgba(255,255,255,0.5)", marginBottom: 10,
            }}>{l}</div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 0", textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 12.5,
          color: "rgba(255,255,255,0.35)", margin: 0,
        }}>© 2025 DreamBridge Edu. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ─── Main App ─── */
export default function DreamBridgeEdu() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <style>{FONTS}{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
        }

        ::selection { background: rgba(15,122,95,0.2); }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-thumb { background: rgba(15,122,95,0.3); border-radius: 4px; }
      `}</style>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar onContact={() => setModalOpen(true)} />
      <Hero />
      <StatsBar />
      <FeaturedPrograms />
      <Destinations />
      <HowItWorks />
      <Scholarships />
      <StudentStories />
      <Footer />
    </>
  );
}
