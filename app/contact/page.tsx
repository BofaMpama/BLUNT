"use client";
import RevealWrapper from "@/components/RevealWrapper";

export default function Contact() {
  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    background: "var(--card)", border: "1px solid var(--border)",
    borderRadius: 3, color: "var(--text)",
    fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: "none",
    boxSizing: "border-box" as const,
  };

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="label"><span className="label-dot" />Get In Touch</div>
          <h1>Let's talk<br /><span className="accent">tech.</span></h1>
          <p>Enrollment questions, partnership inquiries, or just want to know more about what we're building — we reply fast. Usually within a few hours.</p>
        </div>
      </div>

      {/* CONTACT GRID */}
      <div>
        <div className="container">
          <div style={{ display: "grid", gap: "0 80px", alignItems: "flex-start" }} className="contact-grid">

            {/* INFO */}
            <RevealWrapper>
              <div className="label"><span className="label-dot" />Contact Details</div>
              {[
                ["Email", "bluntechnologies@gmail.com"],
                ["WhatsApp", "+234 913 792 2436"],
                ["Facebook", "BLUNT Technology"],
                ["Location", "Calabar, Cross River State, Nigeria"],
              ].map(([key, val]) => (
                <div key={key} style={{ padding: "20px 0", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>{key}</div>
                  <div style={{ fontSize: 14, color: "var(--dim)" }}>{val}</div>
                </div>
              ))}

              <div style={{ marginTop: 36, padding: "20px 20px", background: "var(--accent-fade)", border: "1px solid var(--accent-glow)", borderRadius: 3 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: "var(--accent)", fontSize: 18 }}>◆</span>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, color: "var(--accent)", marginBottom: 4 }}>Quick Response Guarantee</div>
                    <div style={{ fontSize: 12, color: "var(--dim)" }}>We respond to all messages within 24 hours. WhatsApp is fastest for urgent enquiries.</div>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* EMAIL CTA */}
            <RevealWrapper delay="2">
              <div className="label"><span className="label-dot" />Send a Message</div>
              <div style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}>
                {/* Icon */}
                <div style={{
                  width: 56, height: 56,
                  background: "var(--accent-fade)",
                  border: "1px solid var(--accent-glow)",
                  borderRadius: 3,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, color: "var(--accent)",
                }}>✉</div>

                {/* Heading */}
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 26, color: "var(--text)", lineHeight: 1.25, marginBottom: 12 }}>
                    Drop us an email.<br />
                    <span style={{ color: "var(--accent)" }}>Be blunt.</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--dim)", lineHeight: 1.85, margin: 0 }}>
                    Tell us what you need — training, partnerships, products, or anything else. Write directly to our inbox and we'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Address display */}
                <div style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 3,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>Our Email</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "var(--text)" }}>bluntechnologies@gmail.com</div>
                  </div>
                  <span style={{ color: "var(--accent)", fontSize: 20, lineHeight: 1 }}>◆</span>
                </div>

                {/* CTA button */}
                <a
                  href="mailto:bluntechnologies@gmail.com?subject=Inquiry from BLUNT Website"
                  style={{
                    background: "var(--accent)",
                    color: "var(--bg)",
                    border: "none",
                    padding: "16px 24px",
                    borderRadius: 3,
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 15,
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "block",
                    boxSizing: "border-box",
                    transition: "opacity 0.15s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Open Email App →
                </a>

                {/* Subtext */}
                <p style={{ fontSize: 12, color: "var(--muted)", margin: 0, textAlign: "center", lineHeight: 1.7 }}>
                  Prefer WhatsApp?{" "}
                  <a href="https://wa.me/2349137922436" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>
                    Chat with us directly →
                  </a>
                </p>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </div>

      {/* ENQUIRY TYPES */}
      <div className="bg-card section-border-top section-border-bot">
        <div className="container">
          <RevealWrapper>
            <div className="label"><span className="label-dot" />How We Can Help</div>
            <h2 className="section-heading" style={{ marginBottom: 48 }}>What are you<br /><span className="accent">looking for?</span></h2>
          </RevealWrapper>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }} className="help-grid">
            {[
              { icon: "◈", title: "Training Enrollment", desc: "Looking to enroll in one of our training programs? Our team will help you choose the right track and get you set up for your cohort.", cta: "Explore Programs →", href: "/programs" },
              { icon: "◎", title: "Freelancing Support", desc: "Want to start freelancing but don't know where to begin? We'll walk you through the exact steps our 40+ graduates took.", cta: "Visit Freelancing Hub →", href: "/freelancing" },
              { icon: "⬡", title: "Business Solutions", desc: "Need tech strategy, digital transformation advice, or a custom solution for your business? Let's have a discovery call.", cta: "Get in Touch →", href: "#" },
              { icon: "◇", title: "Partnership & Media", desc: "Looking to partner with BLUNT or feature us in your publication? Reach out to our partnerships team.", cta: "Contact Us →", href: "#" },
              { icon: "▲", title: "Product Inquiries", desc: "Questions about BLUNT LMS, CareerMap AI, or upcoming products? We'd love to give you a walkthrough.", cta: "View Products →", href: "/products" },
              { icon: "◉", title: "Careers at BLUNT", desc: "Want to join the team? We're always looking for great instructors, engineers, and community builders.", cta: "See Open Roles →", href: "#" },
            ].map((item, i) => (
              <RevealWrapper key={item.title} delay={String(i % 3 + 1)} style={{ background: "var(--card)", padding: "32px 28px" }}>
                <div style={{ fontSize: 22, color: "var(--muted)", marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text)", marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: "var(--dim)", fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>{item.desc}</p>
                <a href={item.href} style={{ fontSize: 13, color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>{item.cta}</a>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) { .contact-grid { grid-template-columns: 1fr 1.4fr !important; } }
        .help-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .help-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .help-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </>
  );
}