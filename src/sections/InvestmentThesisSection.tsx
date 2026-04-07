const pillars = [
  {
    num: "I",
    title: "Structural Margin Superiority",
    desc: "40 to 41% EBITDA margin sustained consistently from 2022 to 2024, more than double the 19% peer average. No other concept in the benchmark approaches this level. Higher margin gives franchisees the room to reinvest in performance while maintaining strong returns.",
  },
  {
    num: "II",
    title: "Industry-Leading Payback Period",
    desc: "A 1.4-year payback period is the fastest in the franchise benchmark, 2.4 times quicker than the peer average. CAPEX has remained stable at approximately $1.05M with only a 2% variance over three years, reducing buildout risk for new operators.",
  },
  {
    num: "III",
    title: "IP-Protected Pricing Moat",
    desc: "Premium pricing at $44 per session on average — $49 on weekends — is sustained by IP licensing and hardware barriers no other LBE category can replicate. Proprietary full-body haptic hardware is unavailable anywhere else, providing a durable competitive advantage that compounds over time.",
  },
  {
    num: "IV",
    title: "Proven Operational Playbook",
    desc: "65 open locations with 24/7 tech support infrastructure, corporate group sessions that book months in advance, and CAPEX stability across the network. A systemized buildout process and reliable vendor relationships lower execution risk for incoming franchisees.",
  },
];

export default function InvestmentThesisSection() {
  return (
    <section
      id="thesis"
      data-section="thesis"
      style={{ background: "#0f1829", padding: "120px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="fade-in" style={{ marginBottom: 16 }}>
          <div className="tag light">Investment Thesis</div>
        </div>
        <h2
          className="fade-in fade-in-delay-1"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            fontWeight: 700,
            color: "var(--warm-white)",
            lineHeight: 1.08,
            maxWidth: 800,
            marginBottom: 16,
          }}
        >
          Sandbox VR is the category-defining franchise opportunity in location-based entertainment
        </h2>
        <p
          className="fade-in fade-in-delay-2"
          style={{
            fontSize: 17,
            color: "rgba(245,240,234,0.6)",
            lineHeight: 1.75,
            maxWidth: 640,
            marginBottom: 72,
          }}
        >
          The only LBE franchise with a proven 60+ location operational playbook, proprietary IP moat,
          and category-leading margins   positioned at the intersection of premium entertainment
          and technology-driven scalability.
        </p>

        {/* 4 pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.08)",
            marginBottom: 72,
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`fade-in fade-in-delay-${i + 1} card-hover`}
              style={{
                background: "#0f1829",
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background: "rgba(255,255,255,0.15)",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 56,
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.06)",
                  position: "absolute",
                  bottom: 16,
                  right: 20,
                  lineHeight: 1,
                }}
              >
                {p.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(245,240,234,0.72)",
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
