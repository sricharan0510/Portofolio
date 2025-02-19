import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>("#home"); // Default active section

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-white/90 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-around h-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-gray-800"
          >
            Sricharan
          </motion.span>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex relative">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(item.href)}
              >
                <motion.a
                  href={item.href}
                  className={`text-gray-600 transition-colors hover:text-blue-600 mb-2 ${
                    active === item.href ? "text-blue-700 font-semibold" : ""
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>

                {/* Expanding Strip */}
                <motion.div
                  className="h-1 bg-blue-600 absolute bottom-0"
                  initial={{ width: 0 }}
                  animate={{
                    width: hovered === item.href ? "100%" : 0,
                    left: hovered === item.href ? "0%" : "50%",
                    right: hovered === item.href ? "0%" : "50%",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-t md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => {
                setIsOpen(false);
                setActive(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
