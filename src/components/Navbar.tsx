import { useState, useEffect } from "react";

const navLinks = [
  { id: "hero", label: "Overview" },
  { id: "market", label: "Market" },
  { id: "competitors", label: "Competitors" },
  { id: "financials", label: "Financials" },
  { id: "insights", label: "Insights" },
  { id: "thesis", label: "Thesis" },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: "64px",
        transition: "background 0.4s, border-color 0.4s",
        background: scrolled ? "rgba(13, 15, 20, 0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <button
        onClick={() => scrollTo("hero")}
        style={{ background: "none", border: "none", padding: 0, display: "flex", alignItems: "center" }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Sandbox VR
        </span>
      </button>

      <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            style={{
              background: "none",
              border: "none",
              padding: "6px 14px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color:
                activeSection === link.id
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.35)",
              transition: "color 0.2s",
              cursor: "none",
              borderBottom: activeSection === link.id
                ? "1px solid var(--blue)"
                : "1px solid transparent",
            }}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        Stanford Consulting · 2026
      </div>
    </header>
  );
}
