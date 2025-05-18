import React from "react";
import {
  ArrowsPointingInIcon,
  BanknotesIcon,
  NumberedListIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/24/outline";

interface ProjectProps {
  title: string;
  description: string;
  techs: string[];
  icon: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  techs,
  icon,
}) => {
  return (
    <div
      className={`bg-gray-100 text-gray-600 rounded-2xl h-80 gap-1.5 p-1.5 md:h-90 w-full md:w-[350px] flex flex-col`}
    >
      {/* Header */}
      <div
        className={`flex items-center bg-white justify-between h-13 px-2 py-1 rounded-2xl`}
      >
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {icon}
      </div>
      {/* Description */}
      <div
        className={`rounded-2xl p-2 flex-1 bg-white flex flex-col justify-between`}
      >
        <p className="text-md mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 h-18">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className={`border rounded-lg px-3 py-1 text-sm font-medium h-7.5`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Images */}
      {/* <div className="flex gap-2 mb-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Project screenshot ${idx + 1}`}
            className="w-1/3 h-20 object-cover rounded-lg border-2 border-white"
          />
        ))}
      </div> */}
      {/* Tech Chips */}
    </div>
  );
};

const projectsData = [
  {
    title: "Ultimate Duel",
    description:
      "A real-time 1v1 online game where you can compete with your friends in battles and see who the Ultimate Duelist is!",
    techs: ["React", "Node.js", "Socket.io"],
    icon: (
      <ArrowsPointingInIcon className="w-8 h-8 text-purple-600 rounded-lg p-1 bg-purple-200" />
    ),
  },
  {
    title: "My Summary",
    description:
      "A single page application that displays a summary of news, social network feeds, weather, commute, and real-time stock prices.",
    techs: ["React", "Material-UI"],
    icon: (
      <NumberedListIcon className="w-8 h-8 text-blue-600 rounded-lg p-1 bg-blue-200" />
    ),
  },
  {
    title: "No Cap Shop",
    description:
      "Inspired by Nixon Watches' website, an e-commerce website for keyboards and key caps.",
    techs: ["React", "Redux", "Node.js", "MongoDB"],
    icon: (
      <ArrowDownOnSquareIcon className="w-8 h-8 text-gray-600 rounded-lg p-1 bg-gray-200" />
    ),
  },
  {
    title: "BasePay",
    description: `A community-driven platform where users anonymously share wages and employer reviews, viewable on a Google Map filtered by location.`,
    techs: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "AWS"],
    icon: (
      <BanknotesIcon className="w-8 h-8 text-pink-600 rounded-lg p-1 bg-pink-200" />
    ),
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-10 flex flex-col px-3"
    >
      <h2 className="text-3xl md:text-4xl font-semibold">Personal Projects</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4 py-8">
        {projectsData.map((project, idx) => (
          <Project key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
