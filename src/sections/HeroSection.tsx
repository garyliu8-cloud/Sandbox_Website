import { useEffect, useRef } from "react";

const kpis = [
  { val: "41%", label: "EBITDA Margin", sub: "vs. 19% LBE avg" },
  { val: "1.4 yrs", label: "Payback Period", sub: "2.4× faster than peers" },
  { val: "$44/session", label: "Avg Session Price", sub: "$39 weekdays · $49 weekends" },
  { val: "4.94/5.00", label: "Avg Rating", sub: "Yelp + Google Maps, 45 locations" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.4 + 0.05,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      data-section="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "clip",
        background: "var(--charcoal)",
        paddingTop: "80px",
        paddingBottom: "100px",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          zIndex: 0,
        }}
      />

      {/* Crimson glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1280px",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div className="tag" style={{ marginBottom: 24 }}>
            Location-Based Entertainment · Franchise Analysis
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 5.5vw, 76px)",
              fontWeight: 900,
              lineHeight: 1.02,
              color: "var(--warm-white)",
              marginBottom: 24,
            }}
          >
            The{" "}
            <em style={{ color: "var(--crimson-light)", fontStyle: "italic" }}>Premier</em>
            <br />
            VR Franchise
            <br />
            Opportunity
          </h1>

          <p
            style={{
              fontSize: 17,
              fontWeight: 300,
              color: "rgba(245,240,234,0.72)",
              lineHeight: 1.75,
              maxWidth: 440,
              marginBottom: 40,
            }}
          >
            Category-leading unit economics, the fastest payback period in the franchise benchmark,
            and a proven operational playbook built for the next era of location-based entertainment.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(59,130,246,0.15)",
              border: "1px solid rgba(59,130,246,0.35)",
              padding: "10px 20px",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--cream)",
            }}
          >
            Stanford Consulting · Comparable Franchise Benchmarking · 2026
          </div>
        </div>

        {/* Right   KPI grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          {kpis.map((kpi, i) => (
            <div
              key={kpi.label}
              className="card-hover"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "24px 22px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 3,
                  height: "100%",
                  background: "var(--crimson)",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: kpi.val.length > 7 ? "clamp(16px, 1.6vw, 22px)" : "clamp(24px, 2.6vw, 36px)",
                  fontWeight: 700,
                  color: "var(--warm-white)",
                  lineHeight: 1.1,
                  marginBottom: 8,
                  whiteSpace: "nowrap",
                }}
              >
                {kpi.val}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "rgba(245,240,234,0.65)",
                  marginBottom: 6,
                }}
              >
                {kpi.label}
              </div>
              <div style={{ fontSize: 12, color: "var(--crimson-light)" }}>{kpi.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.68)",
          }}
        >
          Scroll to explore
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, rgba(59,130,246,0.6), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
