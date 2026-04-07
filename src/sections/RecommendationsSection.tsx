const reasons = [
  {
    num: "01",
    title: "Capture Premium Group Celebrations",
    desc: "The multiplayer format, designed for groups of 6 to 20 sharing the same virtual world, is structurally built for milestone occasions. Full-body haptic suits create genuinely memorable moments that drive organic sharing and repeat bookings from the same groups.",
    proof: "20.6% of Sandbox VR Google reviews mention party or event bookings, vs. 14.9% VR peer average",
  },
  {
    num: "02",
    title: "Benefit from Built-In Social Virality",
    desc: "The full-body haptic VR experience is engineered to be shared. Customers photograph and post their sessions organically, generating social media reach that no traditional advertising budget can replicate. Every session effectively becomes a marketing event.",
    proof: "9.1% of reviews mention immersive experiences, the highest rate in the VR benchmark",
  },
  {
    num: "03",
    title: "Access Flexible Investment Structures",
    desc: "Sandbox VR offers investment models designed for operators at different stages of their franchise journey. Capital requirements are stable and predictable, with a proven two-percent CAPEX growth rate across the entire network from 2022 to 2024.",
    proof: "$1.05M average CAPEX with just 2% variance over three years of network expansion",
  },
  {
    num: "04",
    title: "Join a Co-Investment Growth Model",
    desc: "Corporate flagship locations anchor brand quality in key markets while franchise locations expand the footprint. Franchisees benefit from proximity to corporate-operated venues that drive brand recognition and reduce local marketing costs.",
    proof: "65+ open locations across North America with 150+ units in active development",
  },
  {
    num: "05",
    title: "Multiple Format Sizes Available",
    desc: "Sandbox VR has developed scalable footprint options to match the opportunity in any market. Whether you are targeting a major metropolitan area or a high-density suburban corridor, there is a format designed to meet your market's demand profile.",
    proof: "Formats range from 1,500 to 10,000 square feet to fit diverse real estate opportunities",
  },
  {
    num: "06",
    title: "Build Long-Term Customer Loyalty",
    desc: "With a 46.6% repeat visit intent rate, among the top 3 of all 27 franchises benchmarked, Sandbox VR customers come back. The platform is built to expand into memberships and loyalty programs that convert one-time visitors into recurring revenue.",
    proof: "46.6% repeat visit intent, top 3 of 27 franchises benchmarked, vs. 31.4% VR peer average",
  },
  {
    num: "07",
    title: "Enter Growing Markets as the Premium Leader",
    desc: "The LBVR market is expanding rapidly and Sandbox VR is already the category leader. Operators who enter now are positioned to build brand recognition in markets before the competitive set matures. First-mover advantage compounds over time.",
    proof: "162.8% network-wide system sales growth from 2022 to 2024",
  },
];

export default function RecommendationsSection() {
  const firstRow = reasons.slice(0, 4);
  const secondRow = reasons.slice(4);

  return (
    <section
      data-section="insights"
      style={{ background: "#111", padding: "120px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="fade-in" style={{ marginBottom: 16 }}>
          <div className="tag">Why Franchise Sandbox VR</div>
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
          7 Reasons to Become a Sandbox VR Franchise Operator
        </h2>
        <p
          className="fade-in fade-in-delay-2"
          style={{
            fontSize: 17,
            color: "rgba(245,240,234,0.68)",
            lineHeight: 1.8,
            maxWidth: 640,
            marginBottom: 80,
          }}
        >
          Sandbox VR offers the strongest unit economics in the LBE benchmark, a product customers
          love, and an operational playbook built on 65+ live locations. Here is what operators gain.
        </p>

        {/* Row 1: 4 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.03)",
            marginBottom: 2,
          }}
        >
          {firstRow.map((rec, i) => (
            <div
              key={rec.num}
              className={`fade-in fade-in-delay-${(i % 4) + 1} card-hover`}
              style={{
                background: "#0f0f0f",
                padding: "28px 24px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background: `rgba(59,130,246,${0.6 - i * 0.03})`,
                }}
              />

              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 52,
                  fontWeight: 900,
                  color: "rgba(59,130,246,0.08)",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {rec.num}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {rec.title}
              </h3>

              <p
                style={{
                  fontSize: 12,
                  color: "rgba(245,240,234,0.68)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                {rec.desc}
              </p>

              <div
                style={{
                  padding: "10px 12px",
                  background: "rgba(59,130,246,0.08)",
                  borderLeft: "2px solid rgba(59,130,246,0.4)",
                  fontSize: 11,
                  color: "var(--blue-light)",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                }}
              >
                {rec.proof}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {secondRow.map((rec, i) => (
            <div
              key={rec.num}
              className={`fade-in fade-in-delay-${(i % 4) + 1} card-hover`}
              style={{
                background: "#0f0f0f",
                padding: "28px 24px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background: `rgba(59,130,246,${0.6 - (i + 4) * 0.03})`,
                }}
              />

              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 52,
                  fontWeight: 900,
                  color: "rgba(59,130,246,0.08)",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {rec.num}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {rec.title}
              </h3>

              <p
                style={{
                  fontSize: 12,
                  color: "rgba(245,240,234,0.68)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                {rec.desc}
              </p>

              <div
                style={{
                  padding: "10px 12px",
                  background: "rgba(59,130,246,0.08)",
                  borderLeft: "2px solid rgba(59,130,246,0.4)",
                  fontSize: 11,
                  color: "var(--blue-light)",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                }}
              >
                {rec.proof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
