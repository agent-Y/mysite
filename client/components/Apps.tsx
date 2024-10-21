"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    name: "セルフィッシュ",
    image: "/images/services/sel-fish.png",
    link: "https://sel-fish.com/",
    description: "バス釣りに特化したポータルサイト",
  },
  {
    name: "ジロウタベタイ",
    image: "/images/services/jiro-tabetai.png",
    link: "https://jiro-tabetai.com/",
    description: "二郎系ラーメンに特化したポータルサイト",
  },
  {
    name: "カダイチャット",
    image: "",
    link: "https://kadaichat.com/",
    description: "講義中にリアルタイムで質問できるアプリ",
  },
];

export default function Apps() {
  return (
    <div className="h-screen w-screen flex items-center overflow-auto">
      <div className="mx-auto w-full max-w-6xl z-20 px-2">
        <motion.h1
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          className="text-4xl md:text-6xl font-bold text-white "
        >
          Apps
        </motion.h1>
        <p className="text-xl font-light text-gray ">
          作成したアプリケーション
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col gap-8 md:flex-row h-full py-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.5, duration: 1 }}
                key={item.name}
                className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg bg-white/70 hover:bg-white/80 transition-all duration-300 ease-in-out"
              >
                <div className="flex flex-col items-center justify-center gap-2 w-full">
                  <div className="p-2 rounded-full bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold">{item.name}</p>
                  </div>
                  <p className="text-sm text-gray">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
