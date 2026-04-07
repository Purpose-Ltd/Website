"use client";

import React, { useState, useEffect } from "react";
import logo from "../../public/assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // 👈 important (runs on reload)

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Individuals", href: "/#individuals" },
    { name: "Companies", href: "/#companies" },
    { name: "About us ", href: "/about-us" },
  ];

  return (
    <header
      className={` fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 xl:px-12 ${
        scrolled
          ? "xl:py-4 sm:py-3  py-2"
          : "bg-transparent xl:py-9.5 sm:py-5 py-3"
      }`}
    >
      <div
        className={`max-w-360 mx-auto rounded-[20px]  w-full  transition-all duration-300 border   ${
          scrolled || openMenu
            ? "bg-white/20 backdrop-blur-md shadow-sm border-white/40 sm:py-4 xl:py-5 py-3"
            : "bg-transparent border-transparent "
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-12 xl:-mt-2">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Purpose Logo"
                  className="xl:w-42.75 sm:w-35 w-28"
                />
              </Link>

              <nav className="max-xl:hidden">
                <ul className="flex items-center gap-12">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        className="text-[#120C2B] text-2xl font-bold hover:text-[#5323E5] transition-all duration-300"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center md:gap-5 gap-2.5">
              <div className="bg-[linear-gradient(137deg,#FFF_7.48%,rgba(255,255,255,0)_94.06%)] p-0.5 rounded-[25px] w-fit">
                <Link
                  href="/cta"
                  className="rounded-[25px] hover:scale-105 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-5 sm:px-10 xl:px-19.25 xl:py-4 py-2.5 sm:py-3 xl:text-xl text-base sm:text-lg font-semibold leading-3.75 text-white transition-all duration-300 inline-block"
                  style={{
                    background:
                      "linear-gradient(102deg, #3D07E3 10.53%, #5484C6 81.23%)",
                  }}
                >
                  Start Hiring
                </Link>
              </div>

              <button
                className="xl:hidden"
                onClick={() => setOpenMenu(!openMenu)}
              >
                {openMenu ? (
                  <CgClose color="#120C2B" className="size-6 md:size-6.5" />
                ) : (
                  <TbMenu2 color="#120C2B" className="size-6 md:size-6.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Inline mobile menu */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              className="xl:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <ul className="flex flex-col gap-3 text-center py-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="text-[#120C2B] text-xl font-bold hover:text-[#5323E5] transition-all duration-300"
                      href={item.href}
                      onClick={() => setOpenMenu(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
