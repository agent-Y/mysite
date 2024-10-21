"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Skill from "@/components/layout/Skill";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/layout/Navigation";
import TabContext from "@/context/TabContext";
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
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("");

  // フックをトップレベルで呼び出し
  // const inViewRefs = sections.map(() => useInView({ threshold: 1 }));

  // useEffect(() => {
  //   const index = inViewRefs.findIndex((ref) => ref[1].inView); // ref[1]がinViewの状態
  //   if (index >= 0) {
  //     const newTab = sections[index].id;
  //     setCurrentTab(newTab);
  //     router.push(`/#${newTab}`);
  //   }
  // }, [inViewRefs, router]); // routerを依存配列に追加

  return (
    // <TabContext.Provider value={{ currentTab }}>
    <div className="relative h-screen w-screen">
      <Navigation />
      {sections.map((section, index) => (
        <div
          key={section.id}
          // ref={inViewRefs[index][0]} // ref[0]が要素の参照
          id={section.id}
          className="shrink-0 snap-always snap-start h-screen relative"
        >
          {section.component}
        </div>
      ))}
    </div>
    // </TabContext.Provider>
  );
}
