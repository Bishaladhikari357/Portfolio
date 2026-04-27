"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward, MdOutlineLocalPostOffice } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import Navbar from "../Navbar/Navbar";
import WorkPage from "../WorkPage/WorkPage";
import ContactPage from "../ContactPage/ContactPage";

// Images
import developer from "../../../public/images/developer.png";


// Main Home Page
export default function Home() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    let p = 0;
    let y = 0;
    const interval = setInterval(() => {
      if (p < 6) setProjectsCount(++p);
      if (y < 2) setYearsCount(++y);
      if (p === 6 && y === 2) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    backend: ["Django","Node.js", "Express.js", "MongoDB", "PostgreSQL",, "Firebase"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Docker"],
  };

  return (
    <main className="bg-[#020617] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="mt-10 min-h-screen scroll-mt-17 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-16 py-12 gap-10"
      >
        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[4px] text-gray-200 mb-3">Hello, I'm</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
              Bishal Adhikari
            </span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-green-200 mt-2 font-medium">Creative Web Developer</h2>

          <div className="my-6 text-lg lg:text-xl text-gray-200 font-medium">
            <TypeAnimation
              sequence={[
                "Building modern web experiences....",
                2000,
                "React & Next.js Developer...",
                2000,
                "Turning ideas into reality...",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>

          <p className=" text-justify text-base leading-7 text-gray-200 max-w-[500px] mx-auto lg:mx-0">
            I design and develop responsive, fast, and user-friendly websites using modern technologies. Passionate about clean UI, performance, and creating meaningful digital experiences.
          </p>

          {/* Tech Buttons */}
         <div className="mt-6 flex flex-wrap justify-center sm:justify-center md:justify-start gap-2">
  {["Next.js", "React", "Tailwind CSS", "TypeScript", "Bootstrap"].map((tech) => (
    <button
      key={tech}
      className="
        cursor-pointer
        px-3 py-1 text-sm
        sm:px-4 sm:py-1.5 sm:text-base
        rounded-full border border-gray-300 text-white
        hover:bg-green-600 transition duration-300 hover:scale-105
      "
    >
      {tech}
    </button>
  ))}
</div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
            <button className="cursor-pointer flex items-center gap-2 px-6 py-2 rounded-full bg-green-500 text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/40 transition">
             <a href="#work"> View Projects</a> <MdArrowOutward />
            </button>
            <button className="cursor-pointer flex items-center gap-2 px-6 py-2 rounded-full border border-green-500 text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/40 transition">
             <a href="#contact"> Contact Me </a> <MdOutlineLocalPostOffice />
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center lg:justify-start gap-6 text-2xl">
            <a href="https://github.com/Bishaladhikari357">
            <FaGithub className="cursor-pointer hover:scale-125 hover:text-blue-500 transition" />
            </a>
            <a href="https://www.instagram.com/bishaladhikari859/">
            <FaInstagram className="cursor-pointer hover:scale-125 hover:text-blue-500 transition" />
           </a>
           <a href="https://www.linkedin.com/in/bishal-adhikari-3b3579398/">
           <SlSocialLinkedin className="cursor-pointer hover:scale-125 hover:text-blue-500 transition" />
         </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
   <div className="relative flex items-center justify-center w-full lg:w-1/2">

  {/* Background Circle */}
  <div
  className="hidden md:block absolute 
  w-[250px] h-[240px] lg:w-[473px] lg:h-[473px] 
  bg-slate-400 rounded-full
  top-1/2 left-1/2
  -translate-x-[30%] -translate-y-[50%]"
></div>

  {/* Profile Image Circle */}
  <div
    className="relative 
    w-[249px] h-[248px] lg:w-[408px] lg:h-[408px] 
    rounded-full overflow-hidden shadow-2xl
  ">
    <Image
      src={developer}
      alt="profile"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover hover:scale-105 transition duration-500"
    />
  </div>
</div>
      </section>

      {/* ABOUT */}
    <section
  id="about"
  className="w-full min-h-screen scroll-mt-15 bg-[#020617] py-12 sm:py-16 px-3 sm:px-6 md:px-10 lg:px-16"
>
  <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
    
    {/* LEFT */}
    <div className="space-y-5 sm:space-y-6 text-center md:text-left">
      
      <button className="border border-teal-500 text-teal-400 px-4 py-1 rounded-full text-xs sm:text-sm">
        About me
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Building practical solutions <br className="hidden sm:block" />
        with <span className="text-teal-400">clean code</span>
      </h1>

      <p className="text-justify text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
        I’m a Computer Science student currently pursuing BSc CSIT, with a strong interest in web technologies and real-world problem solving.
      </p>

      <p className="text-justify text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
        My focus is on learning by building experimenting with modern frameworks and improving code quality.
      </p>

      {/* COUNTERS */}
      <div className="flex justify-center md:justify-start gap-8 sm:gap-12 pt-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{projectsCount}+</h2>
          <p className="text-gray-400 text-xs sm:text-sm">Projects completed</p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{yearsCount}+</h2>
          <p className="text-gray-400 text-xs sm:text-sm">Learning & building</p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center md:justify-start">
        <a
          href="#contact"
          className="mt-4 inline-block bg-gray-200 text-black px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-300 transition"
        >
          LET’S WORK TOGETHER →
        </a>
      </div>
    </div>

    {/* RIGHT */}
    <div className="space-y-6">
      
      {/* SKILLS */}
      <div className="bg-[#0f172a] p-5 sm:p-6 rounded-2xl border border-gray-800 shadow-lg">
        <h2 className="text-base sm:text-lg font-semibold mb-4">
          Technical skills
        </h2>

        {/* TABS */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
          {["frontend", "backend", "tools"].map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm cursor-pointer ${
                activeTab === tab
                  ? "bg-teal-500/20 text-teal-400"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          ))}
        </div>

        {/* SKILLS LIST */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
          {skills[activeTab].map((skill, i) => (
            <span
              key={i}
              className="border border-teal-500 text-teal-400 px-3 py-1 rounded-lg text-xs sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* APPROACH */}
      <div className="bg-[#0f172a] p-5 sm:p-6 rounded-2xl border border-gray-800 shadow-lg">
        <h2 className="text-base sm:text-lg font-semibold mb-2">
          My approach
        </h2>
        <p className=" text-justify text-sm sm:text-base text-gray-400 leading-relaxed">
          I value simplicity, clarity, and long-term maintainability. Every project is a chance to improve not just functionality, but also developer experience.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* WORK */}
<section
  id="work"
  className="scroll-mt-18 px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12"
>
  <div className=" mx-auto space-y-8">
    <WorkPage />
  </div>
</section>

      {/* CONTACT */}
      <section
  id="contact"
  className="min-h-screen text-white px-4 sm:px-6 md:px-10 lg:px-16  scroll-mt-18"
>
 

  <div className=" mx-auto">
    <ContactPage />
  </div>
</section>
    </main>
  );
}