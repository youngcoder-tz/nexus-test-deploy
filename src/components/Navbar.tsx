"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IconRenderer } from "./IconRenderer";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar({ nav, config }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-100 px-6 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/60 shadow-2xl backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-transform group-hover:rotate-12">
            <span className="text-xl leading-none font-black text-black">
              K
            </span>
          </div>
          <span className="hidden text-xl font-black tracking-tighter text-white uppercase md:block">
            {config.siteName}
            <span className="text-primary">.</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item: any) => (
            <Link
              key={item.url}
              href={`${item.url}`}
              className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase transition-colors hover:text-primary"
            >
              <IconRenderer name={item.icon} className="h-3.5 w-3.5" />
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[10px] font-black tracking-widest text-black uppercase transition-all hover:bg-primary lg:flex">
            Reservations <ArrowRight className="h-3 w-3" />
          </button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 right-6 left-6 rounded-4xl border border-white/10 bg-black/95 p-8 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {nav.map((item: any) => (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-2xl font-black tracking-tighter transition-colors hover:text-primary"
                >
                  {item.label}
                  <IconRenderer
                    name={item.icon}
                    className="h-6 w-6 text-gray-700"
                  />
                </Link>
              ))}
              <div className="my-4 h-px bg-white/5" />
              <button className="w-full rounded-2xl bg-primary py-5 text-sm font-black tracking-widest text-black uppercase">
                Book Your Experience
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
