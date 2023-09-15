"use client";
import { motion } from "framer-motion";
export default function About() {
 return (
  <div className=" p-4 h-screen bg-primary w-full">
   <div className="mx-auto max-w-6xl">
    <motion.h1
     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
     className="text-6xl font-bold text-white "
    >
     About
    </motion.h1>
    <p className="text-2xl font-light text-gray-300 ">
     I'm a full-stack engineer
    </p>
   </div>
  </div>
 );
}
