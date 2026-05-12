import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const team = [
  { name: "Emmanuel Ikpeme", role: "Founder & CEO", bio: "The vision behind BLUNT — from a room with one table and ten chairs to a growing tech ecosystem. Emmanuel leads with a conviction that Africa's talent just needs the right structure to thrive.", initials: "EI" },
  { name: "Grace Ikpeme", role: "Member Board of Directors, Business Developer", bio: "Shapes BLUNT's strategic direction and drives business growth across sectors. MGrace ensures that every partnership and opportunity aligns with BLUNT's long-term mission.", initials: "GI" },
  { name: "Miracle Olaedo", role: "Head of Partnerships", bio: "The bridge between BLUNT and the organizations, brands, and institutions that amplify its impact. Miracle builds relationships that create real opportunities for BLUNT graduates.", initials: "MO" },
  { name: "Chinecherem Williams", role: "Head of Freelancing Hub", bio: "Guides BLUNT graduates from skilled to self-employed. Chinecherem leads the systems, coaching, and support that have helped 40+ students land their first paying clients.", initials: "CW" },
];

const values = [
  { icon: "◈", title: "Radical Clarity", desc: "We eliminate confusion. Every lesson, tool, and system is built for immediate, real-world application — no theory for theory's sake." },
  { icon: "◎", title: "Outcome Obsession", desc: "We measure success by results: income earned, problems solved, and products shipped. Enrollment numbers mean nothing without outcomes." },
  { icon: "⬡", title: "African by Design", desc: "Our approach is grounded in the African context, yet built to meet global standards — not adapted from Silicon Valley playbooks." },
  { icon: "◇", title: "Community First", desc: "Growth is faster together. We build a network that supports, challenges, and elevates every member — because no one builds alone." },
];

const milestones = [
  { year: "2021", event: "BLUNT Technology founded as the first operational subsidiary of BLUNT Network — beginning in a small room with one large table and ten chairs." },
  { year: "Early 2022", event: "First cohorts trained, websites and mobile applications delivered, a ticketing platform launched for three events, and over NGN 700,000 generated. Team scaled from 3 to 11 members." },
  { year: "2022", event: "BLUNT Network officially registered as parent company. Key partnerships formed with Weebo, Trend X, Kwubu Digimarketing, and others. Revenue crossed NGN 1.5 million." },
  { year: "2023", event: "After dissolved partnerships and team attrition, BLUNT relocated, rebuilt, and delivered platforms for Theodore Effiong Ministries and Kings Bride — reintegrating former students into the workforce." },
  { year: "2024–2025", event: "Trained multiple cohorts, secured government-related contracts, delivered for AFRO Conference Lagos, Precious Esse Foundation, and Teenagers' Outreach Ministries. Revenue exceeded NGN 2 million. BLUNT supported 30+ businesses and developed CTTWTP's full digital presence." },
  { year: "2026", event: "International expansion begins — particularly into the United Kingdom. Close to NGN 4 million generated in Q1 alone, with high-end branding projects and active strategic partnerships." },
];

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="label"><span className="label-dot" />About Us</div>
          <h1>We saw the gaps.<br /><span className="accent">We built the bridge.</span></h1>
          <p>BLUNT Technology exists to redefine how Africans learn, build, and win in tech — with real skills, real products, and real opportunities. This is not theory. This is execution.</p>
        </div>
      </div>

      {/* STORY */}
      <div className="section-border-bot">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 100px", alignItems: "start" }} className="two-col">
            <RevealWrapper>
              <div className="label"><span className="label-dot" />Our Story</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.035em", lineHeight: 1.0, color: "var(--text)", marginBottom: 32 }}>
                From one room<br />to a growing <span className="accent">ecosystem.</span>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, paddingTop: 28, borderTop: "1px solid var(--border)" }}>
                {[["Mission", "To empower Africans with tech skills, tools, and opportunities to thrive globally."], ["Vision", "To become Africa's leading hub for tech education, innovation, and digital product development."]].map(([label, text]) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>{label}</div>
                    <p style={{ color: "var(--dim)", fontSize: 13, lineHeight: 1.75 }}>{text}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
            <RevealWrapper delay="2">
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 22 }}>BLUNT Technology was founded as a response to a critical gap in accessible, relevant, and career-focused technology education in Nigeria. The vision originated from BLUNT Network — Becoming Leaders United, Nourished, and Transformed — a long-standing initiative focused on leadership development and transformation across multiple sectors.</p>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 22 }}>The company began in a modest setting — a single large table, ten chairs, and a clearly defined mission: to restructure how technology skills are taught and applied in emerging markets.</p>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 22 }}>BLUNT introduced a more efficient model for career-focused tech education: in-demand stacks, shortened learning cycles, affordable pricing, and practical, job-ready skill acquisition — built for the African context, designed to meet global standards.</p>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300 }}>Today, BLUNT operates at the intersection of tech education, product development, and business transformation — a training institution, freelancing launchpad, and product studio in one ecosystem.</p>
            </RevealWrapper>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="bg-card section-border-bot">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />Our Values</div>
            <h2 className="section-heading" style={{ marginBottom: 56 }}>What we<br /><span className="accent">stand for.</span></h2>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--border)" }} className="two-by-two">
            {values.map((v, i) => (
              <RevealWrapper key={v.title} delay={String(i % 2 + 1)} style={{ background: "var(--card)", padding: "36px 32px" }}>
                <div style={{ fontSize: 24, color: "var(--accent)", marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: "var(--dim)", fontSize: 14, lineHeight: 1.8 }}>{v.desc}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* MILESTONES */}
      <div className="section-border-bot">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />Our Journey</div>
            <h2 className="section-heading" style={{ marginBottom: 56 }}>Execution<br /><span className="accent">through every season.</span></h2>
          </RevealWrapper>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {milestones.map((m, i) => (
              <RevealWrapper key={i} delay={String(i % 3 + 1)}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 32, padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--accent)", minWidth: 80, flexShrink: 0, marginTop: 2 }}>{m.year}</div>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, marginTop: 6 }} />
                  <p style={{ color: "var(--dim)", fontSize: 15, lineHeight: 1.7 }}>{m.event}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div>
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />The Team</div>
            <h2 className="section-heading" style={{ marginBottom: 56 }}>Leadership<br />and <span className="accent">execution.</span></h2>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border)" }} className="team-grid">
            {team.map((member, i) => (
              <RevealWrapper key={member.name} delay={String(i % 2 + 1)} style={{ background: "var(--card)", padding: "32px 26px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--accent-fade)", border: "1px solid var(--accent-glow)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: "var(--accent)", marginBottom: 20 }}>{member.initials}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 6 }}>{member.name}</h3>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>{member.role}</div>
                <p style={{ color: "var(--dim)", fontSize: 13, lineHeight: 1.75 }}>{member.bio}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "var(--accent)", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 68px)", letterSpacing: "-0.04em", lineHeight: 0.92, color: "#070707" }}>Join the<br />movement.</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/programs" style={{ background: "#070707", color: "var(--accent)", padding: "16px 28px", borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, display: "inline-block" }}>Explore Programs →</Link>
            <Link href="/contact" style={{ background: "transparent", color: "#070707", border: "2px solid rgba(7,7,7,0.25)", padding: "14px 28px", borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontSize: 14, display: "inline-block" }}>Get in touch</Link>
          </div>
        </div>
      </div>

      <style>{`
        .two-col { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) { .two-col { grid-template-columns: 1fr 1fr !important; } }
        .two-by-two { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .two-by-two { grid-template-columns: 1fr 1fr !important; } }
        .team-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .team-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .team-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      `}</style>
    </>
  );
}