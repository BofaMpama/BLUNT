import RevealWrapper from "@/components/RevealWrapper";
import Link from "next/link";

const programs = [
  { tag: "Data & AI", title: "Data Analytics & Python", duration: "8 Weeks", price: "₦200,000", open: false, desc: "Go from zero to data analyst. Learn Python, Pandas, SQL, and data visualization tools used by companies across Africa and globally. Land roles or freelance gigs in data.", curriculum: ["Python Fundamentals", "Pandas & NumPy for Data", "SQL & Database Querying", "Data Visualization with Matplotlib/Seaborn", "Excel + Google Sheets Advanced", "Capstone Data Project"] },
  { tag: "Design", title: "UI/UX Product Design", duration: "10 Weeks", price: "₦170,000", open: true, desc: "Learn to design products people actually love using. Master Figma, user research, wireframing, prototyping, and design systems. Build a world-class portfolio.", curriculum: ["Design Thinking & UX Research", "Wireframing & Information Architecture", "Figma Mastery", "Prototyping & User Testing", "Design Systems & Component Libraries", "Portfolio Case Study Build"] },
  { tag: "Freelance", title: "Tech Freelancing Masterclass", duration: "4 Weeks", price: "₦50,000", open: true, desc: "The complete business toolkit for turning your tech skills into income. Learn platforms, proposals, pricing, client management, and how to build a sustainable solo practice.", curriculum: ["Upwork & Direct Client Strategy", "Writing Proposals That Win", "Pricing Your Services Right", "Client Communication & Contracts", "Portfolio & Personal Branding", "Scaling to Agency or Retainers"] },
  { tag: "Backend", title: "Backend Engineering with Node.js", duration: "10 Weeks", price: "₦150,000", open: false, desc: "Build the server-side of the internet. Master Node.js, Express, databases, REST APIs, authentication, and cloud deployment. The skills every serious dev team needs.", curriculum: ["Node.js & Async JavaScript", "Express.js REST API Design", "MongoDB & PostgreSQL", "Authentication & Authorization", "API Security & Best Practices", "Deployment to AWS/Render"] },
  { tag: "Mobile", title: "React Native Mobile Development", duration: "10 Weeks", price: "₦250,000", open: false, desc: "Build iOS and Android apps with one codebase. Learn React Native, Expo, navigation, state management, and publish your first app to the App Store and Google Play.", curriculum: ["React Native & Expo Setup", "Navigation & Routing", "State Management with Redux/Zustand", "Native APIs & Device Features", "App Store Deployment", "Final App Project"] },
  { tag: "Cybersecurity", title: "Cyber Security", duration: "8 Weeks", price: "₦600,000", open: false, desc: "Break into the high-paying world of cloud and infrastructure. Learn AWS, Linux, Docker, CI/CD, and the fundamentals of DevOps — all from an African tech perspective.", curriculum: ["Linux Command Line Mastery", "AWS Core Services (EC2, S3, RDS)", "Docker & Containerization", "CI/CD with GitHub Actions", "Infrastructure as Code Basics", "Cloud Security Fundamentals"] },
  { tag: "Web Dev", title: "Frontend With ReactJS", duration: "12 Weeks", price: "₦140,000", open: false, desc: "Master the modern web stack — HTML, CSS, JavaScript, React, and Next.js. Build real projects, ship real code, and graduate with a portfolio that gets you hired or your first client.", curriculum: ["HTML5 & CSS3 Mastery", "JavaScript Fundamentals & ES6+", "React & Component Architecture", "Next.js & Full-Stack Basics", "Git, GitHub & Deployment", "Portfolio Project Build"] },
  { tag: "Backend", title: "Backend With PHP", duration: "6 Weeks", price: "₦150,000", open: false, desc: "For entrepreneurs and intrapreneurs who want to build digital products that work. Learn product discovery, roadmapping, MVPs, user research, and go-to-market strategy.", curriculum: ["Product Discovery & Problem Validation", "User Research Methods", "MVP Design & Prioritization", "Product Roadmapping", "Go-to-Market Strategy", "Metrics, Analytics & Iteration"] },
];

const faqs = [
  { q: "Do I need prior coding experience?", a: "Most programs have a beginner track. The Freelancing Masterclass and Product Strategy courses require no coding knowledge at all. Each program page lists the recommended prerequisites." },
  { q: "Are classes live or pre-recorded?", a: "All programs run as live cohorts with scheduled sessions. Recordings are available for review, but live attendance is required for full participation." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible installment plans for all programs. Speak with an advisor to find a structure that works for your budget." },
  { q: "What happens after I graduate?", a: "Graduates get lifetime access to the BLUNT alumni network, job board, and freelance opportunities. Many of our graduates land clients or roles within weeks of finishing." },
];

export default function Programs() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="label"><span className="label-dot" />Training Programs</div>
          <h1>Skills that<br /><span className="accent">ship.</span></h1>
          <p>9 programs. Every track built for the African market. From beginner to professional — we train the skills that actually get you hired or paid.</p>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px var(--px)", display: "flex", gap: 48, flexWrap: "wrap" }}>
          {[["9", "Programs"], ["500+", "Graduates"], ["₦60K–₦160K", "Program Range"], ["4–12 Weeks", "Duration Range"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "var(--accent)", letterSpacing: "-0.03em" }}>{n}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROGRAMS GRID */}
      <div>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }} className="prog-grid">
            {programs.map((c, i) => (
              <RevealWrapper key={c.title} delay={String(i % 3 + 1)} style={{ background: "var(--card)" }}>
                <div style={{ padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", background: "var(--accent-fade)", padding: "3px 9px", borderRadius: 2 }}>{c.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.3, marginBottom: 14 }}>{c.title}</h3>
                  <p style={{ color: "var(--dim)", fontSize: 13, lineHeight: 1.8, flex: 1, marginBottom: 20 }}>{c.desc}</p>

                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 10 }}>Curriculum Highlights</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {c.curriculum.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--dim)" }}>
                          <span style={{ color: "var(--accent)", fontSize: 10 }}>◆</span>{item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 20, marginBottom: 20, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                    <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 4 }}>Duration</div><div style={{ fontSize: 12, color: "var(--dim)" }}>{c.duration}</div></div>
                    <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 4 }}>Fee</div><div style={{ fontSize: 12, color: "var(--text)", fontWeight: 500 }}>{c.price}</div></div>
                  </div>

                  <Link href="/contact" style={{ display: "block", background: "var(--accent)", color: "var(--bg)", padding: "12px 20px", borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 13, textAlign: "center" }}>Enroll Now →</Link>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* FAQS */}
      <div className="bg-card section-border-top">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />FAQs</div>
            <h2 className="section-heading" style={{ marginBottom: 48 }}>Common<br /><span className="accent">questions.</span></h2>
          </RevealWrapper>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 800 }}>
            {faqs.map((faq, i) => (
              <RevealWrapper key={i} delay={String(i % 3 + 1)}>
                <div style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: "var(--text)", marginBottom: 12 }}>{faq.q}</h3>
                  <p style={{ color: "var(--dim)", fontSize: 14, lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "var(--accent)", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 68px)", letterSpacing: "-0.04em", lineHeight: 0.92, color: "#070707", marginBottom: 16 }}>Not sure which<br />track to pick?</h2>
            <p style={{ color: "rgba(7,7,7,0.55)", fontSize: 16, lineHeight: 1.7 }}>Talk to an advisor. We'll help you find the right fit based on your goals, timeline, and budget.</p>
          </div>
          <Link href="/contact" style={{ background: "#070707", color: "var(--accent)", padding: "16px 32px", borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, display: "inline-block" }}>Talk to an Advisor →</Link>
        </div>
      </div>

      <style>{`
        .prog-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .prog-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .prog-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </>
  );
}
