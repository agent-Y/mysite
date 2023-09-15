import { motion } from "framer-motion";

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
 // 線の変化に関する変数
 const topLineVariants = {
  open: { rotate: 45, y: 8 },
  closed: { rotate: 0, y: 0 },
 };
 const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
 };
 const bottomLineVariants = {
  open: { rotate: -45, y: -8 },
  closed: { rotate: 0, y: 0 },
 };

 return (
  <svg
   className="w-8 h-8 text-gray-500"
   fill="none"
   strokeLinecap="round"
   strokeLinejoin="round"
   strokeWidth="2"
   viewBox="0 0 24 24"
   stroke="currentColor"
  >
   <motion.path
    variants={topLineVariants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    d="M4 6h16"
   />
   <motion.path
    variants={middleLineVariants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    d="M4 12h16"
   />
   <motion.path
    variants={bottomLineVariants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    d="M4 18h16"
   />
  </svg>
 );
};

export default HamburgerIcon;
