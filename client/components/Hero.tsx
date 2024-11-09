"use client";

import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import Typewriter from "typewriter-effect";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello - yuki hashimoto"
};

export default function Hero() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col relative">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Welcome").start();
          }}
        />
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-white font-light dark:text-gray-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 3.5 }}
      >
        This is Yuki Hashimoto&apos;s portfolio site
      </motion.p>
      <motion.button
        onClick={() => router.push("/#about")}
        animate={{ y: [-10, 0, -10] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="absolute bottom-4 p-4 flex-col"
      >
        <p className="text-white text-xs">SCROLL</p>
        <MdOutlineKeyboardDoubleArrowDown className=" text-white h-5 w-5 mx-auto" />
      </motion.button>
    </div>
  );
}
