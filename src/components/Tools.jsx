import React from "react";

const Tools = () => {
  // All tools with colored icons from Devicon CDN
  const allTools = [
    // Frontend Technologies
    {
      id: "javascript",
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: "html5",
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: "css3",
      name: "CSS3",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: "react",
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: "nextjs",
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      id: "typescript",
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      id: "redux",
      name: "Redux",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },

    // Backend Technologies
    {
      id: "nodejs",
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: "python",
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      id: "express",
      name: "Express.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },

    // Databases
    {
      id: "mongodb",
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      id: "firebase",
      name: "Firebase",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },

    // Cloud & DevOps
    {
      id: "aws",
      name: "AWS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      id: "docker",
      name: "Docker",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      id: "kubernetes",
      name: "Kubernetes",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },

    // Version Control
    {
      id: "git",
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      id: "github",
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
        Technologies & Tools
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {allTools.map((tool, index) => (
          <div
            key={tool.id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-blue-200"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 mb-4 bg-gray-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md border border-gray-100">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h6 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {tool.name}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
