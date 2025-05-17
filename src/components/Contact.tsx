import React, { useState } from "react";
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:altarazidev@gmail.com?subject=Contact from ${encodeURIComponent(
      form.name,
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-3">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-1 mb-2 w-full bg-gray-100 rounded-xl p-1 min-h-14">
        {links.map((link) => (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-600 bg-white w-100 md:w-1/3  rounded-xl p-1 h-full flex items-center justify-between md:justify-center cursor-pointer min-h-11 px-4"
          >
            {link.name}
            <ArrowUpRightIcon className="w-4 h-4 ml-2 text-gray-700" />
          </a>
        ))}
      </div>

      <div className="w-full mx-auto p-1 bg-zinc-900 rounded-2xl shadow-lg text-white flex flex-col-reverse md:flex-row mb-6">
        <img
          src="/headshot-2.jpg"
          alt="headshot-bw"
          className="w-full md:w-1/2 rounded-xl"
        />
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-vertical"
            />
            <button
              type="submit"
              className="mt-2 p-3 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
