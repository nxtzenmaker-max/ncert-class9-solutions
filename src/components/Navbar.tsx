import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: "Home", action: () => { scrollTo("hero"); closeMobile(); } },
    { label: "Subjects", action: () => { scrollTo("subjects"); closeMobile(); } },
    { label: "About", action: () => { scrollTo("features"); closeMobile(); } },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md border-b border-gray-100" : ""
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-primary">NCERT</span>
              <span className="text-xs font-semibold text-accent">Class 9</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={link.action}
                whileTap={{ scale: 0.93 }}
                className="text-gray-600 hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg"
        >
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              onClick={link.action}
              whileTap={{ scale: 0.96 }}
              className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            >
              {link.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
