import React from "react";
import img1 from "../assets/projects/img1.png";
import img2 from "../assets/projects/img2.png";
import img3 from "../assets/projects/img3.png";
import img4 from "../assets/projects/img4.png";
import img5 from "../assets/projects/img5.png";
import img6 from "../assets/projects/img6.png";
import img7 from "../assets/projects/img7.png";

const Projects = () => {
  const projects = [
    {
      title: "LITTLE LEMON",
      description:
        "A stylish interface for little lemon customers who want to explore the restaurant's menu and make reservations.",
      photo: img1,
      live: "https://little-lemon-fikewa.vercel.app/",
      repo: "https://github.com/fikewa22/little-lemon.git",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      title: "FELIDAE",
      description:
        "A brief exploration of the fascinating world of feline creatures, from domestic cats to their wild counterparts, in a simple and informative format.",
      photo: img2,
      live: "https://felidae.vercel.app/",
      repo: "https://github.com/fikewa22/felidae.git",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "LEAPCURE",
      description:
        "Leapcure connects patients with clinical trials, promoting equitable research through advocacy, bridging gaps in access to potentially life-saving studies.",
      photo: img3,
      live: "https://leapcure.vercel.app/",
      repo: "https://github.com/fikewa22/leapcure.git",
      tech: ["React", "Tailwind", "Node.js"],
    },
    {
      title: "PROMPTOPIA",
      description:
        "Promptopia is an open-source AI tool designed to explore, craft, and share innovative prompts for creative projects worldwide.",
      photo: img4,
      live: "https://promptopia-fikewa.vercel.app/",
      repo: "https://github.com/fikewa22/Promptopia.git",
      tech: ["Next.js", "MongoDB", "Tailwind"],
    },
    {
      title: "HiLink",
      description:
        "Hilink is your adventure companion, offering offline maps and a global journey experience in one app, ensuring you never get lost.",
      photo: img5,
      live: "https://travel-fikewa.vercel.app/",
      repo: "https://github.com/fikewa22/travel.git",
      tech: ["React", "TypeScript", "CSS"],
    },
    {
      title: "AI CUSTOMER SUPPORT BOT",
      description:
        "Built an intelligent support assistant using retrieval-augmented generation (RAG) powered by Google Vertex AI. Integrated document ingestion, semantic search, and conversational flow management.",
      photo: img6, // You'll need to provide a new image
      live: "#", // Add your live link when available
      repo: "https://github.com/fikewa22/ai-customer-support.git", // Add your repo link when available
      tech: ["Next.js", "JavaScript", "Google Vertex AI", "MUI"],
    },
    {
      title: "AI PANTRY TRACKER",
      description:
        "Developed a smart pantry tool that uses image-based object detection to log food items to a Firebase backend. Users can also manually log items for intuitive inventory management.",
      photo: img7, // You'll need to provide a new image
      live: "#", // Add your live link when available
      repo: "https://github.com/fikewa22/pantry-tracker.git", // Add your repo link when available
      tech: ["Next.js", "JavaScript", "Firebase", "MUI"],
    },
  ];

  // Reorder projects for better grid layout
  // With 7 projects in a 3-column grid: 3, 3, 1 (last one in middle)
  const reorderedProjects = [
    projects[0], // LITTLE LEMON
    projects[1], // FELIDAE
    projects[2], // LEAPCURE
    projects[3], // PROMPTOPIA
    projects[4], // HiLink
    projects[5], // AI CUSTOMER SUPPORT BOT
    projects[6], // AI PANTRY TRACKER (will appear in middle of last row)
  ];

  return (
    <div className="projects-section section" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            I have worked on many projects over the course of being a web
            developer. Here are a few of my live, real-world projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reorderedProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card animate-slide-up ${
                // Center the last project in the middle column on large screens
                index === 6 ? "lg:col-start-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.photo}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-800 mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="text-dark-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-slate-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm py-2 px-4 flex-1 text-center"
                  >
                    View Live
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary text-sm py-2 px-4 flex-1 text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
