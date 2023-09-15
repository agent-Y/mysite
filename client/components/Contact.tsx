"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/common/forms/ContactForm";

export default function Contact() {
 return (
  <div className="h-screen w-full bg-primary">
   <div className="p-4 mx-auto max-w-6xl">
    <div className="py-4">
     <motion.h1
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      className="text-6xl font-bold text-white "
     >
      Contact
     </motion.h1>
    </div>
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     className="rounded-lg bg-white p-4 mx-auto max-w-4xl h-full "
    >
     <ContactForm />
    </motion.div>
   </div>
  </div>
 );
}
