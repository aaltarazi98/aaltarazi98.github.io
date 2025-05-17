import React from "react";

const steps = [
  {
    title: "NomadMD",
    role: "Software Engineer",
    bulletPoints: [
      "Development of HIPAA-compliant dispatch platform with integrated payments, serving $300M+ revenue clients",
      "Built white-labeled marketplace enabling payments, memberships, and appointment booking",
      "Architected microservices using AWS Lambda, Next.js frontend, and GraphQL/PostgreSQL backend",
      "Implemented OAuth, pricing algorithms, and third-party integrations improving efficiency by 30%",
    ],
  },
  {
    title: "Miter",
    role: "Product Engineer",
    bulletPoints: [
      "Development of payroll and time-tracking software for construction contractors, supporting thousands of employees nationwide",
      "Built full-stack features including document management with AWS S3, task scheduling system, and mobile apps",
      "Developed React/Material UI frontend and Node.js/MongoDB backend with RESTful APIs",
    ],
  },
  {
    title: "Khanetic Solutions",
    role: "Software Engineer",
    bulletPoints: [
      "Co-founded web design company, built high-performance sites increasing client revenue by 40%",
      "Led development teams and mentored junior engineers on multiple projects",
      "Implemented SEO strategies achieving top Google rankings and traffic growth",
      "Built fast websites (<1s load times) using Next.js, AWS S3, and CloudFront",
    ],
  },
];

const Resume: React.FC = () => {
  return (
    <section
      id="resume"
      className="relative w-full min-h-screen bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white flex items-center justify-center px-4 py-16 md:py-32 overflow-hidden"
    >
      {/* Background texture layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'url("https://grainy-gradients.vercel.app/noise.svg") repeat',
          opacity: 0.15,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
          mixBlendMode: "overlay",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.1,
          mixBlendMode: "overlay",
        }}
      />
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        {/* Left: Small Section Title */}
        <div className="md:w-1/3 mb-8 md:mb-0 flex items-start">
          <h3 className="text-lg text-gray-400 font-medium md:mt-2">Resume</h3>
        </div>
        {/* Right: Main Heading and Steps */}
        <div className="md:w-200 flex flex-col gap-12">
          {/* Main Heading */}
          <div className="mb-8">
            <span className="text-2xl md:text-4xl font-medium">
              Passionate about optimization and efficiency.{" "}
              <span className="text-2xl md:text-4xl text-gray-400 font-normal text-2xl md:text-3xl mt-2">
                From system design to deployment, I build scalable and efficient
                systems.
              </span>
            </span>
          </div>
          {/* Steps Grid */}
          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="w-100 sm:self-start sm:even:self-end">
                <div className={`flex flex-col items-start gap-6`}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#202020] flex items-center justify-center text-2xl text-[#6b7075]">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      {step.title}
                      <span className="text-gray-400 font-normal">
                        : {step.role}
                      </span>
                    </h4>
                    <ul className="text-gray-400 text-sm list-disc pl-4">
                      {step.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-px bg-[#4b4e53] my-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
