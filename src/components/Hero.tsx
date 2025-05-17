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

  // Calculate scale based on scroll position
  const scale = 1 + scrollY * 0.0001; // Adjust multiplier to control growth rate

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
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="text-sm/6 font-semibold text-gray-900 scroll-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14 lg:px-8 w-full min-h-screen overflow-hidden">
        <div className="py-32 sm:py-48 lg:py-56 w-full">
          <div
            className="absolute inset-0 -z-10 transition-transform duration-300"
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
          <div className="p-8 px-30 rounded-xl w-full absolute bottom-0 flex justify-between items-center bg-gradient-to-b from-transparent to-white">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl w-150">
              Fullstack Engineer, solving problems through code
            </h1>
            <div className="hidden lg:block w-1/3">
              <p className="mt-8 mb-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                As a fullstack engineer with a strong focus on optimization and
                efficiency, I collaborate closely with third party teams and
                work on building complete platforms
              </p>
              <Button href="#contact" variant="outline">
                Email me
              </Button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
