"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";

type NavLink = {
  url: string;
  title: string;
};

type NavbarProps = {
  variant?: "default" | "transparent" | "minimal";
};

const navLinks: NavLink[] = [
  { title: "Dlaczego my", url: "#dlaczego-my" },
  { title: "Usługi", url: "#uslugi" },
  { title: "Proces", url: "#proces" },
  { title: "FAQ", url: "#faq" },
  { title: "Kontakt", url: "#kontakt" },
];

export function Navbar({ variant = "default" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const bgClass = variant === "transparent"
    ? "bg-transparent absolute top-0 left-0 right-0"
    : variant === "minimal"
    ? "bg-background/80 backdrop-blur-md border-b border-border"
    : "bg-background border-b border-border";

  return (
    <nav className={`z-[999] flex w-full items-center lg:min-h-18 lg:px-[5%] ${bgClass}`}>
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">NK</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-foreground">Niedziela & Kłusek</span>
              <span className="block text-xs text-muted-foreground">Konstrukcje żelbetowe</span>
            </div>
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-foreground"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-foreground"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-foreground"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] bg-background lg:bg-transparent lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map((navLink, index) => (
            <a
              key={index}
              href={navLink.url}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-[1.125rem]/[1.5] text-foreground hover:text-accent transition-colors first:pt-7 lg:px-4 lg:py-2 lg:text-[0.875rem]/[1.5] first:lg:pt-2"
            >
              {navLink.title}
            </a>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 pb-8 lg:ml-4 lg:mt-0 lg:flex-row lg:pb-0">
            <Button size="sm" className="w-full lg:w-auto bg-accent hover:bg-accent/90 text-white">
              <Phone className="w-4 h-4 mr-2" />
              696 092 434
            </Button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
