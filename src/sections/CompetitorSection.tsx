import { useState } from "react";

const categories = [
  "Themed Entertainment",
  "Physical Recreation",
  "Social-Based",
  "Tech-Mediated",
] as const;

type Category = typeof categories[number];
type Filter = "All" | Category;

const filterButtons: Filter[] = [
  "All",
  "Tech-Mediated",
  "Themed Entertainment",
  "Physical Recreation",
  "Social-Based",
];

const competitors: {
  name: string;
  category: Category;
  tagline: string;
  price: string;
  ip: string;
  franchises: string;
  economics: string;
  isSandboxVR?: boolean;
}[] = [
  {
    name: "Sandbox VR",
    category: "Tech-Mediated" as Category,
    tagline: "Full-body immersive VR arenas with proprietary IP, haptics, and industry-leading EBITDA",
    price: "$44 avg",
    ip: "7+",
    franchises: "65",
    economics: "$1.2M–$1.8M investment; 41% EBITDA margin; 1.4-year payback — highest-returning franchise in LBE",
    isSandboxVR: true,
  },
  {
    name: "Zero Latency",
    category: "Tech-Mediated" as Category,
    tagline: "Free-roam VR entertainment pioneering warehouse-scale VR gaming",
    price: "$35–50",
    ip: "2",
    franchises: "130+",
    economics: "Flexible licensing model with royalties on ticket sales only",
  },
  {
    name: "Ctrl V",
    category: "Tech-Mediated" as Category,
    tagline: "North America's largest VR arcade franchise with open-play and private party bookings",
    price: "$15–30",
    ip: "0",
    franchises: "50+",
    economics: "$300K–$600K investment; low-capex model with per-headset session pricing",
  },
  {
    name: "Activate",
    category: "Tech-Mediated" as Category,
    tagline: "Group gaming experience with interactive touch-sensitive wall rooms",
    price: "$25–45",
    ip: "0",
    franchises: "50+",
    economics: "$1.5M–$1.8M initial investment; hybrid model with 50% corporate-owned locations",
  },
  {
    name: "EVA",
    category: "Tech-Mediated" as Category,
    tagline: "Compact free-roam VR arenas targeting group events and corporate outings",
    price: "$30–50",
    ip: "3",
    franchises: "30+",
    economics: "$400K–$800K investment; per-session pricing with corporate event upcharge potential",
  },
  {
    name: "Museum of Illusions",
    category: "Tech-Mediated" as Category,
    tagline: "Experiential entertainment built around interactive optical illusion exhibits",
    price: "$20–30",
    ip: "2",
    franchises: "70+",
    economics: "$400K–$900K investment; franchise-heavy model with high-margin ticket sales",
  },
  {
    name: "Escapology",
    category: "Themed Entertainment" as Category,
    tagline: "Escape room franchise with licensed IP and original puzzle games",
    price: "$40–50",
    ip: "4",
    franchises: "100+",
    economics: "$626K–$2.3M initial investment; $45K franchise fee, 6% royalty, 2% innovation fee",
  },
  {
    name: "iSmash",
    category: "Themed Entertainment" as Category,
    tagline: "Supervised destruction experience offering cathartic stress-relief sessions",
    price: "$40–70",
    ip: "0",
    franchises: "20+",
    economics: "$200K–$500K initial investment; per-session pricing with consumable supply model",
  },
  {
    name: "Sky Zone",
    category: "Physical Recreation" as Category,
    tagline: "Indoor active entertainment center featuring wall-to-wall trampolines",
    price: "$29–36",
    ip: "N/A",
    franchises: "200+",
    economics: "$1.3M–$2.8M investment; $60K franchise fee, 6% royalty, 2% marketing fee",
  },
  {
    name: "Altitude Trampoline",
    category: "Physical Recreation" as Category,
    tagline: "Indoor active entertainment with trampolines, foam pits, and structured jump zones",
    price: "$15–22",
    ip: "N/A",
    franchises: "85",
    economics: "$1.3M–$2.5M investment; $50K franchise fee; recurring membership and day-pass revenue",
  },
  {
    name: "Color Me Mine",
    category: "Social-Based" as Category,
    tagline: "Walk-in ceramic painting studio monetizing creativity as a social experience",
    price: "$38–40",
    ip: "N/A",
    franchises: "130+",
    economics: "$180K–$400K investment; $30K franchise fee; $478K average unit volume",
  },
  {
    name: "Kidspark",
    category: "Social-Based" as Category,
    tagline: "Drop-in supervised childcare and indoor play center for children ages 6 weeks to 12 years",
    price: "$12",
    ip: "N/A",
    franchises: "22",
    economics: "$300K–$500K investment; hourly drop-in and membership-based recurring revenue",
  },
];

const categoryColors: Record<Category, string> = {
  "Tech-Mediated": "#3b82f6",
  "Themed Entertainment": "#6b4ea0",
  "Physical Recreation": "#3b6ea0",
  "Social-Based": "#2d8a5e",
};

const categoryDescriptions: Record<Filter, string> = {
  "All": "Sandbox VR and 11 LBE franchise concepts benchmarked across price, IP, and unit economics",
  "Tech-Mediated": "Technology-driven formats competing for the same group outing spend and demographic",
  "Themed Entertainment": "Curated narrative and puzzle formats targeting similar 2–6 person group occasions",
  "Physical Recreation": "Activity-based franchises operating in adjacent venue footprints and price points",
  "Social-Based": "Social occasion concepts with overlapping group size, spend, and event booking profile",
};

export default function CompetitorSection() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All" ? competitors : competitors.filter((c) => c.category === active);
  const cols = filtered.length >= 6 ? 3 : filtered.length <= 2 ? 2 : 3;

  const getColor = (filter: Filter) => {
    if (filter === "All") return "#8b8fa8";
    return categoryColors[filter];
  };

  return (
    <section
      id="competitors"
      data-section="competitors"
      style={{ background: "#0d0f14", padding: "120px 0" }}
    >
      <style>{`
        @keyframes compCardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .comp-card {
          animation: compCardIn 0.35s ease forwards;
        }
        .comp-filter-btn {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 14px 20px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          position: relative;
          text-align: center;
        }
        .comp-filter-btn:hover {
          background: rgba(255,255,255,0.06);
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="fade-in tag" style={{ marginBottom: 16 }}>
            Competitor Deep Dives
          </div>
          <h2
            className="fade-in fade-in-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(30px, 3.5vw, 48px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              maxWidth: 560,
            }}
          >
            Benchmarking Across LBE Landscapes
          </h2>
        </div>

        {/* Category filter buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 2,
            marginBottom: 12,
          }}
        >
          {filterButtons.map((btn) => {
            const isActive = active === btn;
            const color = getColor(btn);
            return (
              <button
                key={btn}
                className="comp-filter-btn"
                onClick={() => setActive(btn)}
                style={{
                  background: isActive ? `${color}18` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? color : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: color,
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                    fontWeight: isActive ? 600 : 400,
                    transition: "color 0.2s",
                  }}
                >
                  {btn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Category description */}
        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.45)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.04em",
            marginBottom: 28,
          }}
        >
          {categoryDescriptions[active]}
        </p>

        {/* Competitor cards — re-keyed on category switch so animation fires */}
        <div
          key={active}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: 16,
          }}
        >
          {filtered.map((comp, i) => (
            <div
              key={comp.name}
              className="comp-card card-hover"
              style={{
                animationDelay: `${i * 50}ms`,
                background: comp.isSandboxVR
                  ? "rgba(245,158,11,0.07)"
                  : "rgba(255,255,255,0.04)",
                border: comp.isSandboxVR
                  ? "1px solid rgba(245,158,11,0.4)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderTop: `2px solid ${comp.isSandboxVR ? "#f59e0b" : categoryColors[comp.category]}`,
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: comp.isSandboxVR ? "#f59e0b" : categoryColors[comp.category],
                  marginBottom: 10,
                  opacity: 0.9,
                }}
              >
                {comp.isSandboxVR ? "★ Sandbox VR" : comp.category}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: comp.isSandboxVR ? "#f8d57e" : "#fff",
                  marginBottom: 8,
                }}
              >
                {comp.name}
              </h3>

              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                {comp.tagline}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                {[
                  { label: "Price / Person", val: comp.price },
                  { label: "IP Count", val: comp.ip },
                  { label: "Franchises", val: comp.franchises },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {m.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 13,
                        color: comp.isSandboxVR ? "#f8d57e" : "rgba(255,255,255,0.85)",
                        fontWeight: comp.isSandboxVR ? 600 : 500,
                      }}
                    >
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {comp.economics}
              </div>
            </div>
          ))}
        </div>

        {/* Summary callout */}
        <div
          className="fade-in"
          style={{
            marginTop: 40,
            padding: "28px 36px",
            background: "rgba(59,130,246,0.07)",
            borderLeft: "3px solid var(--blue)",
          }}
        >
          <strong style={{ color: "#ffffff", fontSize: 15 }}>Sandbox VR vs. the field: </strong>
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
            Sandbox VR leads the LBE benchmark on every key dimension: 41% EBITDA margin vs. a 19% landscape average,
            1.4-year payback vs. 2.1 to 5 years for peers, and a 4.94/5.0 average rating across 45 locations.
            No other concept pairs proprietary IP, $44 avg session pricing ($49 peak on weekends), and category-leading repeat demand.
          </span>
        </div>
      </div>
    </section>
  );
}
