"use client";
import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";
import Hello from "@/components/Hello";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Skill from "@/components/layout/Skill";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/layout/Navigation";
import TabContext from "@/context/TabContext";
const sections = [
 { id: "hello", component: <Hello /> },
 { id: "about", component: <About /> },
 { id: "skills", component: <Skill /> },
 { id: "works", component: <Work /> },
 { id: "contact", component: <Contact /> },
];

export default function Home() {
 const router = useRouter();
 const [currentTab, setCurrentTab] = useState("");
 const inViewRefs = sections.map(() => useInView({ threshold: 1 }));

 useEffect(() => {
  inViewRefs;
  const index = inViewRefs.findIndex((ref) => ref.inView);
  {
   index >= 0 && setCurrentTab(sections[index].id),
    router.push(`/#${currentTab}`);
  }
 }, [inViewRefs]);

 return (
  <TabContext.Provider value={{ currentTab }}>
   <div className="relative h-screen w-screen">
    <Navigation />
    {sections.map((section, index) => (
     <div
      key={section.id}
      ref={inViewRefs[index][0]}
      id={section.id}
      className="shrink-0 snap-always snap-start h-screen"
     >
      {section.component}
     </div>
    ))}
   </div>
  </TabContext.Provider>
 );
}
