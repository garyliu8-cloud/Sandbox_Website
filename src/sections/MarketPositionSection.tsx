const bars = [
  { label: "Sandbox VR", val: "$44/session", pct: 100, highlight: true },
  { label: "Zero Latency", val: "$42/session", pct: 95 },
  { label: "Escapology", val: "$40/session", pct: 91 },
  { label: "Color Me Mine", val: "$39/session", pct: 89 },
  { label: "Sky Zone", val: "$32/session", pct: 73 },
];

const highlights = [
  "Market share rising from 20% to 25% in the LBVR category between 2023 and 2024",
  "162.8% jump in system-wide sales from 2022 to 2024",
  "Proprietary full-body haptic hardware unavailable anywhere else",
  "65 open locations with 150+ total units in active development as of early 2025",
  "Average of 5 staff per location, lean and technology-mediated",
  "Corporate and group sessions book well in advance, providing consistent and predictable recurring revenue",
];

export default function MarketPositionSection() {
  return (
    <section
      id="market"
      data-section="market"
      style={{
        background: "#12151c",
        color: "#ffffff",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div
            className="tag fade-in"
            style={{ marginBottom: 16 }}
          >
            Market Position
          </div>
          <h2
            className="fade-in fade-in-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 3.5vw, 50px)",
              fontWeight: 700,
              lineHeight: 1.12,
              marginBottom: 20,
              color: "#ffffff",
            }}
          >
            Category leader in a rapidly expanding market
          </h2>
          <p
            className="fade-in fade-in-delay-2"
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 36,
            }}
          >
            Sandbox VR commands a premium price point averaging $44 per session — the highest in its Tech-Mediated peer group — growing at 2x the LBVR market CAGR. With 65 locations and 150+ in development, the brand is scaling from a proven and strong operational foundation.
          </p>
          <ul style={{ listStyle: "none" }}>
            {highlights.map((item, i) => (
              <li
                key={i}
                className={`fade-in fade-in-delay-${Math.min(i + 2, 6)}`}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "var(--blue)",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right bar chart */}
        <div className="fade-in fade-in-delay-2">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
              marginBottom: 28,
            }}
          >
            Average Session Pricing · LBE Landscape
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {bars.map((bar, i) => (
              <div key={bar.label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                    fontSize: 13,
                    color: bar.highlight ? "#ffffff" : "rgba(255,255,255,0.6)",
                    fontWeight: bar.highlight ? 700 : 400,
                  }}
                >
                  <span>{bar.label}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: bar.highlight ? "var(--blue-light)" : "rgba(255,255,255,0.68)",
                      fontWeight: 500,
                    }}
                  >
                    {bar.val}
                  </span>
                </div>
                <div
                  style={{
                    height: bar.highlight ? 10 : 6,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="bar-animate"
                    style={{
                      height: "100%",
                      width: `${bar.pct}%`,
                      background: bar.highlight
                        ? "var(--blue)"
                        : "rgba(255,255,255,0.22)",
                      borderRadius: 2,
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stat callout */}
          <div
            className="fade-in fade-in-delay-4"
            style={{
              marginTop: 36,
              padding: "20px 24px",
              background: "rgba(59,130,246,0.08)",
              borderLeft: "3px solid var(--blue)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 40,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              162.8%
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 6, lineHeight: 1.5 }}>
              System-wide sales growth from 2022 to 2024, the fastest trajectory in the LBE sector
            </div>
          </div>
        </div>
      </div>

      {/* Pricing tier note */}
      <div
        style={{
          maxWidth: 1280,
          margin: "48px auto 0",
          padding: "0 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            padding: "18px 28px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "3px solid rgba(255,255,255,0.25)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              whiteSpace: "nowrap",
            }}
          >
            Sandbox Pricing Tiers
          </div>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Weekday", val: "$39/session" },
              { label: "Weekend", val: "$49/session" },
              { label: "Blended Average", val: "$44/session" },
            ].map((tier) => (
              <div key={tier.label} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {tier.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tier.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
