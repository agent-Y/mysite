"use client";
import { motion } from "framer-motion";
import { MdOutlineWork } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";
import { BsLaptopFill } from "react-icons/bs";
const items = [
 {
  language: "NEXT.JS TypeScript RadixUI Python ChatGPT API",
  title: "ChatGPT APIを利用したビデオの文字起こし&翻訳ツール",
  industry: "",
 },
 {
  language:
   "React Next.JS TypeScript TailwindCSS Django restframework Nginx PostgreSQL Redis",
  title: "教育支援システム",
  industry: "教育",
 },
 {
  language:
   "React Next.JS TypeScript TailwindCSS Django restframework Nginx PostgreSQL",
  title: "レビューサイト",
  industry: "飲食",
 },
 {
  language: "Python Django HTML CSS JavaScript MYSQL Heroku",
  title: "旅のしおり作成システム",
  industry: "旅行",
 },
 {
  language: "Python GoogleAppScript",
  title: "在庫管理システム",
  industry: "アパレル",
 },
 {
  language: "Python Django HTML CSS JavaScript MYSQL Heroku",
  title: "ECサイト",
  industry: "アパレル",
 },
];

export default function About() {
 return (
  <div className="h-screen w-screen flex items-center overflow-auto">
   <div className="mx-auto w-full max-w-6xl z-20 px-2">
    <motion.h1
     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
     className="text-4xl md:text-6xl font-bold text-white "
    >
     Current Works
    </motion.h1>
    <p className="text-xl font-light text-gray ">
     業務フローの自動化、Webサービスの開発、HP作成など
    </p>
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ delay: 0.5, duration: 1 }}
     className="flex flex-col gap-8 md:flex-row h-full py-8"
    >
     <div className=" flex items-center w-full">
      {/* <button className="absolute left-0  rounded-full bg-white/70 border shadow-2xl">
       <MdOutlinePlayArrow className="text-primary h-8 w-8 rotate-180" />
      </button>
      <button className="absolute right-0 rounded-full bg-white/70 border shadow-2xl">
       <MdOutlinePlayArrow className="h-8 w-8 text-primary" />
      </button> */}
      <ul className="md:grid flex md:grid-cols-3 gap-4 w-full snap-x overflow-x-auto hidden-scrollbar">
       {items.map((item, index) => (
        <li
         key={index}
         className=" shrink-0 snap-center w-80 md:w-full rounded-md p-4 md:p-4 bg-secondary/60 text-white shadow-xl flex-none "
        >
         <div className="mb-2">
          <p className="flex items-center font-bold">
           <MdOutlineWork className="mr-2" />
           案件名
          </p>
          <p className="">{item.title}</p>
         </div>
         {item.industry && (
          <div className="mb-2">
           <p className=" font-bold flex">
            <BiSolidBusiness className="mr-2" />
            業種
           </p>
           <p className="">{item.industry}</p>
          </div>
         )}

         <div className="mb-2 ">
          <p className=" font-bold flex items-center">
           <BsLaptopFill className="mr-2 " color="white" />
           開発言語、フレームワーク
          </p>
          <p className=" ">{item.language}</p>
         </div>
        </li>
       ))}
      </ul>
     </div>
    </motion.div>
   </div>
  </div>
 );
}
