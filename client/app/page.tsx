"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Skill from "@/components/layout/Skill";
import Apps from "@/components/Apps";
import Navigation from "@/components/layout/Navigation";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hello", component: <Hero />, label: "Hello" },
  { id: "about", component: <About />, label: "About" },
  { id: "skills", component: <Skill />, label: "Skills" },
  { id: "apps", component: <Apps />, label: "Apps" },
  { id: "contact", component: <Contact />, label: "Contact" },
];

// セクションコンポーネント
const Section = ({
  id,
  children,
  onInView,
}: {
  id: string;
  children: React.ReactNode;
  onInView: (id: string) => void;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      onInView(id);
    }
  }, [inView, id, onInView]);

  return (
    <div
      ref={ref}
      id={id}
      className="shrink-0 snap-always snap-start h-screen relative"
    >
      {children}
    </div>
  );
};

// メインコンポーネント
export default function Home() {
  const [currentSection, setCurrentSection] = useState("hello");

  // セクションが表示されたときの処理
  const handleSectionInView = (sectionId: string) => {
    setCurrentSection(sectionId);
    history.replaceState(null, "", `#${sectionId}`);
  };

  // ナビゲーションがクリックされたときの処理
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  };

  // URLのハッシュが変更されたときの処理
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setCurrentSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // 初期表示時のハッシュを処理
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <Navigation currentSection={currentSection} onNavClick={handleNavClick} />
      {SECTIONS.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          onInView={handleSectionInView}
        >
          {section.component}
        </Section>
      ))}
    </div>
  );
}
