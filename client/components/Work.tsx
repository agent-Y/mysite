"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
 return (
  <div className=" p-4 h-screen bg-primary w-full">
   <div className="mx-auto max-w-6xl">
    <motion.h1
     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
     className="text-6xl font-bold text-white "
    >
     Current Works
    </motion.h1>
    <p className="text-2xl font-light text-gray-300 ">
     I'm a full-stack engineer
    </p>
    <div className="flex flex-col gap-8 md:flex-row h-full py-8">
     <div className="md:w-1/2 ">
      <ul className="flex flex-col gap-8">
       <li className="">
        <div>
         <p className="font-semibold">案件名:</p>
         <p className="text-lg">業務支援システム</p>
        </div>
       </li>
       <li className="">
        <div>
         <p className="font-semibold">案件名:</p>
         <p className="text-lg">業務支援システム</p>
        </div>
       </li>
       <li className="">
        <div>
         <p className="font-semibold">案件名:</p>
         <p className="text-lg">業務支援システム</p>
        </div>
       </li>
       <li className="">
        <div>
         <p className="font-semibold">案件名:</p>
         <p className="text-lg">業務支援システム</p>
        </div>
       </li>
      </ul>
     </div>
     <div className="items-center h-full md:w-1/2">
      <Image
       className="h-full w-full"
       src="/images/work.png"
       alt="work image"
       width={600}
       height={600}
      />
     </div>
    </div>
   </div>
  </div>
 );
}
