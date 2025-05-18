import React from "react";
import {
  ArrowTrendingUpIcon,
  Cog8ToothIcon,
  CurrencyDollarIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const metrics = [
  {
    title: "$300M+ Annual Revenue",
    icon: <CurrencyDollarIcon className="text-green-600 text-sm size-6" />,
  },
  {
    title: "+30% Operational Efficiency",
    icon: <Cog8ToothIcon className="text-gray-600 text-sm size-6" />,
  },
  {
    title: "+40% Client Traffic",
    icon: <ArrowTrendingUpIcon className="text-blue-600 text-sm size-6" />,
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto min-h-[80vh] flex flex-col items-center bg-white"
    >
      {/* Headline and Description */}
      <div className="w-full max-w-6xl px-4 flex flex-col md:flex-row justify-between my-20">
        <div className="text-gray-500 text-xl mb-5 w-1/3">About me</div>
        <h2 className="text-3xl md:text-4xl w-full md:w-2/3 font-semibold text-gray-500 leading-tight mb-4">
          I build scalable architectures that optimize performance and deliver
          exceptional user experiences.{" "}
          <span className="text-black">
            Transforming complex requirements into elegant, maintainable code is
            my specialty.
          </span>
        </h2>
      </div>
      {/* Top Cards */}
      <div className="flex flex-row flex-wrap gap-8 mt-20 mb-16 w-full justify-center">
        {/* Award Card */}
        <div className="bg-gray-100 min-h-[350px] rounded-3xl p-8 w-[350px] shadow-md flex flex-col items-start">
          <div className="text-2xl font-bold flex items-center justify-center gap-2">
            <span>500+</span>
            <StarIcon className="text-yellow-500 text-sm size-6 mb-1" />
          </div>
          <h3 className="mt-4 mb-2 text-lg font-semibold">
            Fullstack Developer Roadmap
          </h3>
          <p className="text-gray-500 text-sm">
            Developed a roadmap for aspiring fullstack developers to learn the
            basics of web development. 500 stars on GitHub and counting.
          </p>
          <a
            className="relative w-full group"
            href="https://github.com/aaltarazi98/fullstack-guide-2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.png"
              alt="GitHub"
              className="rounded-xl mt-4 w-40 h-40 mx-auto group-hover:scale-110 transition-all duration-300"
            />
            <ArrowUpRightIcon className="text-white bg-gray-500 opacity-70  md:opacity-0 group-hover:opacity-70 h-8 w-8 rounded-md p-1 text-sm size-6 mb-1 transition-all duration-300 absolute top-0 right-0" />
          </a>
        </div>

        {/* Testimonial Card */}
        <div className="bg-black text-white rounded-3xl min-h-[350px] p-8 w-[350px] shadow-lg flex flex-col justify-between">
          <div>
            <div className="text-gray-400 text-2xl mb-4">{"</>"}</div>
            <p className="text-lg font-medium">
              My expertise goes beyond coding and problem solving. I am
              passionate about collabirating working with clients to fulfill
              their needs
            </p>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bg-gray-100 rounded-3xl min-h-[350px] flex flex-col gap-4 items-center justify-center w-[350px] shadow-md relative p-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl px-6 py-4 shadow-lg flex items-center justify-center gap-2 w-[300px]"
            >
              <span className="text-md font-medium text-center">
                {metric.title}
              </span>
              {metric.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
