"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
export default function Hello() {
 const images = [
  "/images/top1.png",
  "/images/top2.png",
  "/images/top3.png",
  "/images/top4.png",
 ];
 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   // 次の画像に切り替える
   setCurrentImageIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
   );
  }, 5000); // 5秒ごとに切り替える（調整可能）

  return () => {
   clearInterval(interval); // コンポーネントがアンマウントされたらクリア
  };
 }, []);
 return (
  <div className="h-screen w-full">
   <AnimatePresence>
    <motion.div
     key={currentImageIndex}
     className="absolute h-full w-full object-cover"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 0.5 }}
    >
     <Image
      src={images[currentImageIndex]}
      alt="bg-image"
      width={600}
      height={600}
      className="w-full h-full object-cover"
     />
    </motion.div>
   </AnimatePresence>
   <div className="absolute bg-white/80 dark:bg-black/80 z-10 w-full h-full flex flex-col items-center justify-center ">
    <motion.h1
     className="text-6xl font-bold dark:text-white"
     initial={{ scale: 0.5 }}
     animate={{ scale: 1 }}
     transition={{ duration: 0.5 }}
    >
     Hello
    </motion.h1>
    <motion.p
     className="text-2xl font-light dark:text-gray-300"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.5, duration: 1 }}
    >
     I'm a full-stack engineer
    </motion.p>
   </div>
  </div>
 );
}
