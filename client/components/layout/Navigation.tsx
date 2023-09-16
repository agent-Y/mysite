"use client";

import Link from "next/link";

import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";

export default function Navigation() {
 // メニューの開閉に関するステート
 const [isOpen, setIsOpen] = useState(false);

 // メニューの開閉を切り替える関数
 const toggleMenu = () => {
  setIsOpen(!isOpen);
 };

 return (
  <nav className="fixed top-0 left-0 px-2 md:px-12 py-4 w-full flex items-center justify-between z-40">
   <Link className="text-xl font-semibold text-secondary" href={"/"}>
    Yuki Hashimoto
   </Link>

   <button onClick={toggleMenu}>
    <HamburgerIcon isOpen={isOpen} />
   </button>
   <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
  </nav>
 );
}
