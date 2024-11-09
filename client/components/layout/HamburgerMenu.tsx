import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  { label: "Home", section: "hello" },
  { label: "About", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Apps", section: "apps" },
  { label: "Works", section: "works" },
  { label: "Contact", section: "contact" },
];

const HamburgerMenu = ({
  currentSection,
  isOpen,
  toggleMenu,
  onNavClick,
}: {
  currentSection: string;
  isOpen: boolean;
  toggleMenu: () => void;
  onNavClick: (current: string) => void;
}) => {
  // メニューの変化に関する変数
  const menuVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-64 h-full shadow-lg z-50 bg-secondary/90"
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <ul className="flex flex-col items-center justify-center h-full text-white font-bold">
        {items.map(({ label, section }) => (
          <Link
            onClick={() => (toggleMenu(), onNavClick(section))}
            key={label}
            className="w-full py-4 text-center "
            href={`/#${section}`}
          >
            <li
              className={`text-2xl ${currentSection === section ? "text-orange" : ""}`}
            >
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
};

export default HamburgerMenu;
