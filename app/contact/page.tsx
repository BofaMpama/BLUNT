"use client";
import { useState } from "react";
import RevealWrapper from "@/components/RevealWrapper";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "0 80px", alignItems: "flex-start" }} className="contact-grid">

            {/* INFO */}
            <RevealWrapper>
              <div className="label"><span className="label-dot" />Contact Details</div>
              {[
                ["Email", "hello@bluntechnology.com"],
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

            {/* FORM */}
            <RevealWrapper delay="2">
              {!submitted ? (
                <div>
                  <div className="label"><span className="label-dot" />Send a Message</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <input style={inputStyle} type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    <input style={inputStyle} type="email" placeholder="Your email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                    <select style={{ ...inputStyle, appearance: "none" as const }} value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                      <option value="">What's this about?</option>
                      <option>Program Enrollment</option>
                      <option>Freelancing Hub</option>
                      <option>Partnership Inquiry</option>
                      <option>Product / SaaS Question</option>
                      <option>Business Solutions</option>
                      <option>General Question</option>
                    </select>
                    <textarea style={{ ...inputStyle, resize: "vertical" }} rows={6} placeholder="What do you need? Be blunt." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                    <button onClick={handleSubmit} style={{ background: "var(--accent)", color: "var(--bg)", border: "none", padding: 16, borderRadius: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer", width: "100%" }}>Send Message →</button>
                  </div>
                </div>
              ) : (
                <div style={{ padding: "64px 48px", background: "var(--card)", border: "1px solid var(--accent)", borderRadius: 4, textAlign: "center" }}>
                  <div style={{ fontSize: 56, color: "var(--accent)", fontFamily: "'Syne', sans-serif", marginBottom: 20 }}>✓</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: "var(--text)", marginBottom: 12 }}>Message sent.</div>
                  <div style={{ fontSize: 14, color: "var(--dim)" }}>We'll get back to you within 24 hours.</div>
                </div>
              )}
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
        input::placeholder, textarea::placeholder { color: #3A3A3A; }
        input:focus, textarea:focus, select:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 3px rgba(187,255,0,0.07) !important; }
      `}</style>
    </>
  );
}
