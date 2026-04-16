"use client";

import { useState } from "react";
import Image from "next/image";
import odgnepal from "../../../public/images/odgnepal.png";
import gym from "../../../public/images/gym.png";
import foodi_express from "../../../public/images/foodi_express.png";

export default function WorkPage() {
  const [showMore, setShowMore] = useState(false);

  const mainProject = {
    title: "ODGNepal E-commerce",
    desc: "Full-stack e-commerce platform with Next.js frontend and Laravel REST API backend.",
    tech: ["Next.js", "Laravel"],
    image: odgnepal,
    liveUrl: "https://www.odgnepal.com/",
  };

  const rightProjects = [
    {
      title: "GYM Website",
      desc: "A gym website showcasing fitness services, trainers, and membership options with booking features.",
      tech: ["Next.js", "Tailwind"],
      liveUrl: "https://www.gymequipementandsupplement.com/",
      image: gym,
    },
    {
      title: "Foodi Express",
      desc: "Food delivery app connecting users with restaurants for browsing menus, ordering, and tracking delivery.",
      tech: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://foodie-express-cyan.vercel.app/",
      image: foodi_express,
    },
  ];

  const moreProjects = [
    {
      title: "Chat App",
      desc: "Real-time chat application using Socket.io.",
      tech: ["Node.js", "Socket.io", "React"],
      liveUrl: "https://your-live-link.com",
      image: odgnepal,
    },
    {
      title: "Task Manager",
      desc: "Manage daily tasks with authentication system.",
      tech: ["MongoDB", "Next.js"],
      liveUrl: "https://your-live-link.com",
      image: odgnepal,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-4 sm:px-6 md:px-16 py-10">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* HEADER */}
          <div>
            <span className="px-4 py-1 text-xs sm:text-sm border border-green-500 rounded-full text-green-400">
              Work
            </span>

            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold">
              Things I've <span className="text-green-400">built</span>
            </h1>

            <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-xl">
              Here are some projects I’ve worked on recently.
            </p>
          </div>

          {/* MAIN PROJECT */}
          <div className="bg-[#111827] rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col">

            <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden">
              <Image
                src={mainProject.image}
                alt={mainProject.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mt-4">
              {mainProject.title}
            </h2>

            <p className="text-justify text-gray-400 mt-2 text-sm sm:text-base">
              {mainProject.desc}
            </p>

            <div className="flex gap-2 sm:gap-3 mt-3 text-xs sm:text-sm text-green-400 flex-wrap">
              {mainProject.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a
              href={mainProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 self-start px-4 py-2 bg-green-500 rounded-lg text-black font-medium text-sm"
            >
              View Live →
            </a>

            {/* BUTTON (desktop only) */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="hidden md:block mt-6 mx-auto bg-green-600 px-4 py-2 rounded-lg text-sm"
            >
              {showMore ? "Show Less" : "More Projects"}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {rightProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col hover:scale-[1.02] transition-transform"
            >

              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="font-semibold text-base sm:text-lg">
                {project.title}
              </h4>

              <p className="text-justify text-gray-400 text-sm mt-2">
                {project.desc}
              </p>

              <div className="flex gap-2 text-xs text-gray-400 mt-3 flex-wrap">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-800 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-green-400 text-sm hover:underline"
              >
                View Live →
              </a>
            </div>
          ))}

          {/* MOBILE BUTTON */}
         <button
  onClick={() => setShowMore(!showMore)}
  className="block md:hidden mx-auto bg-green-600 px-4 py-2 rounded-lg text-sm w-fit"
>
  {showMore ? "Show Less" : "More Projects"}
</button>
        </div>
      </div>

      {/* EXTRA PROJECTS */}
      {showMore && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {moreProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform flex flex-col"
            >

              <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="font-semibold">{project.title}</h4>

              <p className="text-justifytext-gray-400 text-sm mt-2">
                {project.desc}
              </p>

              <div className="flex gap-2 text-xs text-gray-400 mt-3 flex-wrap">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-800 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                className="mt-4 text-green-400 text-sm hover:underline"
              >
                View Live →
              </a>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}