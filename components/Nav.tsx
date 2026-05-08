"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
    padding: "0 var(--px)",
    borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
    background: scrolled || menuOpen ? "rgba(7,7,7,0.96)" : "transparent",
    backdropFilter: scrolled || menuOpen ? "blur(24px)" : "none",
    transition: "background 0.35s ease, border-color 0.35s ease",
  };

  const links = [
    { href: "/programs", label: "Programs" },
    { href: "/freelancing", label: "Freelancing" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav style={navStyle}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 11, background: "var(--accent)", color: "var(--bg)", padding: "3px 8px", borderRadius: 3 }}>BT</span>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 19, color: "var(--text)", letterSpacing: "-0.025em" }}>BLUNT<span style={{ color: "var(--accent)" }}>.</span></span>
          </Link>

          <div style={{ display: "flex", gap: 34, alignItems: "center" }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{ color: pathname === l.href ? "var(--accent)" : "var(--dim)", fontSize: 14, transition: "color 0.2s" }}>{l.label}</Link>
            ))}
          </div>

          <Link href="/programs" className="btn btn-primary" style={{ display: "none", padding: "10px 20px", fontSize: 13 }} id="nav-cta">Get Started →</Link>

          <button onClick={toggleMenu} style={{ display: "flex", flexDirection: "column", gap: 5, padding: 8, background: "none", border: "none" }} aria-label="Toggle menu" className="hamburger-btn">
            <span style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", borderRadius: 2, transition: "transform 0.25s ease, opacity 0.25s ease", transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }}></span>
            <span style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", borderRadius: 2, transition: "transform 0.25s ease, opacity 0.25s ease", opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", borderRadius: 2, transition: "transform 0.25s ease, opacity 0.25s ease", transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }}></span>
          </button>
        </div>
      </nav>

      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 199,
        background: "rgba(7,7,7,0.98)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--border)",
        padding: "24px var(--px) 32px",
        transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ color: "var(--dim)", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", padding: "14px 0", borderBottom: "1px solid var(--border)", display: "block" }}>{l.label}</Link>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <Link href="/programs" className="btn btn-primary btn-block">Get Started →</Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          #nav-cta { display: inline-flex !important; }
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
