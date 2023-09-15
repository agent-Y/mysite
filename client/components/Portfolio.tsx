"use client";
import { motion } from "framer-motion";

const items = [
 {
  language:
   "Django restframework Next.JS TypeScript TailwindCSS PostgreSQL Nginx Gunicorn",
  title: "ジロウタベタイ",
  description: "二郎系ラーメンに特化したレビューサイト",
 },
 {
  language: "Python Django HTML CSS JavaScript",
  title: "業務ページ開発",
  description: "美容",
 },
 {
  language: "Python Django HTML CSS JavaScript",
  title: "業務ページ開発",
  description: "美容",
 },
];

export default function Portfolio() {
 return (
  <div className="h-screen items-center w-screen flex bg-primary">
   <div className="mx-auto w-full max-w-6xl z-20 px-2">
    <motion.h1
     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
     className="text-6xl font-bold text-white"
    >
     Portfolio
    </motion.h1>
    <div className="mx-auto w-full max-w-6xl z-20 px-2">
     <motion.h1
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      className="text-6xl font-bold text-white "
     >
      Current Works
     </motion.h1>
     <p className="text-2xl font-light text-gray-300 ">
      I am a full-stack engineer
     </p>
     <div className="flex flex-col gap-8 md:flex-row h-full py-8">
      <div className=" flex items-center w-full">
       {/* <button className="absolute left-0  rounded-full bg-white/70 border shadow-2xl">
       <MdOutlinePlayArrow className="text-primary h-8 w-8 rotate-180" />
      </button>
      <button className="absolute right-0 rounded-full bg-white/70 border shadow-2xl">
       <MdOutlinePlayArrow className="h-8 w-8 text-primary" />
      </button> */}
       <ul className="md:grid flex md:grid-cols-3 gap-4 w-full overflow-x-scroll">
        {items.map((item, index) => (
         <li
          key={index}
          className="border rounded-md p-4 md:p-4 bg-white text-primary shadow flex-none"
         >
          <div className="mb-2">
           <p className="text-sm font-bold">案件名</p>
           <p className="text-sm">{item.title}</p>
          </div>
          <div className="mb-2">
           <p className="text-sm font-bold">説明</p>
           <p className="text-sm">{item.description}</p>
          </div>
          <div className="mb-2">
           <p className="text-sm font-bold">開発言語、フレームワーク</p>
           <p className="text-sm">{item.language}</p>
          </div>
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
