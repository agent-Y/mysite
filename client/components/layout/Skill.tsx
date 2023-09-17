"use client";
import { motion } from "framer-motion";

const items = [
 {
  name: "HTML・CSS",
  percent: 80,
 },
 {
  name: "Tailwind",
  percent: 80,
 },
 {
  name: "JavaScript・TypeScript",
  percent: 80,
 },

 {
  name: "React",
  percent: 80,
 },
 {
  name: "Next.JS",
  percent: 80,
 },
 {
  name: "Python",
  percent: 90,
 },
 {
  name: "Django・Django restframework",
  percent: 90,
 },
];

export default function Skill() {
 return (
  <div className="h-screen items-center w-screen flex ">
   <div className="p-4 mx-auto w-full max-w-6xl">
    <div className="flex flex-col gap-8 md:flex-row ">
     <div className="py-4 w-full">
      <motion.h1
       whileInView={{ x: [-100, 0], opacity: [0, 1] }}
       className="text-6xl font-bold text-white "
      >
       My Skills
      </motion.h1>
      <motion.p
       className="text-2xl font-light dark:text-gray"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.5, duration: 1 }}
      >
       業務フローの自動化、Webサービスの開発など
      </motion.p>
     </div>
     <div className="w-full ">
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ delay: 0.5, duration: 1 }}
       className="flex items-center gap-4"
      >
       <ul className="flex flex-col w-full gap-5">
        {items.map((item, index) => (
         <li key={index} className="">
          <h5 className="text-white md:text-xl font-bold">{item.name}</h5>
          <div className="relative h-4 rounded-lg border bg-white w-full">
           <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${item.percent}%` }}
            transition={{ duration: 1.0 }}
            className="absolute left-0 h-full rounded-lg bg-secondary"
           />
          </div>
         </li>
        ))}
       </ul>
      </motion.div>
     </div>
    </div>
   </div>
  </div>
 );
}
