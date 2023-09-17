"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { Metadata } from "next";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Contact - yuki hashimoto",
};

export default function About() {
 return (
  <div className=" p-4 h-screen w-screen flex items-center">
   <div className="mx-auto max-w-6xl w-full ">
    <motion.h1
     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
     className="text-6xl font-bold text-white pb-4"
    >
     About
    </motion.h1>
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ delay: 0.5, duration: 1 }}
     className="max-w-2xl mx-auto flex flex-col gap-8"
    >
     <div className="rounded-full flex justify-center md:justify-start ">
      <Image
       src="/images/profile.png"
       width={100}
       height={100}
       alt="profile image"
       className="rounded-full h-18 w-18 object-cover"
      />
     </div>
     <div className="">
      <p className="text-white font-light  whitespace-pre-line first-letter:text-2xl">
       My name is Yuki. I am a freelance and a full-stack developer based in
       Osaka with a passion for building digital services/stuff I want. I have a
       knack for all things launching products, from planning and designing all
       the way to solving real-life problems with code.
       <br />I started studying programming to automate the inventory management
       of the used clothing sales, which I had done while in college, and sold
       tools to do so.
       <br /> When not online, I like to make my own music and DJ.
      </p>
     </div>
     <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 1 }}
      className="flex flex-col gap-4"
     >
      <h2 className="text-xl text-white">On the Web</h2>
      <Link
       target="_blank"
       href="https://github.com/agent-y"
       className="text-white flex items-center pl-8"
      >
       <AiFillGithub className="h-10 w-10" />
       <span className="pl-2">Github</span>
      </Link>
     </motion.div>
    </motion.div>
   </div>
  </div>
 );
}
