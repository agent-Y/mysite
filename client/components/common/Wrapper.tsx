"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const images = [
    "/images/top1.png",
    "/images/top2.png",
    "/images/top3.png",
    "/images/top4.png",
    "/images/top5.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // 次の画像に切り替える
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // 5秒ごとに切り替える

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされたらクリア
    };
  }, [images.length]);

  return (
    <>
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
      <div className="snap-mandatory snap-y overflow-scroll relative  dark:bg-black/80 z-10 w-full h-full ">
        {children}
      </div>
    </>
  );
}
