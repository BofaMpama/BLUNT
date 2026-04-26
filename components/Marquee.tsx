"use client";
import { useEffect, useRef } from "react";

const items = [
  "IT Training", "Freelance Launchpad", "SaaS Products", "AI Tools",
  "Tech Mentorship", "Digital Products", "Career Placement",
  "Web Development", "UI/UX Design", "Data Analytics", "Cloud & DevOps"
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const tripled = [...items, ...items, ...items];
    tripled.forEach((item, i) => {
      const span = document.createElement("span");
      span.style.cssText = `padding: 0 22px; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: ${i % 3 === 0 ? "var(--accent)" : "var(--dim)"};`;
      span.innerHTML = item + '<span style="margin-left:22px;opacity:0.2">◆</span>';
      track.appendChild(span);
    });
  }, []);

  return (
    <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "14px 0", overflow: "hidden", background: "var(--card)" }}>
      <div ref={trackRef} style={{ display: "flex", whiteSpace: "nowrap", animation: "marqueeSlide 28s linear infinite" }} />
    </div>
  );
}
