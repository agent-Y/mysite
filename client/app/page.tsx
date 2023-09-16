import Hello from "@/components/Hello";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Skill from "@/components/layout/Skill";

export default function Home() {
 return (
  <div className="relative h-screen w-screen">
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
   <div id="contact" className="shrink-0 snap-always snap-start">
    <Contact />
   </div>
  </div>
 );
}
