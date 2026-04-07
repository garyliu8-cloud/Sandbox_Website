const categories = [
  {
    name: "Quick Service Restaurants",
    desc: "Compact, standardized food concepts built for high foot traffic and fast throughput. Moderate capital requirements with proven brand systems, but margins and payback periods fall well short of what Sandbox VR delivers.",
    examples: ["Fast Casual Dining", "Dessert Concepts", "Pizza Chains", "Bakery Brands"],
    insight: "QSR concepts top out at 15 to 20% EBITDA margins and require 2.5 to 5 years to recoup investment. Sandbox VR delivers more than double the margin at 40 to 41% and pays back in just 1.4 years.",
    capex: "$300K-$2M",
    payback: "2.5-5 yrs",
    ebitda: "15-20%",
  },
  {
    name: "Personal and Professional Services",
    desc: "Appointment-driven formats including golf instruction, wellness, and coaching. Recurring membership models provide steady revenue but margins remain capped by labor intensity and physical space constraints.",
    examples: ["Golf Instruction", "Sports Coaching", "Wellness Services"],
    insight: "Services concepts reach 20 to 30% EBITDA with 2 to 4 year payback periods. Sandbox VR outperforms on both metrics while delivering a category-defining product experience that services concepts cannot replicate.",
    capex: "$200K-$600K",
    payback: "2-4 yrs",
    ebitda: "20-30%",
  },
  {
    name: "Education and Enrichment",
    desc: "STEM education, tutoring, and child enrichment concepts with lean staffing and minimal buildout. Among the more capital-efficient franchise models available, though average unit volumes remain low.",
    examples: ["STEM Programs", "Academic Tutoring"],
    insight: "Education concepts achieve 25 to 35% EBITDA with the lowest CAPEX in this benchmark. Sandbox VR still outperforms on margin and payback while offering significantly higher average unit volume and brand premium.",
    capex: "$50K-$200K",
    payback: "1.5-3 yrs",
    ebitda: "25-35%",
  },
  {
    name: "Specialty Retail",
    desc: "Inventory-light retail concepts in cell repair, resale, and accessories. Operationally streamlined with small teams, but structurally exposed to e-commerce pressure and limited pricing power.",
    examples: ["Device Repair", "Specialty Resale"],
    insight: "Specialty retail tops out at 25% EBITDA with 2 to 4 year payback. Sandbox VR delivers superior returns with a product that e-commerce cannot compete with and a customer base that actively wants to come back.",
    capex: "$100K-$400K",
    payback: "2-4 yrs",
    ebitda: "15-25%",
  },
];

const sbvr = {
  capex: "$1.05M",
  payback: "1.4 yrs",
  ebitda: "41%",
};

export default function LCLLSection() {
  return (
    <section
      data-section="market"
      style={{
        background: "var(--charcoal)",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
          }}
        >
          <div>
            <div className="tag fade-in" style={{ marginBottom: 16 }}>
              Qualitative Competitive Benchmarking
            </div>
            <h2
              className="fade-in fade-in-delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(30px, 3.5vw, 48px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.12,
                maxWidth: 560,
              }}
            >
              Low Capital, Low Labor Franchise Landscape
            </h2>
          </div>
          <div
            className="fade-in fade-in-delay-2"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "rgba(255,255,255,0.68)",
              letterSpacing: "0.12em",
              textAlign: "right",
              maxWidth: 280,
              lineHeight: 1.7,
            }}
          >
            20+ concepts analyzed across capital efficiency and revenue predictability
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.04)",
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`fade-in fade-in-delay-${i + 1} card-hover`}
              style={{
                background: "var(--charcoal-2)",
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 80,
                  fontWeight: 900,
                  color: "rgba(59,130,246,0.06)",
                  position: "absolute",
                  top: 12,
                  right: 16,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {cat.name}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: 20,
                }}
              >
                {cat.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {cat.examples.map((ex) => (
                  <span
                    key={ex}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.72)",
                      background: "rgba(255,255,255,0.07)",
                      padding: "3px 8px",
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: "var(--blue-light)",
                  lineHeight: 1.6,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  marginBottom: 20,
                }}
              >
                {cat.insight}
              </div>

              {/* Category benchmarks */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 8,
                  padding: "12px 0",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {[
                  { label: "CAPEX", val: cat.capex },
                  { label: "Payback", val: cat.payback },
                  { label: "EBITDA", val: cat.ebitda },
                ].map((m) => (
                  <div key={m.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "rgba(255,255,255,0.55)",
                        marginBottom: 3,
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sandbox VR comparison */}
              <div
                style={{
                  background: "rgba(59,130,246,0.08)",
                  borderLeft: "2px solid var(--blue)",
                  padding: "10px 12px",
                  marginTop: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--blue-light)",
                    marginBottom: 6,
                  }}
                >
                  Sandbox VR
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 8,
                  }}
                >
                  {[
                    { label: "CAPEX", val: sbvr.capex },
                    { label: "Payback", val: sbvr.payback },
                    { label: "EBITDA", val: sbvr.ebitda },
                  ].map((m) => (
                    <div key={m.label}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 8,
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: "rgba(255,255,255,0.55)",
                          marginBottom: 3,
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          color: "#ffffff",
                          fontWeight: 600,
                        }}
                      >
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="fade-in"
          style={{
            marginTop: 32,
            padding: "24px 32px",
            background: "rgba(59,130,246,0.08)",
            borderLeft: "3px solid var(--blue)",
            fontSize: 15,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#ffffff" }}>The bottom line: </strong>
          The most capital-efficient low-labor franchises cap at 35% EBITDA with payback periods of 1.5 years or longer.
          Sandbox VR delivers 41% EBITDA and a 1.4-year payback while offering a product that no low-capital concept can
          compete with on experience, pricing power, or repeat demand.
        </div>
      </div>
    </section>
  );
}
