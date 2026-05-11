"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import RevealWrapper from "@/components/RevealWrapper";

const words = ["Builders.", "Freelancers.", "Founders.", "Innovators."];

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setWordIdx(i => (i + 1) % words.length);
      setAnimKey(k => k + 1);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: "100svh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "96px var(--px) 64px" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(to right, #1E1E1E 1px, transparent 1px), linear-gradient(to bottom, #1E1E1E 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 5%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: "38%", left: "30%", transform: "translate(-50%,-50%)", width: 800, height: 600, background: "radial-gradient(ellipse, var(--red-glow) 0%, transparent 68%)", pointerEvents: "none" }} />

        <div style={{ position: "absolute", top: 100, right: 40, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 2.4, textAlign: "right" }} className="desktop-only">
          <div>EST. 2024</div>
          <div>CALABAR, NIGERIA</div>
          <div style={{ color: "var(--accent)" }}>◆ ACTIVE</div>
        </div>

        <div style={{ maxWidth: 1200, top: 40, margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--red)", marginBottom: 28, border: "1px solid var(--red-glow)", padding: "6px 14px", borderRadius: 100, background: "var(--red-fade)", animation: "heroFadeIn 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--red)", flexShrink: 0, animation: "pulseDot 2s ease-in-out infinite" }} />
            Now Enrolling · 2025 Cohort
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px, 16vw, 130px)", lineHeight: 0.92, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 28, animation: "heroFadeIn 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}>
           Built for <br />
            <span style={{ color: "var(--accent)" }}>Africa's next<span key={animKey} style={{ color: "var(--accent)", display: "inline-block", animation: "wordFadeIn 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>{words[wordIdx]}</span>
</span>
          </h1>

        {/*  <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "4px 12px", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(20px, 3.5vw, 40px)", letterSpacing: "-0.02em", color: "var(--dim)", marginBottom: 36, animation: "heroFadeIn 0.8s 0.18s cubic-bezier(0.16,1,0.3,1) both" }}>
            Built for Africa's Next&nbsp;
            <span key={animKey} style={{ color: "var(--text)", display: "inline-block", animation: "wordFadeIn 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>{words[wordIdx]}</span>
          </div>*/}

          <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--dim)", maxWidth: 520, marginBottom: 48, fontWeight: 300, animation: "heroFadeIn 0.8s 0.26s cubic-bezier(0.16,1,0.3,1) both" }}>
At BLUNT Technology, we don’t just teach tech — we build people, systems, and scalable digital solutions that shape the future of Africa.          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "heroFadeIn 0.8s 0.34s cubic-bezier(0.16,1,0.3,1) both" }}>
            <Link href="/programs" className="btn btn-primary">Explore Programs →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 72, paddingTop: 44, borderTop: "1px solid var(--border)", animation: "heroFadeIn 0.8s 0.44s cubic-bezier(0.16,1,0.3,1) both" }} className="stats-grid">
            {[["50+", "Students Trained"], ["10+", "Active Programs"], ["10+", "Freelancers Placed"], ["3", "Digital Products"]].map(([n, l]) => (
              <div key={l} style={{ paddingRight: 48, marginRight: 48, borderRight: "1px solid var(--border)" }} className="stat-item">
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text)", letterSpacing: "-0.035em", marginTop: 15 }}>{n}</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ABOUT SNIPPET */}
      <div className="section-border-bot">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 100px", alignItems: "center" }} className="two-col">
            <RevealWrapper>
              <div className="label"><span className="label-dot" />Our Story</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 6vw, 64px)", letterSpacing: "-0.035em", lineHeight: 1.0, color: "var(--text)" }}>
                Built by Africans.<br />
                <span style={{ color: "var(--accent)" }}>For Africa's founders.</span>
              </h2>
            </RevealWrapper>
            <RevealWrapper delay="2">
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 22 }}>BLUNT Technology was founded as a response to a critical gap in accessible, relevant, and career-focused technology education in Nigeria and Africa at large.</p>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 28 }}>The vision originated from BLUNT Network—an acronym for Becoming Leaders United, Nourished, and Transformed—a long-standing initiative focused on leadership development and transformation across multiple sectors. After years of conceptual development, BLUNT Technology emerged in the second half of 2021 as its first operational subsidiary.</p>
              <Link href="/about" className="btn btn-ghost">Read our full story →</Link>
            </RevealWrapper>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div>
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />What We Do</div>
            <div className="section-header">
              <h2 className="section-heading">Four pillars.<br />One ecosystem.</h2>
              <p>Every offering connects. Train, freelance, build, and grow — all under one roof.</p>
            </div>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, background: "var(--border)" }} className="services-grid">
            {[
              { n: "01", icon: "◈", title: "IT Training", desc: "Structured learning paths from beginner to professional. Web, data, cloud, design — skills that pay real salaries.", href: "/programs" },
              { n: "02", icon: "◎", title: "Freelancing Hub", desc: "We don't just teach skills — we show you how to sell them. Rates, clients, contracts, and sustainable growth.", href: "/freelancing" },
              { n: "03", icon: "⬡", title: "Digital Products", desc: "Apps, SaaS tools, and AI-powered solutions built in-house and shipped to real users across Africa and beyond.", href: "/products" },
              { n: "04", icon: "◇", title: "Business Solutions", desc: "Tech strategy and digital transformation for businesses ready to step into their next chapter.", href: "/contact" },
            ].map((s, i) => (
              <RevealWrapper key={s.n} delay={String(i)} style={{ background: "var(--card)" }}>
                <Link href={s.href} style={{ display: "flex", flexDirection: "column", padding: "30px 26px", borderLeft: "2px solid var(--border)", height: "100%", transition: "background 0.25s ease, border-color 0.25s ease" }} className="service-card-link">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--muted)" }}>{s.n}</span>
                    <span style={{ fontSize: 18, color: "var(--muted)" }}>{s.icon}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ color: "var(--dim)", fontSize: 13, lineHeight: 1.8, flex: 1, marginBottom: 28 }}>{s.desc}</p>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--muted)" }}>Learn more →</span>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRAMS SNIPPET */}
      <div className="section-border-top">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />Training Programs</div>
            <div className="section-header">
              <h2 className="section-heading">Skills that<br /><span className="accent">ship.</span></h2>
              <Link href="/programs" className="btn btn-ghost">View all programs →</Link>
            </div>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }} className="programs-grid">
            {[
              { tag: "Web Dev", title: "Frontend Engineering Bootcamp", level: "Beginner → Intermediate", duration: "12 Weeks", spots: "14 spots left", open: false },
              { tag: "Data & AI", title: "Data Analytics & Python", level: "Beginner", duration: "8 Weeks", spots: "8 spots left", open: false },
              { tag: "Design", title: "UI/UX Product Design", level: "All Levels", duration: "10 Weeks", spots: "Open Enrollment", open: true },
            ].map((c, i) => (
              <RevealWrapper key={c.title} delay={String(i)} style={{ background: "var(--card)" }}>
                <Link href="/programs" style={{ display: "flex", flexDirection: "column", padding: "26px 22px", height: "100%", transition: "background 0.25s" }} className="course-link">
                  <span style={{ display: "inline-block", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", background: "var(--accent-fade)", padding: "3px 9px", borderRadius: 2, marginBottom: 14 }}>{c.tag}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.35, marginBottom: 18, flex: 1 }}>{c.title}</h3>
                  <div style={{ display: "flex", gap: 22, marginBottom: 20 }}>
                    <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 4 }}>Level</div><div style={{ fontSize: 11, color: "var(--dim)" }}>{c.level}</div></div>
                    <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 4 }}>Duration</div><div style={{ fontSize: 11, color: "var(--dim)" }}>{c.duration}</div></div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: c.open ? "var(--accent)" : "#FF8C42" }}>● {c.spots}</span>
                    <span style={{ fontSize: 15, color: "var(--muted)" }}>→</span>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

    {/*  
      <div className="bg-card section-border-top section-border-bot">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />Student Wins</div>
            <h2 className="section-heading" style={{ marginBottom: 36 }}>Real people.<br /><span className="accent">Real results.</span></h2>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }} className="testimonials-grid">
            {[
              { q: "BLUNT didn't just teach me React — they taught me how to think like a developer. I got my first client 3 weeks after finishing the program.", name: "Adaeze O.", role: "Frontend Developer · Lagos" },
              { q: "I was terrified of switching careers. BLUNT made it a straight line, not a maze. Now I'm earning in dollars and calling my own shots.", name: "Emmanuel I.", role: "Freelance Designer · Abuja" },
              { q: "The mentorship and community are real. BLUNT connected me with clients who needed exactly my skill set within weeks of graduating.", name: "Chiamaka D.", role: "Data Analyst · Enugu" },
            ].map((t, i) => (
              <RevealWrapper key={t.name} delay={String(i)} style={{ background: "var(--card)", padding: "32px 26px" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: "var(--accent)", lineHeight: 1, marginBottom: 18 }}>"</div>
                <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 14, marginBottom: 28 }}>{t.q}</p>
                <div style={{ paddingTop: 18, borderTop: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{t.role}</div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA BANNER */}
      <div style={{ background: "var(--accent)", padding: "100px var(--px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 52, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(56px, 8vw, 96px)", letterSpacing: "-0.04em", lineHeight: 0.9, color: "#070707" }}>Ready to go<br />BLUNT?</h2>
            <p style={{ color: "rgba(7,7,7,0.5)", fontSize: 17, marginTop: 22, lineHeight: 1.7 }}>Stop watching the tech revolution from the sidelines.<br />Your cohort starts soon — spots fill fast.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 230 }}>
            <Link href="/programs" style={{ background: "#070707", color: "var(--accent)", border: "none", padding: "16px 28px", borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer", textAlign: "center", display: "block" }}>Enroll Now →</Link>
            <Link href="/contact" style={{ background: "transparent", color: "#070707", border: "2px solid rgba(7,7,7,0.25)", padding: "14px 28px", borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14, cursor: "pointer", textAlign: "center", display: "block" }}>Talk to an advisor</Link>
          </div>
        </div>
      </div>

      <style>{`
        .desktop-only { display: none; }
        @media (min-width: 1024px) { .desktop-only { display: block; } }
        .two-col { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) { .two-col { grid-template-columns: 1fr 1fr !important; } }
        .services-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .services-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        .programs-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .programs-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .programs-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        .testimonials-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .testimonials-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        .stats-grid { grid-template-columns: 1fr 1fr !important; }
        @media (min-width: 640px) { .stats-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        .stat-item:last-child { border-right: none !important; padding-right: 0 !important; margin-right: 0 !important; }
        .service-card-link:hover { background: var(--card-hover) !important; border-left-color: var(--accent) !important; }
        .course-link:hover { background: var(--card-hover) !important; }
      `}</style>
    </>
  );
}
