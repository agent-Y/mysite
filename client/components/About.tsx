"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import type { Metadata } from "next";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - yuki hashimoto"
};

export default function About() {
  return (
    <div className=" p-4 h-screen w-screen flex items-center">
      <div className="mx-auto max-w-6xl w-full ">
        <motion.h1
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          className="text-4xl font-bold text-white pb-4"
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
              src="/images/profile.jpg"
              width={100}
              height={100}
              alt="profile image"
              className="rounded-full h-18 w-18 object-cover"
            />
          </div>
          <div className="">
            <p className="text-sm md:text-base text-white font-light whitespace-pre-line first-letter:text-2xl first-letter:font-extrabold">
              {`My name is Yuki. I am a freelance full-stack developer based in Osaka with a passion for building digital services and products. I have a knack for all things related to launching products, from planning and designing to solving real-life problems with code.
       I started studying programming to automate inventory management for a used clothing sales business I was involved in during my university days. I even developed and sold tools for that
       purpose. When I'm not online, I enjoy making my own music and DJing.`}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <h2 className="text-xl text-white font-semibold">On the Web</h2>
              <Link
                target="_blank"
                href="https://github.com/agent-y"
                className="text-white flex items-center pl-8 gap-2"
              >
                <AiFillGithub className="md:h-10 md:w-10 h-6 w-6" />
                <span className="text-sm md:text-base">Github</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <h2 className="text-xl text-white font-semibold">Likes</h2>
              <p className="text-white text-sm pl-8">
                Tennis, Fishing, Traveling, Camping, DTM
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
