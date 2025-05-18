"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

const navigation = [
  { name: "Work", href: "#work" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate scale based on scroll position
  const scale = 1 + scrollY * 0.00025; // Adjust multiplier to control growth rate

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur">
        <nav className="flex items-center justify-between p-4 lg:px-6">
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="-m-1.5 p-1.5"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="text-2xl text-gray-900 hover:text-gray-400 transition-colors duration-200">
                Abdel Altarazi
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="text-sm/6 font-semibold text-gray-900 hover:text-gray-400 scroll-smooth cursor-pointer transition-colors duration-200"
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button
              href="https://www.linkedin.com/in/abdel-altarazi-60b9aa138/"
              variant="outline"
              size="md"
            >
              LinkedIn
            </Button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      onClick={(e) => handleClick(e, item.href)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14 w-full lg:min-h-screen overflow-hidden">
        <div className="lg:py-56 w-full flex flex-col-reverse">
          <div
            className="lg:hidden inset-0 h-100 sm:h-125 md:h-150 w-full"
            style={{
              backgroundImage: "url(/headshot.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 1,
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}
          />
          <div
            className="lg:absolute inset-0 opacity-0 lg:opacity-100"
            style={{
              backgroundImage: "url(/headshot.png)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 1,
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}
          />
          <div className="w-full absolute h-40 lg:h-80 bottom-0 bg-gradient-to-b from-transparent to-white" />
          <div className="p-8 lg:px-30 w-full lg:absolute bottom-0 flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl w-full lg:w-150">
              Software Engineer, solving problems through code
            </h1>
            <div className="w-full lg:w-1/3">
              <p className="mt-8 mb-8 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">
                As a fullstack engineer specializing in performance optimization
                and scalable solutions, I partner with cross-functional teams to
                architect and deliver end-to-end enterprise platforms
              </p>
              <Button href="#contact" variant="outline">
                Email me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
