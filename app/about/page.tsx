import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const team = [
  { name: "Chukwuemeka Nwosu", role: "Founder & CEO", bio: "Software engineer turned educator. 8+ years building products across fintech and edtech. Founded BLUNT to democratize tech education in Africa.", initials: "CN" },
  { name: "Adaora Eze", role: "Head of Curriculum", bio: "Former Google engineer with a passion for pedagogy. Designed learning paths that have helped 500+ students transition into tech careers.", initials: "AE" },
  { name: "Tunde Okonkwo", role: "Head of Freelancing Hub", bio: "Top-rated Upwork freelancer and business coach. Has helped over 40 BLUNT graduates land their first paying clients.", initials: "TO" },
  { name: "Ngozi Obi", role: "Head of Products", bio: "Product designer and builder. Leads BLUNT's in-house digital product studio — from concept to shipped software.", initials: "NO" },
];

const values = [
  { icon: "◈", title: "Radical Clarity", desc: "We cut through the noise. Every lesson, every resource, every piece of advice is direct, practical, and immediately applicable." },
  { icon: "◎", title: "Outcome Obsession", desc: "We don't measure success by enrollment numbers. We measure it by how many people land jobs, clients, and build real products." },
  { icon: "⬡", title: "African by Design", desc: "Our curriculum, case studies, and community are built for the African context — not adapted from Silicon Valley playbooks." },
  { icon: "◇", title: "Community First", desc: "Learning is social. BLUNT is a network of builders who lift each other up, share opportunities, and hold each other accountable." },
];

const milestones = [
  { year: "2024", event: "BLUNT Technology founded in Calabar, Nigeria by Chukwuemeka Nwosu" },
  { year: "Q1 2024", event: "First cohort of 40 students enrolled across Frontend and Design tracks" },
  { year: "Q2 2024", event: "Launched the Freelancing Hub — first 12 graduates placed with paying clients" },
  { year: "Q3 2024", event: "Crossed 200 students trained. Expanded to Data Analytics and Cloud tracks" },
  { year: "Q4 2024", event: "Shipped BLUNT LMS v1 — our proprietary learning management system" },
  { year: "2025", event: "500+ students trained. CareerMap AI in beta. BLUNT Network in development" },
];

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="label"><span className="label-dot" />About Us</div>
          <h1>Built by<br /><span className="accent">Africans.</span></h1>
          <p>We didn't stumble into education. We built BLUNT because we lived the frustration of trying to break into tech with no clear path, no mentors, and no community that understood our context.</p>
        </div>
      </div>

      {/* STORY */}
      <div className="section-border-bot">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px 100px", alignItems: "start" }} className="two-col">
            <RevealWrapper>
              <div className="label"><span className="label-dot" />Our Story</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.035em", lineHeight: 1.0, color: "var(--text)", marginBottom: 32 }}>
                From frustration<br />to <span className="accent">movement.</span>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, paddingTop: 28, borderTop: "1px solid var(--border)" }}>
                {[["Mission", "Make world-class tech education accessible to every African who wants it."], ["Vision", "A continent where talent gaps are filled entirely from within."]].map(([label, text]) => (
                  <div key={label}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>{label}</div>
                    <p style={{ color: "var(--dim)", fontSize: 13, lineHeight: 1.75 }}>{text}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
            <RevealWrapper delay="2">
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 22 }}>BLUNT Technology was born from a simple frustration: Africa's talent is undeniable, but the pathways to tech careers are cluttered with noise, gatekeeping, and irrelevant content designed for Western markets.</p>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 22 }}>Our founder spent years navigating these broken pathways — watching brilliant people give up not because they lacked ability, but because they lacked access. Access to quality mentors, structured learning, and a community that understood their reality.</p>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300, marginBottom: 22 }}>BLUNT is our answer. A training institution, freelancing launchpad, and product studio rolled into one. We cut straight to what actually works — practical skills, real mentorship, and a network that opens doors.</p>
              <p style={{ color: "var(--dim)", lineHeight: 1.9, fontSize: 15, fontWeight: 300 }}>Today, we've trained over 500 students, placed 40+ freelancers with paying clients, and shipped 3 digital products. We're just getting started.</p>
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
            <h2 className="section-heading" style={{ marginBottom: 56 }}>From zero to<br /><span className="accent">500+ builders.</span></h2>
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
            <h2 className="section-heading" style={{ marginBottom: 56 }}>The people<br />behind <span className="accent">BLUNT.</span></h2>
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
