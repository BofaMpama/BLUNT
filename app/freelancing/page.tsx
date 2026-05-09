import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const steps = [
  { n: "01", title: "Master a High-Income Skill", desc: "Pick a track — web dev, design, data, cloud or AI evaluation. Our programs teach you the exact skills that are highly sort after, technical or non-technical " },
  { n: "02", title: "Build a Portfolio That Converts", desc: "We guide you through the quickest way to attract your first job. Be it via building a couple of real life projects or partnering with the right individuals." },
  { n: "03", title: "Position & Price Yourself", desc: "Learn how to identify your niche, where to find worthy jobs with good hourly pay, how to set your rates for direct clients." },
  { n: "04", title: "Land Your First Job", desc: "Step by step approach to landing your first job in dollars. Strategies, tricks and hacks no one will readily tell you, but are secretly doing." },
  { n: "05", title: "Deliver & Retain", desc: "Learn how to maintain quality, client communication, systems and deal structures that ensures consistency and continuity." },
  { n: "06", title: "Scale to a Business", desc: "Replicate all you have learned with another platform, another client, another partner. Double your earning potential. Advance toward an agency model." },
];

const platforms = [
  { name: "Outlier ", desc: "The go-to platform for AI training and data annotation work. We show you how to qualify for high-paying tasks and consistently hit the top earner tiers.", level: "Recommended for beginners", badge: "◆ Primary" },
  { name: "Remotasks", desc: "Low barrier, fast onboarding. Perfect for building early income while you sharpen your skills — we show you which task categories pay best and how to level up fast.", badge: "◆ Advanced" },
  { name: "Direct Clients", desc: "The highest-margin freelancing model. We teach LinkedIn outreach, cold email, and referral systems to build a direct client base that pays on your terms.", level: "All levels", badge: "◆ Highest Earning" },
  { name: "Handshake", desc: "Where top companies recruit emerging tech talent. We help you build a profile that stands out and positions you for internships, contracts, and full-time remote roles.", level: "Beginners", badge: "◆ Quick Start" },
];

const testimonials = [
  { name: "Adaeze O.", role: "Frontend Developer", earned: "$3,200/mo", quote: "I was applying for jobs and getting ignored. BLUNT's freelancing track taught me to stop waiting for permission and just go get clients. Landed my first Upwork contract 3 weeks after graduating." },
  { name: "Emmanuel I.", role: "UI/UX Designer", earned: "$2,800/mo", quote: "The portfolio strategy alone was worth 10x the course fee. I stopped showing what I could do and started showing what clients actually needed to see. Completely different results." },
  { name: "Chiamaka D.", role: "Data Analyst", earned: "$2,100/mo", quote: "BLUNT connected me with a direct client through their alumni network. I didn't even have to go through Upwork. That network is invaluable — nobody tells you about this stuff." },
];

export default function Freelancing() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="label"><span className="label-dot" />Freelancing Hub</div>
          <h1>Go from skilled<br />to <span className="accent">self-employed.</span></h1>
          <p>40+ BLUNT graduates now freelancing full-time. Earning in dollars. Working with clients across the world. We'll show you the exact path they took.</p>
        </div>
      </div>

      {/* STATS */}
      <div style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px var(--px)", display: "flex", gap: 48, flexWrap: "wrap" }}>
          {[["40+", "Full-Time Freelancers"], [" $5,500 ", "Avg Monthly Earnings"], ["3 Weeks", "Avg Time to First Client"], ["85%", "Success Rate"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "var(--accent)", letterSpacing: "-0.03em" }}>{n}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 STEPS */}
      <div className="section-border-bot">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />The Path</div>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Six steps to<br /><span className="accent">freelance freedom.</span></h2>
            <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.8, marginBottom: 56, maxWidth: 480 }}>This isn't a generic guide. This is the exact framework BLUNT has used to launch 40+ successful freelancers.</p>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }} className="steps-grid">
            {steps.map((s, i) => (
              <RevealWrapper key={s.n} delay={String(i % 3 + 1)} style={{ background: "var(--card)", padding: "32px 28px", borderLeft: "2px solid var(--border)" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--accent)", marginBottom: 20 }}>{s.n}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "var(--dim)", fontSize: 14, lineHeight: 1.8 }}>{s.desc}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* PLATFORMS */}
      <div className="bg-card section-border-bot">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />Platforms We Train On</div>
            <h2 className="section-heading" style={{ marginBottom: 56 }}>Where our<br /><span className="accent">graduates earn.</span></h2>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--border)" }} className="platforms-grid">
            {platforms.map((p, i) => (
              <RevealWrapper key={p.name} delay={String(i % 2 + 1)} style={{ background: "var(--card)", padding: "36px 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 26, color: "var(--text)", letterSpacing: "-0.025em" }}>{p.name}</h3>
                </div>
                <p style={{ color: "var(--dim)", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{p.desc}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT'S INCLUDED */}
      <div className="section-border-bot">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 100px", alignItems: "start" }} className="two-col">
            <RevealWrapper>
              <div className="label"><span className="label-dot" />What's Included</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.035em", lineHeight: 1.0, color: "var(--text)", marginBottom: 32 }}>Everything you need.<br /><span style={{ color: "var(--accent)" }}>Nothing you don't.</span></h2>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 32 }}>The Tech Freelancing Masterclass is a 4-week intensive that covers every dimension of building a sustainable solo tech practice. No fluff, no theory — just the systems and strategies that actually work.</p>
              <Link href="/programs" className="btn btn-primary">Enroll in the Masterclass →</Link>
            </RevealWrapper>
            <RevealWrapper delay="2">
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  "Pre recorded, downloadable telegram sessions",
                  "Partnership templates that give results",
                  "LinkedIn and CV review",
                  "Bypassing localization barrier",
                  "Project onboarding practice and templates",
                  "Opportunity alerts",
                  "Access to foreign clients /jobs",
                  "1 -on- 1 feedback sessions",
                  "BLUNT alumni network lifetime access",
                  "Certificate of completion",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 16px", borderLeft: "2px solid var(--border)" }}>
                    <span style={{ color: "var(--accent)", fontSize: 10, flexShrink: 0 }}>◆</span>
                    <span style={{ fontSize: 14, color: "var(--dim)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS *
      <div className="bg-card section-border-top">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />Graduate Stories</div>
            <h2 className="section-heading" style={{ marginBottom: 48 }}>Real people.<br /><span className="accent">Real income.</span></h2>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }} className="t-grid">
            {testimonials.map((t, i) => (
              <RevealWrapper key={t.name} delay={String(i + 1)} style={{ background: "var(--card)", padding: "32px 26px" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: "var(--accent)", lineHeight: 1, marginBottom: 8 }}>{t.earned}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>monthly avg</div>
                <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>"{t.quote}"</p>
                <div style={{ paddingTop: 18, borderTop: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--text)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{t.role}</div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>*/}

      <div style={{ background: "var(--accent)", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 68px)", letterSpacing: "-0.04em", lineHeight: 0.92, color: "#070707", marginBottom: 16 }}>Start your<br />freelance journey.</h2>
            <p style={{ color: "rgba(7,7,7,0.55)", fontSize: 16, lineHeight: 1.7 }}>4 weeks. Proven system. Your first client waiting.</p>
          </div>
          <Link href="/programs" style={{ background: "#070707", color: "var(--accent)", padding: "16px 32px", borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, display: "inline-block" }}>Enroll in Masterclass →</Link>
        </div>
      </div>

      <style>{`
        .steps-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .steps-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .steps-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        .platforms-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .platforms-grid { grid-template-columns: 1fr 1fr !important; } }
        .two-col { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) { .two-col { grid-template-columns: 1fr 1fr !important; } }
        .t-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .t-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .t-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </>
  );
}
