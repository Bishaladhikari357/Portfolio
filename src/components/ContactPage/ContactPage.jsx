"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();

  // 👇 added loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bebxxqs",
        "template_biezc9m",
        form.current,
        "JdHeYzQ1nJcYNL86r"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error);
        }
      );
  };

  // =========================
  // ✅ SKELETON UI (NO CHANGE)
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1220] text-white px-6 md:px-16 py-12 animate-pulse">

        {/* HEADER SKELETON */}
        <div className="h-10 w-72 bg-gray-700 rounded mb-10"></div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM SKELETON */}
          <div className="bg-[#111827] p-8 rounded-2xl space-y-5">

            <div className="h-6 w-40 bg-gray-700 rounded"></div>

            <div className="h-12 bg-gray-700 rounded"></div>
            <div className="h-12 bg-gray-700 rounded"></div>
            <div className="h-32 bg-gray-700 rounded"></div>

            <div className="h-12 bg-gray-700 rounded"></div>

          </div>

          {/* MAP SKELETON */}
          <div className="h-[400px] md:h-[500px] bg-gray-700 rounded-2xl"></div>

        </div>
      </div>
    );
  }

  // =========================
  // ORIGINAL UI (UNCHANGED)
  // =========================
  return (
    <div className="mb-10 min-h-screen bg-[#0b1220] text-white px-6 md:px-16 py-12">
      
      {/* HEADER */}
      <div className="max-w-6xl mb-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          Let’s <span className="text-green-400">Connect.</span>
        </h1>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - FORM */}
        <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:outline-none focus:border-green-400"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:outline-none focus:border-green-400"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:outline-none focus:border-green-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-3 rounded-lg hover:bg-green-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Belbas,Nepal&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}