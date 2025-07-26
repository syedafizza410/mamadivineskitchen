'use client';

import Image from "next/image";
import { useState } from "react";
import img1 from "../../../public/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-red-900 text-white text-sm px-6 py-2 flex justify-between items-center max-[340px]:hidden">
        <div className="flex items-center space-x-4 text-xs sm:text-sm lg:text-base">
          <span>📞 +923233956495</span>
          <span>📧 mamadivineskitchen@gmail.com</span>
        </div>
      </div>

      <div className="bg-[#FAFAF2] px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <Image src={img1} alt="Logo" width={60} height={1} />
          <h1 className="text-2xl md:text-3xl font-serif font-semibold text-red-900">Mama&apos;s Kitchen</h1>
        </div>

        <nav className="hidden md:flex space-x-3 font-medium text-gray-700">
  {[
    { label: "Home", href: "\\" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Contact", href: "#contact" },
  ].map((link) => (
    <a
      key={link.label}
      href={link.href}
      className="text-red-900 px-4 py-1 rounded-full hover:bg-[#EAEFDE] transition-all duration-200"
    >
      {link.label}
    </a>
  ))}
</nav>

        <div className="hidden md:block">
          <button
  onClick={() => {
    const section = document.getElementById("menu");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="text-black border border-red-900 px-5 py-1 rounded-full hover:bg-red-900 hover:text-white transition-all"
>
  Order Now
</button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-red-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#FAFAF2] shadow-md px-6 py-4 flex flex-col space-y-3 z-10 md:hidden">
            <div className="flex flex-col text-sm text-red-900 space-y-4 max-[340px]:block hidden">
              <span>📞 +923233956495</span>
              <span>📧 mamadivineskitchen@gmail.com</span>
            </div>

            <a className="bg-[#EAEFDE] text-red-900 px-3 py-2 rounded-full" href="\">Home</a>
            <a href="#about" className="text-red-900">About</a>
            <a href="#menu" className="text-red-900">Menu</a>
            <a href="#contact" className="text-red-900">Contact</a>
            
            <button
  onClick={() => {
    const section = document.getElementById("menu");
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  }}
  className="text-black border border-red-900 px-5 py-2 rounded-full hover:bg-red-900 hover:text-white transition-all"
>
  Order Now
</button>
          </div>
        )}
      </div>
    </div>
  );
}
