const staffComparison = [
  { label: "Sandbox VR", staff: 5, revPerStaff: 282, highlight: true },
  { label: "Zero Latency", staff: 5, revPerStaff: 180 },
  { label: "Sky Zone", staff: 18, revPerStaff: 110 },
  { label: "Altitude Trampoline", staff: 16, revPerStaff: 90 },
  { label: "Escapology", staff: 6, revPerStaff: 145 },
  { label: "Color Me Mine", staff: 4, revPerStaff: 120 },
];

const advantages = [
  {
    title: "Fixed-Venue Corporate Booking Model",
    desc: "A fixed-venue format enables corporate bookings, repeat traffic, and consistent scheduling. Corporate and group sessions account for a large share of revenue and book well in advance, providing reliable and predictable income.",
    metric: "2–4×",
    metricLabel: "Corporate repeat bookings / year",
  },
  {
    title: "5 Staff Per Location",
    desc: "Matches lean tech-mediated competitors while physical recreation concepts require two to four times the headcount to operate. Technology effectively replaces labor at scale.",
    metric: "2-4x",
    metricLabel: "Less staff vs. physical rec",
  },
  {
    title: "IP-Driven Pricing Power",
    desc: "Premium pricing averaging $44 per session — peaking at $49 on weekends — is sustained by IP licensing and experience differentiation. No other category can replicate this without equivalent IP or hardware barriers.",
    metric: "$44",
    metricLabel: "Avg session price",
  },
];

export default function OperationalSection() {
  const maxRev = 300;

  return (
    <section
      data-section="financials"
      style={{ background: "#12151c", padding: "120px 0", color: "#fff" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="fade-in" style={{ marginBottom: 16 }}>
          <div className="tag">Operational Excellence</div>
        </div>
        <h2
          className="fade-in fade-in-delay-1"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(30px, 3.5vw, 48px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.12,
            maxWidth: 620,
            marginBottom: 16,
          }}
        >
          Labor Model and Staffing Efficiency
        </h2>
        <p
          className="fade-in fade-in-delay-2"
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.68)",
            lineHeight: 1.8,
            maxWidth: 640,
            marginBottom: 72,
          }}
        >
          Sandbox VR operates at an average of 5 staff per location while generating $282 revenue per
          staff member, significantly outperforming all peers in the benchmark. Venues that optimize
          concurrent session capacity surpass equivalently staffed competitors on revenue per staff.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          {/* Staff chart */}
          <div>
            <div
              className="fade-in"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.68)",
                marginBottom: 28,
              }}
            >
              Revenue per Staff Member vs. Staff Count
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {staffComparison.map((item, i) => (
                <div key={item.label} className={`fade-in fade-in-delay-${Math.min(i + 1, 5)}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: item.highlight ? 600 : 400,
                          color: item.highlight ? "#ffffff" : "rgba(255,255,255,0.65)",
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.68)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {item.staff} staff
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: item.highlight ? "var(--blue-light)" : "rgba(255,255,255,0.55)",
                        fontWeight: item.highlight ? 600 : 400,
                      }}
                    >
                      ${item.revPerStaff}/staff
                    </span>
                  </div>
                  <div
                    style={{
                      height: item.highlight ? 12 : 7,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="bar-animate"
                      style={{
                        height: "100%",
                        width: `${(item.revPerStaff / maxRev) * 100}%`,
                        background: item.highlight ? "var(--blue)" : "rgba(255,255,255,0.68)",
                        transitionDelay: `${i * 0.07}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              className="fade-in"
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
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                $282
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", marginTop: 6, lineHeight: 1.5 }}>
                Revenue per 60-min session per staff member, significantly outperforming all VR competitors
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`fade-in fade-in-delay-${i + 1} card-hover`}
                style={{
                  padding: "24px 24px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.04)",
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 24,
                      fontWeight: 700,
                      color: "var(--blue-light)",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {adv.metric}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 8,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.68)",
                      marginTop: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    {adv.metricLabel}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {adv.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: 1.6,
                    }}
                  >
                    {adv.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
