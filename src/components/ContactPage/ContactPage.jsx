"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bebxxqs",   // ✅ your SERVICE ID
        "template_biezc9m",  // ✅ your TEMPLATE ID
        form.current,
        "JdHeYzQ1nJcYNL86r"  // ✅ your PUBLIC KEY
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset(); // clear form after submit
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error);
        }
      );
  };

  return (
    <div className="mb-10 min-h-screen bg-[#0b1220] text-white px-6 md:px-16 py-12">
      
      {/* HEADER */}
      <div className="max-w-6xl  mb-10">
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
              name="user_name"   // ✅ MUST match EmailJS template
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:outline-none focus:border-green-400"
              required
            />

            <input
              type="email"
              name="user_email"  // ✅ MUST match template
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 focus:outline-none focus:border-green-400"
              required
            />

            <textarea
              name="message"     // ✅ MUST match template
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