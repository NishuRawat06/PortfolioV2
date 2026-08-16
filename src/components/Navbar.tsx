"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const Navlinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative z-9999">
      <div className="hidden md:flex justify-around items-center h-16 bg-[#222E36] w-max px-2 mx-auto rounded-full my-5 font-bold text-white">
        {Navlinks.map((nav) => (
          <Link
            key={nav.href}
            href={nav.href}
            target={nav.name === "Resume" ? "_blank" : undefined}
            rel={
              nav.name === "Resume" ? "noopener noreferrer" : undefined
            }
            className="px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-200"
          >
            {nav.name}
          </Link>
        ))}
      </div>

      {!isOpen && (
        <div className="flex md:hidden w-full justify-end py-7 px-7 text-white/80">
          <Menu
            size={30}
            className="cursor-pointer fixed z-[9999] bg-black"
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-auto min-h-80 w-full bg-black shadow-lg transform transition-transform duration-300 z-[9999]
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="font-bold text-white ml-5">Menu</h2>

          <X
            size={28}
            className="cursor-pointer mr-5 text-white/80"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-center justify-center w-full">
          {Navlinks.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              target={nav.name === "Resume" ? "_blank" : undefined}
              rel={
                nav.name === "Resume" ? "noopener noreferrer" : undefined
              }
              className="w-full text-center px-4 py-4 text-white font-medium hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;