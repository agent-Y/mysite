"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Skill from "@/components/layout/Skill";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/layout/Navigation";

import Apps from "@/components/Apps";

const sections = [
  { id: "hello", component: <Hero /> },
  { id: "about", component: <About /> },
  { id: "skills", component: <Skill /> },
  { id: "services", component: <Apps /> },
  { id: "works", component: <Works /> },
  { id: "contact", component: <Contact /> },
];

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Navigation />
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          className="shrink-0 snap-always snap-start h-screen relative"
        >
          {section.component}
        </div>
      ))}
    </div>
  );
}
