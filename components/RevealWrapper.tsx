"use client";
import { useEffect, useRef } from "react";

export default function RevealWrapper({ children, delay, className, style }: {
  children: React.ReactNode;
  delay?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add("visible"); io.unobserve(el); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className || ""}`} data-delay={delay} style={style}>
      {children}
    </div>
  );
}
