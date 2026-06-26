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
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative">
      <div className="hidden md:flex justify-around items-center h-16 bg-[#222E36] w-md mx-auto rounded-full my-5 font-bold text-white">
        {Navlinks.map((nav) => (
          <Link key={nav.href} href={nav.href}>
            {nav.name}
          </Link>
        ))}
      </div>

      {isOpen == false &&
        <div className="flex md:hidden w-full justify-end py-7 px-7 text-white/80">
        <Menu
          size={30}
          className="cursor-pointe fixed z-9999 bg-black"
          onClick={() => setIsOpen(true)}
        />
      </div>
      }
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-80 w-full bg-black shadow-lg transform transition-transform duration-300 z-9999
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold ml-32">Menu</h2>
          {isOpen==true && <X className="cursor-pointer mr-5 text-white/80" onClick={() => setIsOpen(false)} />}
        </div>

        <div className="flex flex-col items-center justify-center">
          {Navlinks.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className="px-4 py-3 hover:bg-gray-100 font-medium"
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
