import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "NomadMD",
    image: "/nomad.svg",
    tags: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "AWS"],
    link: "https://www.nomadmd.app",
    description:
      "A HIPAA-compliant dispatch platform with integrated payment processing (Apple Pay, Finix) serving large-scale clients generating over $300M in annual revenue.",
  },
  {
    title: "NomadMD Marketplace",
    image: "/nomad-cart.svg",
    tags: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "AWS"],
    link: "https://demo.nomadmd.app/",
    description:
      "A white-labeled marketplace for client engagement and use, enabling payment features, purchasing memberships, booking appointments, and conducting transactions.",
  },
  {
    title: "Miter",
    image: "/miter.svg",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    link: "https://www.miter.com/",
    description:
      "An enhanced payroll, time-tracking, and compliance software for construction contractors, supporting thousands of employees nationwide",
  },
  {
    title: "Khanetic Solutions",
    image: "/khanetic.svg",
    tags: ["Next.js", "Node.js", "AWS", "Wordpress"],
    link: "https://www.khaneticsolutions.com/",
    description:
      "Co-founded a web design and development company specializing in creating high-performance websites for small businesses, increasing client revenues by up to 40%.",
  },
];

const Work: React.FC = () => (
  <section
    id="work"
    className="max-w-7xl mx-auto py-10 flex flex-col items-center justify-center px-3"
  >
    <div className="flex items-center justify-between mb-8 w-full">
      <h2 className="text-3xl md:text-4xl font-semibold">Work Experience</h2>
      {/* <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition rounded-full px-4 py-2 text-sm font-medium">
        All Works <span className="ml-1">→</span>
      </button> */}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full place-items-center md:place-items-stretch">
      {projects.map((project) => (
        <a
          href={project.link}
          key={project.title}
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded-3xl overflow-hidden w-full max-h-[420px] max-w-[600px] flex items-center justify-center group cursor-pointer border-1 border-gray-300 bg-gray-50"
          style={{
            aspectRatio: "1.6/1",
          }}
        >
          {/* <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-40 transition" /> */}
          <ArrowUpRightIcon className="w-8 h-8 z-10 text-gray-500 absolute top-5 right-5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 top-0 z-10 p-6 w-full flex flex-col items-center justify-end h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-[80%] mb-4 lg:mb-12"
              style={{ zIndex: 1 }}
            />
            <div className="h-20 group-hover:h-35 transition-all duration-300">
              <h3 className=" text-xl font-semibold drop-shadow">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-transparent border`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {project.description}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Work;
