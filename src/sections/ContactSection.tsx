const team = [
  { name: "Gabriel Nagel", email: "gnagel@stanford.edu" },
  { name: "Gia Han Pham", email: "giahanpb@stanford.edu" },
  { name: "Gary Liu", email: "garyliu8@stanford.edu" },
  { name: "Melody Wu", email: "melodyw0@stanford.edu" },
  { name: "Prince Nwalozie", email: "princecn@stanford.edu" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-section="contact"
      style={{
        background: "var(--charcoal-2)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 3,
          background: "linear-gradient(90deg, var(--blue), transparent 70%)",
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 600,
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        <div className="fade-in" style={{ marginBottom: 16 }}>
          <div className="tag">Research Team</div>
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
          Get in Touch
        </h2>
        <p
          className="fade-in fade-in-delay-2"
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.68)",
            lineHeight: 1.8,
            maxWidth: 480,
            marginBottom: 64,
          }}
        >
          Questions about the analysis or interested in exploring the franchise opportunity?
          Reach out to the Stanford Consulting team.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
        >
          {team.map((member, i) => (
            <a
              key={member.email}
              href={`mailto:${member.email}`}
              className={`fade-in fade-in-delay-${Math.min(i + 1, 5)} card-hover`}
              style={{
                display: "block",
                textDecoration: "none",
                background: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.18)",
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.25s, background 0.25s, transform 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.18)";
                (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.06)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background: "linear-gradient(90deg, var(--blue), transparent)",
                  opacity: 0.6,
                }}
              />

              {/* Avatar initials */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--blue-light)",
                  marginBottom: 20,
                  flexShrink: 0,
                }}
              >
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {member.name}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 14,
                }}
              >
                Stanford Consulting
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--blue-light)",
                  letterSpacing: "0.02em",
                  wordBreak: "break-all",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                {member.email}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom line */}
        <div
          className="fade-in"
          style={{
            marginTop: 64,
            display: "flex",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "20px 28px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.68)",
                marginBottom: 6,
              }}
            >
              Institution
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>
              Stanford University
            </div>
          </div>
          <div
            style={{
              padding: "20px 28px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.68)",
                marginBottom: 6,
              }}
            >
              Project
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>
              Comparable Franchise Benchmarking   Sandbox VR
            </div>
          </div>
          <div
            style={{
              padding: "20px 28px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.68)",
                marginBottom: 6,
              }}
            >
              Year
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
