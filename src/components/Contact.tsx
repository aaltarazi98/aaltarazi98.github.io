import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdel-altarazi-60b9aa138/",
  },
  {
    name: "GitHub",
    href: "https://github.com/aaltarazi98",
  },
  {
    name: "Email",
    href: "mailto:altarazidev@gmail.com",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-3">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-1.5 mb-2 w-full bg-gray-100 rounded-xl p-1.5 min-h-14">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-600 bg-white w-full md:w-1/3 rounded-xl p-1 h-full flex items-center justify-between md:justify-center cursor-pointer min-h-11 px-4"
          >
            {link.name}
            <ArrowUpRightIcon className="w-4 h-4 ml-2 text-gray-700" />
          </a>
        ))}
      </div>

      <div className="w-full mx-auto p-1 bg-black rounded-2xl shadow-lg text-white flex flex-col-reverse md:flex-row mb-6">
        <img
          src="/headshot-2.jpg"
          alt="headshot-bw"
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-4xl font-medium mb-6 text-gray-400">
            Contact Me
          </h2>
          <form
            action="https://formsubmit.co/altarazidev@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-vertical"
            />
            <button
              type="submit"
              className="mt-2 p-3 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition cursor-pointer"
            >
              Send Email
            </button>
          </form>
          <p className="text-md text-gray-400 mt-4">
            Email <span className="text-white">altarazidev@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
