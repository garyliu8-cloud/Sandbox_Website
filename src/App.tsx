import { useEffect, useRef, useState } from "react";
import "./index.css";
import HeroSection from "@/sections/HeroSection";
import MarketPositionSection from "@/sections/MarketPositionSection";
import LCLLSection from "@/sections/LCLLSection";
import LBELandscapeSection from "@/sections/LBELandscapeSection";
import CompetitorSection from "@/sections/CompetitorSection";
import FinancialSection from "@/sections/FinancialSection";
import OperationalSection from "@/sections/OperationalSection";
import OperatorInsightsSection from "@/sections/OperatorInsightsSection";
import CustomerSection from "@/sections/CustomerSection";
import RecommendationsSection from "@/sections/RecommendationsSection";
import InvestmentThesisSection from "@/sections/InvestmentThesisSection";
import FooterSection from "@/sections/FooterSection";
import Navbar from "@/components/Navbar";

function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const bars = entry.target.querySelectorAll(".bar-animate");
            bars.forEach((bar) => bar.classList.add("animated"));
            const heightBars = entry.target.querySelectorAll(".bar-height-animate");
            heightBars.forEach((bar) => bar.classList.add("animated"));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("hero");

  useFadeIn();

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = e.clientX + "px";
        cursorDot.current.style.top = e.clientY + "px";
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = e.clientX + "px";
        cursorRing.current.style.top = e.clientY + "px";
      }
    };
    const enterLink = () => cursorRing.current?.classList.add("hovering");
    const leaveLink = () => cursorRing.current?.classList.remove("hovering");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [role=button], .card-hover").forEach((el) => {
      el.addEventListener("mouseenter", enterLink);
      el.addEventListener("mouseleave", leaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section") || "hero");
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="noise-overlay" />
      <div className="cursor-dot" ref={cursorDot} />
      <div className="cursor-ring" ref={cursorRing} />
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <MarketPositionSection />
        <LCLLSection />
        <LBELandscapeSection />
        <CompetitorSection />
        <FinancialSection />
        <OperationalSection />
        <OperatorInsightsSection />
        <CustomerSection />
        <RecommendationsSection />
        <InvestmentThesisSection />
        <FooterSection />
      </main>
    </>
  );
}
