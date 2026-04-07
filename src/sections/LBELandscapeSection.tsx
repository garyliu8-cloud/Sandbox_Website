const lbeCategories = [
  {
    category: "Physical Recreation",
    color: "#3b6ea0",
    footprint: "10k–50k sqft",
    desc: "Venues offering social experiences anchored in physical activity targeting families and youth.",
    capex: "$1.9M avg",
    payback: "5.3 yrs",
    auv: "$2M avg",
    examples: ["Sky Zone", "Altitude Trampoline Park"],
    finding: "The highest-AUV category requiring most capital while yielding moderate payback timelines. Larger footprints generate more revenue but proportionally more cost.",
  },
  {
    category: "Themed Entertainment",
    color: "#6b4ea0",
    footprint: "2k–15k sqft",
    desc: "Concept-driven venues where environmental design and narratives evoke strong emotional engagement.",
    capex: "$700K avg",
    payback: "2–7+ yrs",
    auv: "$1M avg",
    examples: ["Escapology", "iSmash", "Museum of Illusions"],
    finding: "Widest payback variance. High-capacity session formats generate 4× more rev/sqft/hr ($0.21/sqft/hr) than low-capacity venues ($0.055/sqft/hr).",
  },
  {
    category: "Tech-Mediated Venues",
    color: "#3b82f6",
    footprint: "1k–10k sqft",
    desc: "Technology-infused experiences for social interaction and gameplay. Premium pricing sustained by IP and hardware barriers.",
    capex: "$1M avg",
    payback: "1.4 yrs",
    auv: "$1.5M avg",
    examples: ["Sandbox VR ★", "Zero Latency", "Ctrl V", "Activate", "EVA"],
    finding: "Sandbox VR's 41% EBITDA margin is nearly double the landscape average. Proprietary tech sustains premium pricing ($44 avg, $49 peak) that no other category can replicate.",
    highlight: true,
  },
  {
    category: "Social-Based Alternatives",
    color: "#2d8a5e",
    footprint: "1k–5k sqft",
    desc: "Creative workshop franchises offering hands-on DIY art and education experiences for groups seeking screen-free social.",
    capex: "$195K avg",
    payback: "2–2.5 yrs",
    auv: "$500K avg",
    examples: ["Color Me Mine", "Kidspark"],
    finding: "Most capital-efficient. Sub-$350K average investment with 2–2.5 year payback requiring no proprietary technology.",
  },
];

const qualTable: { brand: string; cat: string; price: string; franchises: string; duration: string; isSandboxVR?: boolean }[] = [
  { brand: "Sandbox VR", cat: "Tech-Mediated", price: "$44 avg", franchises: "65", duration: "60 mins", isSandboxVR: true },
  { brand: "Zero Latency VR", cat: "Tech-Mediated", price: "$35–50", franchises: "130+", duration: "45 mins" },
  { brand: "Ctrl V", cat: "Tech-Mediated", price: "$15–30", franchises: "50+", duration: "60 mins" },
  { brand: "Activate", cat: "Tech-Mediated", price: "$25–45", franchises: "50+", duration: "60 mins" },
  { brand: "EVA", cat: "Tech-Mediated", price: "$30–50", franchises: "30+", duration: "45 mins" },
  { brand: "Museum of Illusions", cat: "Tech-Mediated", price: "$20–30", franchises: "70+", duration: "60 mins" },
  { brand: "Escapology", cat: "Themed Entertainment", price: "$40–50", franchises: "100+", duration: "60 mins" },
  { brand: "iSmash", cat: "Themed Entertainment", price: "$40–70", franchises: "20+", duration: "30 mins" },
  { brand: "Sky Zone", cat: "Physical Recreation", price: "$29–36", franchises: "200+", duration: "105 mins" },
  { brand: "Altitude Trampoline", cat: "Physical Recreation", price: "$15–22", franchises: "85", duration: "60 mins" },
  { brand: "Color Me Mine", cat: "Social-Based", price: "$38–40", franchises: "130+", duration: "120 mins" },
  { brand: "Kidspark", cat: "Social-Based", price: "$12", franchises: "22", duration: "60 mins" },
];

export default function LBELandscapeSection() {
  return (
    <section
      data-section="competitors"
      style={{
        background: "#0f0f0f",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="fade-in" style={{ marginBottom: 16 }}>
          <div className="tag">Location-Based Entertainment</div>
        </div>
        <h2
          className="fade-in fade-in-delay-1"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(30px, 3.5vw, 48px)",
            fontWeight: 700,
            color: "var(--warm-white)",
            lineHeight: 1.12,
            maxWidth: 600,
            marginBottom: 16,
          }}
        >
          LBE Franchise Landscape
        </h2>
        <p
          className="fade-in fade-in-delay-2"
          style={{
            fontSize: 17,
            color: "rgba(245,240,234,0.68)",
            lineHeight: 1.8,
            maxWidth: 640,
            marginBottom: 64,
          }}
        >
          Physical Recreation demands the most capital with average returns   Social and Tech-Mediated
          venues outperform on payback. LBE concepts with narrowest experience offerings generate fastest payback.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 64,
          }}
        >
          {lbeCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`fade-in fade-in-delay-${i + 1} card-hover`}
              style={{
                background: cat.highlight
                  ? "rgba(59,130,246,0.08)"
                  : "rgba(255,255,255,0.03)",
                border: `1px solid ${cat.highlight ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.06)"}`,
                padding: "32px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 3,
                  background: cat.color,
                  marginBottom: 20,
                  borderRadius: 2,
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}
              >
                {cat.category}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 14,
                }}
              >
                {cat.footprint}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(245,240,234,0.68)",
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                {cat.desc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                {[
                  { label: "Avg CAPEX", val: cat.capex },
                  { label: "Payback", val: cat.payback },
                  { label: "AUV", val: cat.auv },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "rgba(255,255,255,0.68)",
                      }}
                    >
                      {m.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: cat.highlight ? "var(--crimson-light)" : "rgba(245,240,234,0.7)",
                        fontWeight: cat.highlight ? 600 : 400,
                      }}
                    >
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                {cat.examples.map((ex) => (
                  <span
                    key={ex}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.08em",
                      color: cat.highlight ? "var(--crimson-light)" : "rgba(255,255,255,0.6)",
                      background: "rgba(255,255,255,0.05)",
                      padding: "2px 7px",
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: 11,
                  color: cat.highlight ? "rgba(245,240,234,0.6)" : "rgba(245,240,234,0.35)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  paddingTop: 14,
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {cat.finding}
              </p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="fade-in fade-in-delay-2">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 4,
                height: 28,
                background: "var(--crimson-light)",
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--warm-white)",
                fontWeight: 600,
              }}
            >
              LBE Qualitative Information
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "rgba(59,130,246,0.06)" }}>
                  {["Brand", "Category", "Price / Person", "Franchises", "Avg Session"].map((h) => (
                    <th
                      key={h}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.7)",
                        padding: "14px 18px",
                        textAlign: "left",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {qualTable.map((row, i) => (
                  <tr
                    key={row.brand}
                    style={{
                      background: row.isSandboxVR
                        ? "rgba(245,158,11,0.07)"
                        : i % 2 === 0
                        ? "transparent"
                        : "rgba(255,255,255,0.02)",
                      borderLeft: row.isSandboxVR ? "2px solid #f59e0b" : "2px solid transparent",
                      transition: "background 0.2s",
                    }}
                  >
                    {[row.brand, row.cat, row.price, row.franchises, row.duration].map((val, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "14px 18px",
                          fontSize: j === 0 ? 15 : 14,
                          fontWeight: j === 0 ? 700 : row.isSandboxVR ? 600 : 400,
                          color: row.isSandboxVR
                            ? j === 0 ? "#f8d57e" : "rgba(248,213,126,0.85)"
                            : j === 0 ? "var(--warm-white)" : "rgba(245,240,234,0.75)",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          fontFamily: j >= 2 ? "var(--font-mono)" : "var(--font-sans)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {val}{row.isSandboxVR && j === 0 ? " ★" : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "rgba(245,240,234,0.75)",
              marginTop: 16,
              letterSpacing: "0.06em",
              padding: "12px 16px",
              background: "rgba(59,130,246,0.06)",
              borderLeft: "2px solid rgba(59,130,246,0.4)",
              lineHeight: 1.6,
            }}
          >
            At $44 on average — and $49 on weekends — Sandbox VR commands a premium price point
            above every Tech-Mediated peer in the landscape, sustained by proprietary IP and hardware no competitor can replicate.
          </div>
        </div>
      </div>
    </section>
  );
}
