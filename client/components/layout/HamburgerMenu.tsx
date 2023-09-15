import Link from "next/link";
import { motion } from "framer-motion";

const items = [
 { label: "Home", href: "/#hello" },
 { label: "About", href: "/#about" },
 { label: "Work", href: "/#work" },
 { label: "Contact", href: "/#contact" },
];

const HamburgerMenu = ({
 isOpen,
 toggleMenu,
}: {
 isOpen: boolean;
 toggleMenu: () => void;
}) => {
 // メニューの変化に関する変数
 const menuVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
 };

 return (
  <motion.div
   className="fixed top-0 left-0 w-64 h-full bg-gray-900 shadow-lg z-10 bg-secondary"
   variants={menuVariants}
   initial="closed"
   animate={isOpen ? "open" : "closed"}
   transition={{ ease: "easeInOut", duration: 0.3 }}
  >
   <ul className="flex flex-col items-center justify-center h-full text-white font-bold">
    {items.map(({ label, href }) => (
     <Link
      onClick={toggleMenu}
      key={label}
      className="w-full py-4 text-center"
      href={href}
     >
      <li className="text-2xl">{label}</li>
     </Link>
    ))}
   </ul>
  </motion.div>
 );
};

export default HamburgerMenu;
