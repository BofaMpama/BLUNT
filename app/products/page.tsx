import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const products = [
  {
    tag: "SaaS Platform",
    status: "live",
    statusLabel: "● Live",
    title: "BLUNT LMS",
    tagline: "The learning platform built for African cohorts.",
    desc: "Our proprietary learning management system — built from scratch because existing tools weren't designed for the way we teach. Cohort management, live session integration, progress tracking, assignment submission, and instructor analytics. All in one place.",
    features: ["Live cohort management", "Video lesson hosting", "Assignment & quiz engine", "Student progress dashboard", "Instructor analytics", "Certificate generation"],
    cta: "Launch App →",
    href: "#",
  },
  {
    tag: "AI Tool",
    status: "beta",
    statusLabel: "● Beta",
    title: "CareerMap AI",
    tagline: "Your personalized tech career roadmap — in minutes.",
    desc: "Tell CareerMap AI where you are (skills, experience, time available, goals) and it generates a customized, step-by-step tech career roadmap. Built specifically for the African market with local job market data, salary benchmarks, and freelancing opportunities built in.",
    features: ["Personalized skill gap analysis", "Role-specific learning paths", "African market salary benchmarks", "Freelancing vs job market guidance", "Weekly milestone planning", "Progress tracking"],
    cta: "Join Waitlist →",
    href: "/contact",
  },
  {
    tag: "Community Platform",
    status: "coming",
    statusLabel: "● Coming Soon",
    title: "BLUNT Network",
    tagline: "The professional network for African tech talent.",
    desc: "LinkedIn isn't built for us. BLUNT Network will be the go-to professional community for African tech professionals — jobs, collaboration, mentorship, and investment opportunities. Connecting thousands of builders, companies, and investors in one place.",
    features: ["African tech job board", "Mentorship matching", "Project collaboration", "Company & startup profiles", "Tech events & meetups", "Funding & investor connections"],
    cta: "Coming Soon",
    href: "#",
  },
];

const partners = [
  { name: "Andela", type: "Talent Partner", desc: "BLUNT graduates receive preferential consideration in Andela's tech talent placement program." },
  { name: "AWS Activate", type: "Cloud Partner", desc: "Enrolled students receive AWS Activate credits and access to cloud resources for their projects." },
  { name: "Figma Education", type: "Design Partner", desc: "All design students get Figma Professional access at no cost through our education partnership." },
  { name: "Paystack", type: "Payments Partner", desc: "Integration partner for our LMS billing infrastructure. Also a frequent recruiter of BLUNT graduates." },
  { name: "TechCabal", type: "Media Partner", desc: "BLUNT graduates and products are featured across TechCabal's platforms reaching 200K+ African tech readers." },
  { name: "She Code Africa", type: "Community Partner", desc: "Co-creating scholarship slots for women in tech through SCA's network and BLUNT's training programs." },
];

export default function Products() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="label"><span className="label-dot" />Products & Partners</div>
          <h1>We don't just<br />teach. We <span className="accent">build.</span></h1>
          <p>Three digital products in production. Partnerships with Africa's leading tech companies. This is what happens when a training company also thinks like a product studio.</p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />Our Products</div>
            <div className="section-header">
              <h2 className="section-heading">Built in-house.<br /><span className="accent">Shipped for Africa.</span></h2>
              <p>Every product we build solves a real problem for African tech professionals — informed by our own experience as educators and builders.</p>
            </div>
          </RevealWrapper>

          <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--border)" }}>
            {products.map((p, i) => (
              <RevealWrapper key={p.title} delay={String(i + 1)}>
                <div style={{ background: "var(--card)", padding: "44px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 80px", alignItems: "start" }} className="product-row">
                  <div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>{p.tag}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: p.status === "live" ? "var(--accent)" : p.status === "beta" ? "#FF8C42" : "var(--dim)" }}>{p.statusLabel}</span>
                    </div>
                    <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 10, lineHeight: 0.95 }}>{p.title}</h2>
                    <p style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, marginBottom: 20 }}>{p.tagline}</p>
                    <p style={{ color: "var(--dim)", fontSize: 14, lineHeight: 1.85 }}>{p.desc}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--muted)", marginBottom: 16 }}>Key Features</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 36 }}>
                      {p.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--bg)", borderLeft: "2px solid var(--accent-glow)" }}>
                          <span style={{ color: "var(--accent)", fontSize: 10 }}>◆</span>
                          <span style={{ fontSize: 13, color: "var(--dim)" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    {p.status !== "coming" ? (
                      <Link href={p.href} style={{ display: "inline-block", background: "var(--accent)", color: "var(--bg)", padding: "14px 28px", borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14 }}>{p.cta}</Link>
                    ) : (
                      <div style={{ display: "inline-block", background: "var(--border)", color: "var(--muted)", padding: "14px 28px", borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14 }}>{p.cta}</div>
                    )}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* PARTNERS */}
      <div className="bg-card section-border-top">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />Partnering Brands</div>
            <div className="section-header">
              <h2 className="section-heading">Companies that<br /><span className="accent">back us.</span></h2>
              <p>Strategic partnerships with Africa's leading tech platforms — giving our students and products real advantages in the market.</p>
            </div>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }} className="partners-grid">
            {partners.map((p, i) => (
              <RevealWrapper key={p.name} delay={String(i % 3 + 1)} style={{ background: "var(--card)", padding: "32px 28px" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: 12 }}>{p.type}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "var(--text)", letterSpacing: "-0.025em", marginBottom: 14 }}>{p.name}</h3>
                <p style={{ color: "var(--dim)", fontSize: 13, lineHeight: 1.8 }}>{p.desc}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* INNOVATION LAB */}
      <div className="section-border-top section-border-bot">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 100px", alignItems: "center" }} className="two-col">
            <RevealWrapper>
              <div className="label"><span className="label-dot" />Innovation Lab</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.035em", lineHeight: 1.0, color: "var(--text)", marginBottom: 24 }}>
                We're always<br /><span style={{ color: "var(--accent)" }}>building next.</span>
              </h2>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 24 }}>Our product studio doesn't sleep. We have a pipeline of AI-powered tools, community features, and SaaS products in various stages of development — all designed to serve the African tech ecosystem.</p>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 32 }}>If you're a developer, designer, or investor who wants to build alongside us — we'd love to talk.</p>
              <Link href="/contact" className="btn btn-primary">Work With Us →</Link>
            </RevealWrapper>
            <RevealWrapper delay="2">
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  ["AI-Powered Job Matching", "Matching African tech talent with global remote opportunities using AI", "2025 Q3"],
                  ["BLUNT Pay", "Integrated payment rails for freelancers — invoice, collect, convert FX", "2025 Q4"],
                  ["Mentor Marketplace", "Book 1:1 sessions with senior African tech professionals", "2026"],
                  ["Business Tech Audit Tool", "AI-driven audit platform for businesses evaluating their digital readiness", "2026"],
                ].map(([name, desc, eta]) => (
                  <div key={name as string} style={{ padding: "20px 20px", borderLeft: "2px solid var(--border)", background: "var(--card)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                      <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: "var(--text)" }}>{name}</h4>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "var(--dim)", flexShrink: 0, marginLeft: 12 }}>{eta}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "var(--dim)", lineHeight: 1.7 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div style={{ background: "var(--accent)", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 68px)", letterSpacing: "-0.04em", lineHeight: 0.92, color: "#070707", marginBottom: 16 }}>Want to partner<br />with BLUNT?</h2>
            <p style={{ color: "rgba(7,7,7,0.55)", fontSize: 16, lineHeight: 1.7 }}>We're open to partnerships that benefit African tech professionals.</p>
          </div>
          <Link href="/contact" style={{ background: "#070707", color: "var(--accent)", padding: "16px 32px", borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, display: "inline-block" }}>Get in Touch →</Link>
        </div>
      </div>

      <style>{`
        .product-row { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) { .product-row { grid-template-columns: 1fr 1fr !important; } }
        .partners-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .partners-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .partners-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        .two-col { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) { .two-col { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </>
  );
}
