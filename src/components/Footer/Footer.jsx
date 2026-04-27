"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b  text-gray-400 border-t border-gray-800">
      <div className="max-w-8xl mx-auto px-6 md:px-16 py-12">
        
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          
          {/* LEFT - BRAND */}
          <div>
           {/* Logo */}
        <div className="text-lg sm:text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-green-500">BD</span>
          <span className="text-gray-400">/: </span>
          Bishal.dev()
        </div>
            <p className="text-sm mt-3 text-gray-500">
              Building modern and responsive web experiences.
            </p>
          </div>

          {/* CENTER - NAV */}
          <div className="flex justify-center gap-8 text-sm">
            <Link href="#Hpme" className="relative group">
              <span className="group-hover:text-green-400 transition">
                Home
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
            </Link>

            <Link href="#about" className="relative group">
              <span className="group-hover:text-green-400 transition">
                About
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
            </Link>

            <Link href="#work" className="relative group">
              <span className="group-hover:text-green-400 transition">
                Work
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
            </Link>

            <Link href="#contact" className="relative group">
              <span className="group-hover:text-green-400 transition">
                Contact
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* RIGHT - SOCIAL */}
          <div className="flex justify-center md:justify-end gap-5 text-lg">
            <a
              href="https://github.com/Bishaladhikari357"
              target="_blank"
              className="p-2 rounded-full bg-[#111827] hover:bg-green-400 hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bishal-adhikari-3b3579398/"
              target="_blank"
              className="p-2 rounded-full bg-[#111827] hover:bg-green-400 hover:text-black transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/bishal_adhikari357/"
              target="_blank"
              className="p-2 rounded-full bg-[#111827] hover:bg-green-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* BOTTOM */}
  <div className="flex justify-center items-center text-sm text-gray-500">
  <p>
    © {new Date().getFullYear()} Bishal Adhikari. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
}