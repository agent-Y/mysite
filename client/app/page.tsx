import Hello from "@/components/Hello";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Skill from "@/components/layout/Skill";
import Portfolio from "@/components/Portfolio";

export default function Home() {
 return (
  <div className="h-screen w-screen snap-mandatory snap-y overflow-scroll relative">
   <div id="hello" className="shrink-0 snap-always snap-start">
    <Hello />
   </div>
   <div id="about" className="shrink-0 snap-always snap-start">
    <About />
   </div>
   <div id="skills" className="shrink-0 snap-always snap-start">
    <Skill />
   </div>
   <div id="works" className="shrink-0 snap-always snap-start">
    <Work />
   </div>
   <div id="portfolio" className="shrink-0 snap-always snap-start">
    <Portfolio />
   </div>
   <div id="contact" className="shrink-0 snap-always snap-start">
    <Contact />
   </div>
  </div>
 );
}
