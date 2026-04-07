export default function FooterSection() {
  return (
    <section
      style={{ background: "var(--charcoal)", padding: "100px 0 60px", position: "relative", overflow: "hidden" }}
    >
      {/* Red slash accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 3,
          background: "linear-gradient(90deg, var(--crimson), transparent 60%)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-end" }}>
          <div>
            <div className="fade-in" style={{ marginBottom: 28 }}>
              <img
                src="/sandbox-vr-logo.png"
                alt="Sandbox VR"
                style={{ height: 32, filter: "invert(1)", opacity: 0.8 }}
              />
            </div>
            <h2
              className="fade-in fade-in-delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 900,
                color: "var(--warm-white)",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              The Future of
              <br />
              <em style={{ color: "var(--crimson-light)" }}>Location-Based Entertainment</em>
            </h2>
            <p
              className="fade-in fade-in-delay-2"
              style={{
                fontSize: 15,
                color: "rgba(245,240,234,0.72)",
                lineHeight: 1.7,
                maxWidth: 440,
                marginBottom: 36,
              }}
            >
              Category-leading margins, the fastest payback in the franchise benchmark, and a proven
              operational playbook built for the next era of immersive location-based experiences.
            </p>
            <div
              className="fade-in fade-in-delay-3"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--crimson)",
                padding: "14px 28px",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--warm-white)",
                cursor: "none",
              }}
            >
              sandboxvr.com
            </div>
          </div>

          <div>
            <div
              className="fade-in"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "40px 36px",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,234,0.3)",
                  marginBottom: 8,
                }}
              >
                Research Partner
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  marginBottom: 20,
                }}
              >
                Stanford Consulting
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,234,0.3)",
                  marginBottom: 8,
                }}
              >
                Report Type
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "var(--warm-white)",
                  fontWeight: 500,
                  marginBottom: 20,
                }}
              >
                Comparable Franchise Benchmarking
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,234,0.3)",
                  marginBottom: 8,
                }}
              >
                Period
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "var(--warm-white)",
                  fontWeight: 500,
                }}
              >
                January – March 2026
              </div>
            </div>

            <div
              className="fade-in fade-in-delay-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "rgba(245,240,234,0.2)",
                lineHeight: 1.8,
                letterSpacing: "0.08em",
              }}
            >
              Source: FDDs (Item 7 & 19), Operator Interviews, McKinsey 2026 LBVR Report,<br />
              Yelp Reviews Analysis (6,436 reviews), Google Maps Review Analysis (223,845+ reviews,<br />
              27 franchise brands, Outscraper April 2026). Stanford Consulting, 2026.<br />
              Contact Sandbox VR for more information at sandboxvr.com.
            </div>
          </div>
        </div>

        <div
          className="divider fade-in"
          style={{ margin: "60px 0 32px" }}
        />

        {/* Marquee */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          <div className="marquee-track" style={{ display: "flex", gap: 60 }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} style={{ display: "flex", gap: 60, flexShrink: 0 }}>
                {[
                  "41% EBITDA",
                  "1.4yr Payback",
                  "$44 avg/session",
                  "65+ Locations",
                  "4.22★ Yelp Rating",
                  "162.8% Sales Growth",
                  "2.4× Faster Payback",
                  "5 Staff/Location",
                  "2–4× Corporate Repeat Rate",
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.15)",
                      whiteSpace: "nowrap",
                      display: "flex",
                      alignItems: "center",
                      gap: 24,
                    }}
                  >
                    {item}
                    <span style={{ color: "var(--crimson)", fontSize: 6 }}>◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.15em",
            }}
          >
            © 2026 Sandbox VR · Stanford Consulting Analysis
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.15em",
            }}
          >
            Contact sandboxvr.com for franchise inquiries
          </div>
        </div>
      </div>
    </section>
  );
}
