import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  techs: string[];
  bg: string;
  paper: string;
  text: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  images,
  techs,
  bg,
  text,
  paper,
}) => {
  return (
    <div
      className={`${bg} ${text} rounded-2xl h-80 gap-1.5 p-1.5 h-90 w-[350px] max-w-full relative flex flex-col`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between ${paper} h-13 px-2 py-1 rounded-2xl`}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <button className="bg-[#a259ff] p-2 rounded-full shadow-lg hover:bg-[#8e44ec] transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm1 5h-2v6h6v-2h-4V7Z"
            />
          </svg>
        </button>
      </div>
      {/* Description */}
      <div className={`${paper} rounded-2xl p-2 flex-1`}>
        <p className="text-md mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className={`border rounded-lg px-3 py-1 text-sm font-medium`}
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
    images: ["/nomad.svg", "/nomad.svg", "/nomad.svg"],
    techs: ["React", "Node.js", "Socket.io"],
    bg: "bg-black",
    text: "text-white",
    paper: "bg-gradient-to-l from-[#a95a82] to-[#503350]",
  },
  {
    title: "My Summary",
    description:
      "A single page application that displays a summary of news, social network feeds, weather, commute, and ticker prices that you are interested in.",
    images: ["/miter.svg", "/miter.svg", "/miter.svg"],
    techs: ["React", "Node.js", "MongoDB", "AWS"],
    bg: "bg-gray-100",
    text: "text-gray-900",
    paper: "bg-white",
  },
  {
    title: "No Cap Shop",
    description:
      "Inspired by Nixon Watches' website, an e-commerce website for keyboards and key caps.",
    images: ["/khanetic.svg", "/khanetic.svg", "/khanetic.svg"],
    techs: ["Next.js", "Node.js", "AWS", "Wordpress"],
    bg: "bg-gray-100",
    text: "text-gray-900",
    paper: "bg-white",
  },
  {
    title: "BasePay",
    description: `A community-driven platform where users anonymously share wages and employer reviews, viewable on a Google Map filtered by location.`,
    images: ["/nomad.svg", "/nomad.svg", "/nomad.svg"],
    techs: ["Next.js", "GraphQL", "Node.js", "PostgreSQL", "AWS"],
    bg: "bg-gray-100",
    text: "text-gray-900",
    paper: "bg-white",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center p-8">
      {projectsData.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
    </div>
  );
};

export default Projects;
