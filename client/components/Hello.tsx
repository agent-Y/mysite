"use client";

import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Hello() {
 const router = useRouter();
 return (
  <div className="h-screen w-screen flex items-center justify-center flex-col relative">
   <motion.h1
    className="text-6xl font-bold text-white"
    initial={{ scale: 0.5 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
   >
    Welcome
   </motion.h1>
   <motion.p
    className="text-2xl text-white font-light dark:text-gray-300 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
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
