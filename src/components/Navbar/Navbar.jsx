"use client";

import { useEffect, useState } from "react";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home", icon: Home, id: "home" },
    { name: "About", href: "#about", icon: User, id: "about" },
    { name: "Work", href: "#work", icon: Briefcase, id: "work" },
    { name: "Contact", href: "#contact", icon: Mail, id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            current = link.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-white ${
        scrolled
          ? "bg-[#020617]/80 backdrop-blur-md shadow-lg py-4"
          : "bg-[#020611] py-5"
      }`}
    >
      <div className="mb-3 max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className=" text-xl font-bold tracking-wide cursor-pointer">
          <span className="text-green-500">BD</span>
          <span className="text-gray-400">/: </span>
          Bishal.dev()
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ name, href, icon: Icon, id }) => {
            const isActive = active === id;

            return (
              <li key={id}>
                <a
                  href={href}
                  className={`flex items-center gap-2 relative transition ${
                    isActive
                      ? "text-green-400"
                      : "hover:text-green-400"
                  }`}
                >
                  <Icon size={18} />
                  {name}

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-green-400 transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black border-t border-gray-800 ${
          isOpen ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {links.map(({ name, href, icon: Icon, id }) => {
            const isActive = active === id;

            return (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 transition ${
                    isActive
                      ? "text-green-400"
                      : "hover:text-green-400"
                  }`}
                >
                  <Icon size={18} />
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}