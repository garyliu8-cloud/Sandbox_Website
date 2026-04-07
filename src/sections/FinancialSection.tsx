const marginData = [
  { label: "Sandbox VR", pct: 41, highlight: true },
  { label: "Escapology", pct: 28 },
  { label: "Zero Latency", pct: 35 },
  { label: "Activate", pct: 32 },
  { label: "Immersive Gamebox", pct: 35 },
  { label: "Sky Zone", pct: 22 },
  { label: "Color Me Mine", pct: 25 },
  { label: "Dave's Hot Chicken", pct: 18 },
  { label: "Little Caesars", pct: 16 },
  { label: "Crumbl", pct: 20 },
];

const paybackData = [
  { label: "Sandbox VR", yrs: 1.4, highlight: true },
  { label: "iSMASH", yrs: 2.1 },
  { label: "Color Me Mine", yrs: 2.1 },
  { label: "Zero Latency", yrs: 2.5 },
  { label: "Escapology", yrs: 3.2 },
  { label: "Sky Zone", yrs: 4.8 },
  { label: "Dave's Hot Chicken", yrs: 3.5 },
  { label: "Little Caesars", yrs: 3.8 },
];

const capexData = [
  { label: "Sandbox VR", val: 1.05, highlight: true },
  { label: "Dave's Hot Chicken", val: 1.29 },
  { label: "Little Caesars", val: 1.13 },
  { label: "Zero Latency", val: 0.75 },
  { label: "Baskin-Robbins", val: 0.47 },
  { label: "Crumbl", val: 0.9 },
  { label: "Sky Zone", val: 2.1 },
];

export default function FinancialSection() {
  const maxMargin = 45;
  const maxPayback = 5;
  const maxCapex = 2.2;

  return (
    <section
      id="financials"
      data-section="financials"
      style={{ background: "var(--charcoal)", padding: "120px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="fade-in" style={{ marginBottom: 16 }}>
          <div className="tag">Quantitative Competitive Benchmarking</div>
        </div>
        <h2
          className="fade-in fade-in-delay-1"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(30px, 3.5vw, 48px)",
            fontWeight: 700,
            color: "var(--warm-white)",
            lineHeight: 1.12,
            maxWidth: 640,
            marginBottom: 16,
          }}
        >
          Sandbox VR's Financial Superiority   By the Numbers
        </h2>
        <p
          className="fade-in fade-in-delay-2"
          style={{
            fontSize: 17,
            color: "rgba(245,240,234,0.68)",
            lineHeight: 1.8,
            maxWidth: 640,
            marginBottom: 40,
          }}
        >
          Structural unit economics advantage with operator EBITDA margin 41% vs. peer avg 19%
          (+21 ppt, 2.1× higher), sustained 2022–2024. Payback 2.4× faster than peers.
        </p>

        {/* Key stats — moved to top */}
        <div
          className="fade-in"
          style={{
            marginBottom: 64,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.04)",
          }}
        >
          {[
            {
              num: "2.1×",
              label: "Higher EBITDA than peer average",
              detail: "Only concept at 41% EBITDA while most peers cluster at 10–20%",
            },
            {
              num: "2.4×",
              label: "Faster capital recovery",
              detail: "1.4yr payback in tight 1.3–1.5yr range across 3 years   peers span 1–6+ yrs",
            },
            {
              num: "$282",
              label: "Revenue per staff member",
              detail: "Significantly outperforms LBVR competitors despite similar staff count of 5/location",
            },
          ].map((stat) => (
            <div
              key={stat.num}
              style={{
                background: "var(--charcoal-2)",
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 48,
                  fontWeight: 900,
                  color: "var(--crimson-light)",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--warm-white)",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(245,240,234,0.65)",
                  lineHeight: 1.6,
                }}
              >
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 }}>
          {/* EBITDA Margin */}
          <div>
            <div
              className="fade-in"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "rgba(255,255,255,0.68)",
                marginBottom: 6,
              }}
            >
              EBITDA Margin
            </div>
            <div
              className="fade-in fade-in-delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 36,
                fontWeight: 700,
                color: "var(--crimson-light)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              41%
            </div>
            <div
              className="fade-in fade-in-delay-2"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 28,
              }}
            >
              vs. 19% peer average (+21 ppt)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {marginData.map((item, i) => (
                <div key={item.label} className={`fade-in fade-in-delay-${Math.min(i, 5)}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 5,
                      fontSize: 11,
                    }}
                  >
                    <span
                      style={{
                        color: item.highlight ? "var(--warm-white)" : "rgba(255,255,255,0.65)",
                        fontWeight: item.highlight ? 600 : 400,
                        fontFamily: item.highlight ? "var(--font-serif)" : "var(--font-sans)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: item.highlight ? "var(--crimson-light)" : "rgba(255,255,255,0.55)",
                        fontWeight: item.highlight ? 600 : 400,
                      }}
                    >
                      {item.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: item.highlight ? 8 : 5,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="bar-animate"
                      style={{
                        height: "100%",
                        width: `${(item.pct / maxMargin) * 100}%`,
                        background: item.highlight
                          ? "linear-gradient(90deg, #1d4ed8, var(--crimson-light))"
                          : "rgba(255,255,255,0.68)",
                        transitionDelay: `${i * 0.05}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payback Period */}
          <div>
            <div
              className="fade-in"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "rgba(255,255,255,0.68)",
                marginBottom: 6,
              }}
            >
              Payback Period
            </div>
            <div
              className="fade-in fade-in-delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 36,
                fontWeight: 700,
                color: "var(--crimson-light)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              1.4 yrs
            </div>
            <div
              className="fade-in fade-in-delay-2"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 28,
              }}
            >
              vs. 3.5 yr peer avg (2.4× faster)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {paybackData.map((item, i) => (
                <div key={item.label} className={`fade-in fade-in-delay-${Math.min(i, 5)}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 5,
                      fontSize: 11,
                    }}
                  >
                    <span
                      style={{
                        color: item.highlight ? "var(--warm-white)" : "rgba(255,255,255,0.65)",
                        fontWeight: item.highlight ? 600 : 400,
                        fontFamily: item.highlight ? "var(--font-serif)" : "var(--font-sans)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: item.highlight ? "var(--crimson-light)" : "rgba(255,255,255,0.55)",
                        fontWeight: item.highlight ? 600 : 400,
                      }}
                    >
                      {item.yrs} yrs
                    </span>
                  </div>
                  <div
                    style={{
                      height: item.highlight ? 8 : 5,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="bar-animate"
                      style={{
                        height: "100%",
                        width: `${(item.yrs / maxPayback) * 100}%`,
                        background: item.highlight
                          ? "linear-gradient(90deg, #1d4ed8, var(--crimson-light))"
                          : "rgba(255,255,255,0.68)",
                        transitionDelay: `${i * 0.06}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Initial CAPEX */}
          <div>
            <div
              className="fade-in"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "rgba(255,255,255,0.68)",
                marginBottom: 6,
              }}
            >
              Initial Investment
            </div>
            <div
              className="fade-in fade-in-delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 36,
                fontWeight: 700,
                color: "var(--crimson-light)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              $1.05M
            </div>
            <div
              className="fade-in fade-in-delay-2"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 28,
              }}
            >
              Stable +2% over 2022–2024 (+predictability)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {capexData.map((item, i) => (
                <div key={item.label} className={`fade-in fade-in-delay-${Math.min(i, 5)}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 5,
                      fontSize: 11,
                    }}
                  >
                    <span
                      style={{
                        color: item.highlight ? "var(--warm-white)" : "rgba(255,255,255,0.65)",
                        fontWeight: item.highlight ? 600 : 400,
                        fontFamily: item.highlight ? "var(--font-serif)" : "var(--font-sans)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: item.highlight ? "var(--crimson-light)" : "rgba(255,255,255,0.55)",
                        fontWeight: item.highlight ? 600 : 400,
                      }}
                    >
                      ${item.val.toFixed(2)}M
                    </span>
                  </div>
                  <div
                    style={{
                      height: item.highlight ? 8 : 5,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="bar-animate"
                      style={{
                        height: "100%",
                        width: `${(item.val / maxCapex) * 100}%`,
                        background: item.highlight
                          ? "linear-gradient(90deg, #1d4ed8, var(--crimson-light))"
                          : "rgba(255,255,255,0.68)",
                        transitionDelay: `${i * 0.06}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
