import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "68px var(--px) 28px" }}>
        <div style={{ marginBottom: 44 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 11, background: "var(--accent)", color: "var(--bg)", padding: "3px 8px", borderRadius: 3 }}>BT</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: "var(--text)", letterSpacing: "-0.025em" }}>BLUNT<span style={{ color: "var(--accent)" }}>.</span></span>
          </div>
          <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: 13, maxWidth: 240, marginBottom: 16 }}>No Fluff. Just Tech. Training Africa's next generation of builders, one cohort at a time.</p>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--muted)" }}>A product of BLUNT Network LTD.</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, marginBottom: 44 }}>
          {[
            { title: "Programs", links: [["Frontend Bootcamp", "/programs"], ["Data Analytics", "/programs"], ["UI/UX Design", "/programs"], ["Cloud & DevOps", "/programs"], ["Freelance Masterclass", "/programs"]] },
            { title: "Company", links: [["About", "/about"], ["Blog", "#"], ["Careers", "#"], ["Partners", "/products"], ["Contact", "/contact"]] },
            { title: "Products", links: [["BLUNT LMS", "/products"], ["CareerMap AI", "/products"], ["BLUNT Network", "/products"]] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} style={{ color: "var(--muted)", fontSize: 13, transition: "color 0.2s" }}>{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>© 2025 BLUNT Technology · All rights reserved.</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--accent)", letterSpacing: "0.1em" }}>BUILT BLUNT. SHIPPED SHARP.</div>
        </div>
      </div>
    </footer>
  );
}
