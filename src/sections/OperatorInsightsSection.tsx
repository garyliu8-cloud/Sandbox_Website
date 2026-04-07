const quotes = [
  {
    quote: "Take care of employees sooner. Turnover is expensive.",
    person: "Franchise Owner",
    brand: "Quick Service Restaurant",
    theme: "Staffing",
    advantage: "Sandbox VR runs 5 staff per location, 3 to 4 times leaner than physical recreation formats, reducing turnover exposure and labor cost at scale.",
  },
  {
    quote: "Generator failures are the biggest operational concern.",
    person: "Franchise Owner",
    brand: "Mobile Entertainment",
    theme: "Equipment",
    advantage: "Sandbox VR's fixed-venue format eliminates mobile infrastructure risk. Corporate-grade hardware with remote access minimizes downtime during live sessions.",
  },
  {
    quote: "Corporate support feels like a family, always available.",
    person: "Franchise Owner",
    brand: "Creative Concept",
    theme: "Support",
    advantage: "Responsive franchisor support is standard across established franchise systems. Sandbox VR's distinction is remote hardware diagnostics that resolve technical issues in real time, preventing session interruptions without requiring on-site intervention.",
  },
  {
    quote: "The moment your money is down, you cut out entertainment first.",
    person: "Franchise Owner",
    brand: "Motorsports Entertainment",
    theme: "Market Risk",
    advantage: "Sandbox VR's corporate event revenue is considerably more resilient to near-term volatility than consumer walk-in formats.",
  },
];

const keyFindings = [
  {
    icon: "01",
    title: "Highest-Conviction Category",
    desc: "LBVR operators show the strongest reinvestment conviction compared to QSR and mobile formats. The category targets 16 to 18 month payback periods and 30 to 50% EBITDA margins, outperforming QSR by a wide margin.",
  },
  {
    icon: "02",
    title: "Corporate Booking Model",
    desc: "Corporate events are the most controllable and highest-margin segment. Group sessions of six or more players enable recurring bookings that improve labor efficiency and overall EBITDA versus transactional consumer volume.",
  },
  {
    icon: "03",
    title: "Franchisor Support Systems",
    desc: "Sandbox VR's franchisor support and remote hardware access are cited as key differentiators across operator interviews. 65+ open locations delivers operational credibility that emerging brands simply cannot match.",
  },
  {
    icon: "04",
    title: "Fixed Venue Advantage",
    desc: "A fixed-venue format delivers repeat traffic, corporate bookings, and consistent scheduling. This translates to superior payback, margin, and scalability compared to asset-heavy mobile models.",
  },
];

export default function OperatorInsightsSection() {
  return (
    <section
      id="insights"
      data-section="insights"
      style={{ background: "var(--charcoal)", padding: "120px 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="fade-in" style={{ marginBottom: 16 }}>
          <div className="tag">Market Sentiment Analysis · Franchise Operators</div>
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
          20 Operator Interviews
        </h2>
        <p
          className="fade-in fade-in-delay-2"
          style={{
            fontSize: 17,
            color: "rgba(245,240,234,0.68)",
            lineHeight: 1.8,
            maxWidth: 640,
            marginBottom: 72,
          }}
        >
          20 interviews across QSR, mobile entertainment, and location-based formats revealed staffing
          burden, equipment complexity, and demand volatility. Sandbox VR addresses all of the above:
        </p>

        {/* Quote grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            marginBottom: 64,
          }}
        >
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`fade-in fade-in-delay-${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.03)",
                padding: "32px 28px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--blue-light)",
                  marginBottom: 16,
                }}
              >
                {q.theme}
              </div>
              <div
                style={{
                  fontSize: 40,
                  color: "var(--blue)",
                  lineHeight: 1,
                  marginBottom: 12,
                  fontFamily: "Georgia, serif",
                  opacity: 0.5,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(245,240,234,0.8)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                {q.quote}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.1em",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {q.person}<br />
                {q.brand}
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(59,130,246,0.25)",
                  paddingTop: 16,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "var(--blue-light)",
                    marginBottom: 6,
                  }}
                >
                  Sandbox VR Advantage
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(245,240,234,0.75)",
                    lineHeight: 1.65,
                  }}
                >
                  {q.advantage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key findings */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {keyFindings.map((f, i) => (
            <div
              key={f.title}
              className={`fade-in fade-in-delay-${i + 1} card-hover`}
              style={{
                background: "rgba(59,130,246,0.07)",
                border: "1px solid rgba(59,130,246,0.2)",
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 56,
                  fontWeight: 900,
                  color: "rgba(59,130,246,0.12)",
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(245,240,234,0.72)",
                  lineHeight: 1.65,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
