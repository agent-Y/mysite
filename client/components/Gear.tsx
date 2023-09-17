"use client";
import { motion } from "framer-motion";

export default function Gear() {
 return (
  <div className="h-screen w-screen">
   <motion.h1
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    className="text-4xl md:text-6xl font-bold tex-white"
   >
    My Gears
   </motion.h1>
  </div>
 );
}
