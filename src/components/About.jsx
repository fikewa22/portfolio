import React from "react";
import Tools from "./Tools";
import photo1 from "../assets/icons/ruler-pen.png";
import photo2 from "../assets/icons/code.png";
import photo3 from "../assets/icons/git-repo.png";
import photo4 from "../assets/icons/web-scraping.png";

const About = () => {
  const skills = [
    {
      name: "FRONTEND DEVELOPMENT",
      image: photo1,
      description:
        "Building responsive and interactive user interfaces with React, Next.js, and TypeScript",
    },
    {
      name: "BACKEND DEVELOPMENT",
      image: photo2,
      description:
        "Developing scalable APIs and server-side applications with Node.js, Python, and Express.js",
    },
    {
      name: "DATABASE & CLOUD",
      image: photo3,
      description:
        "Working with MongoDB, PostgreSQL, AWS, and cloud infrastructure",
    },
    {
      name: "DEVOPS & TOOLS",
      image: photo4,
      description: "Docker, Kubernetes, CI/CD, Git, and deployment automation",
    },
  ];

  return (
    <div className="about-section section" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Full-Stack Software Engineer with expertise in creating exceptional
            digital experiences
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Main About Content */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-800 gradient-text">
                  Hi, I'm Fikewa Olatunji
                </h3>
              </div>

              <p className="text-lg text-dark-600 leading-relaxed mb-6">
                I am a passionate Full-Stack Software Engineer with expertise in
                both frontend and backend development. I specialize in building
                scalable, user-friendly web applications using modern
                technologies like React, Next.js, Node.js, Python, and
                TypeScript.
              </p>
              <p className="text-lg text-dark-600 leading-relaxed">
                My experience includes developing EMR systems, ride-sharing
                applications, and AI-powered tools. I focus on creating clean,
                maintainable code and exceptional user experiences while staying
                up-to-date with the latest industry trends and best practices.
              </p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="card text-center">
              <div className="text-6xl font-bold gradient-text mb-4">5+</div>
              <h4 className="text-xl font-semibold text-dark-800 mb-4">
                Years of Experience
              </h4>
              <p className="text-dark-600 leading-relaxed">
                Specialized in full-stack development, API integration, and
                building scalable applications with modern technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              My Expertise
            </h3>
            <p className="text-dark-600 max-w-2xl mx-auto">
              I specialize in creating modern, scalable web applications with a
              focus on performance, accessibility, and user experience across
              the entire stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                  <p className="text-sm text-white/80">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <Tools />
      </div>
    </div>
  );
};

export default About;
