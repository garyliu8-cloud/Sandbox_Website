const segments = [
  {
    num: "01",
    title: "Birthday Parties and Celebrations",
    desc: "A consistent top traffic driver across all concepts. Each party brings in groups of 20 or more guests and anchors high-value bookings with strong upsell potential through premium packages and add-ons.",
    stat: "Top traffic driver",
  },
  {
    num: "02",
    title: "Corporate Events and Team Building",
    desc: "The most controllable and highest-margin segment. Group sessions of six or more players enable recurring bookings that improve labor efficiency and EBITDA compared to transactional consumer volume.",
    stat: "6+ player group sessions",
  },
  {
    num: "03",
    title: "Date Night and Couples",
    desc: "Premium experience seekers willing to pay at the highest price point for memorable shared activities. This segment drives mid-week volume and improves off-peak utilization across all days.",
    stat: "$44 avg/session",
  },
  {
    num: "04",
    title: "Friend Groups and Social Occasions",
    desc: "Young adults seeking high-shareability experiences generate organic reach through social media content. The full-body haptic experience is inherently built for capturing and sharing memorable moments.",
    stat: "Core 18-35 demographic",
  },
];

const yelpData = [
  { year: "2022", rating: 3.88, reviews: 1200 },
  { year: "2023", rating: 4.05, reviews: 2100 },
  { year: "2024", rating: 4.22, reviews: 3136 },
];

const sentimentThemes = [
  {
    theme: "Experience Quality",
    positive: 96.6,
    detail: "96.6% positive review rate at sample depth (4.85/5.0 avg across 2,250 Outscraper reviews from flagship locations)",
    source: "Google Reviews",
  },
  {
    theme: "Five-Star Rating Rate",
    positive: 92.4,
    detail: "92.4% of all Google reviews award a full five stars across the franchise network",
    source: "Google Reviews",
  },
  {
    theme: "Repeat Visit Intent",
    positive: 46.6,
    detail: "Top 3 of 27 franchises for repeat visit intent at 46.6%, vs. 31.4% VR peer average and 33.5% all-brand average",
    source: "Google Reviews",
  },
  {
    theme: "Party and Event Booking Rate",
    positive: 20.6,
    detail: "20.6% of reviews mention party or event bookings, vs. 14.9% VR peer average, the strongest B2B demand signal in the VR category",
    source: "Google Reviews",
  },
];

const googleStats = [
  { val: "223,845+", label: "Google Reviews Network-Wide", sub: "Across 45 tracked locations" },
  { val: "4.94 / 5.0", label: "Network Average Rating", sub: "Listing metadata, 45 locations" },
  { val: "46.6%", label: "Repeat Visit Intent Rate", sub: "Top 3 of 27 franchises benchmarked" },
  { val: "80.5", label: "Customer Satisfaction Score", sub: "Top 7 of 27 brands (all-brand avg: 74.1)" },
];

export default function CustomerSection() {
  return (
    <section
      data-section="insights"
      style={{ background: "#0d0f14", padding: "120px 0", color: "#fff" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="fade-in" style={{ marginBottom: 16 }}>
          <div className="tag">Market Sentiment Analysis · Customer Perspectives</div>
        </div>
        <h2
          className="fade-in fade-in-delay-1"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(30px, 3.5vw, 48px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.12,
            maxWidth: 640,
            marginBottom: 16,
          }}
        >
          Customer Segmentation and Sentiment
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
          Analysis across 223,845 Google reviews and 6,436 Yelp reviews reveals a consistent
          improvement trajectory and strong customer advocacy. Sandbox VR is among the top 3 of 27 franchises
          benchmarked for repeat visit intent, with a 2.2% negative review rate that is 3rd lowest of all 27 brands
          and well below the 7.1% all-brand average.
        </p>

        {/* Google Maps stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.04)",
            marginBottom: 72,
          }}
        >
          {googleStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-in fade-in-delay-${i + 1}`}
              style={{
                background: "var(--charcoal-2)",
                padding: "32px 28px",
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
                  height: 2,
                  background: "var(--blue)",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.val}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: 6,
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: 12, color: "var(--blue-light)" }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Customer segments */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 72,
          }}
        >
          {segments.map((seg, i) => (
            <div
              key={seg.num}
              className={`fade-in fade-in-delay-${i + 1} card-hover`}
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "28px 24px",
                background: "rgba(255,255,255,0.04)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 72,
                  fontWeight: 900,
                  color: "rgba(59,130,246,0.05)",
                  position: "absolute",
                  top: 12,
                  right: 14,
                  lineHeight: 1,
                }}
              >
                {seg.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {seg.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                {seg.desc}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--blue-light)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {seg.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews and Sentiment */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          {/* Yelp trajectory */}
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
              Yelp Rating Trajectory (6,436 reviews)
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-end", marginBottom: 16 }}>
              {yelpData.map((y, i) => {
                const height = ((y.rating - 3.5) / 1) * 150 + 40;
                return (
                  <div
                    key={y.year}
                    className={`fade-in fade-in-delay-${i + 1}`}
                    style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 13,
                        color: i === 2 ? "var(--blue-light)" : "rgba(255,255,255,0.65)",
                        fontWeight: i === 2 ? 600 : 400,
                      }}
                    >
                      {y.rating} stars
                    </div>
                    <div style={{ width: "100%", position: "relative" }}>
                      <div
                        className="bar-height-animate"
                        style={{
                          width: "100%",
                          height: `${height}px`,
                          background: i === 2
                            ? "linear-gradient(to top, var(--blue-deep), var(--blue-light))"
                            : "rgba(255,255,255,0.12)",
                          borderRadius: "2px 2px 0 0",
                          transitionDelay: `${i * 0.15}s`,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "rgba(255,255,255,0.55)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {y.year}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        color: "rgba(255,255,255,0.68)",
                      }}
                    >
                      {y.reviews.toLocaleString()} reviews
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                padding: "16px 20px",
                background: "rgba(59,130,246,0.08)",
                borderLeft: "2px solid var(--blue)",
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.6,
              }}
            >
              4.22 star average Yelp rating in 2024, up from 3.88 in 2022. An improving satisfaction
              trajectory that reflects growing operational quality at scale.
            </div>
          </div>

          {/* Sentiment themes */}
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
              Google Reviews Sentiment (223,845+ reviews)
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {sentimentThemes.map((s, i) => (
                <div key={s.theme} className={`fade-in fade-in-delay-${i + 1}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                      alignItems: "baseline",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{s.theme}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 14,
                        color: "var(--blue-light)",
                        fontWeight: 600,
                      }}
                    >
                      {s.positive}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 8,
                      background: "rgba(255,255,255,0.07)",
                      borderRadius: 2,
                      overflow: "hidden",
                      marginBottom: 8,
                    }}
                  >
                    <div
                      className="bar-animate"
                      style={{
                        height: "100%",
                        width: `${Math.min(s.positive, 100)}%`,
                        background: "var(--blue)",
                        transitionDelay: `${i * 0.1}s`,
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.55,
                    }}
                  >
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
