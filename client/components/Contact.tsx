"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/common/forms/ContactForm";
import { useState } from "react";
import SuccessModal from "@/components/common/modals/SuccessModal";

import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Contact Page - yuki hashimoto",
};

export default function Contact() {
 const [success, setSuccess] = useState(false);

 const handleCloseModal = () => {
  setSuccess(false);
 };
 return (
  <div className="h-screen items-center w-screen flex">
   <div className="p-4 mx-auto w-full  max-w-6xl">
    <div className="py-4 ">
     <motion.h1
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      className="text-6xl font-bold text-white "
     >
      Contact
     </motion.h1>
    </div>
    {success ? (
     <SuccessModal handleCloseModal={handleCloseModal} />
    ) : (
     <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="rounded-lg bg-white p-4 mx-auto max-w-4xl  "
     >
      <ContactForm setSuccess={setSuccess} />
     </motion.div>
    )}
   </div>
  </div>
 );
}
