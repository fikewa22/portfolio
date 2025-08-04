import React from "react";
import img2 from "../assets/img2.png";

const Home = () => {
  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const downloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement("a");
    link.href = "/Fikewa_Olatunji_Resume.pdf"; // Update this path when you provide the CV file
    link.download = "Fikewa_Olatunji_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero section" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 animate-slide-up">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-white/90 text-sm font-medium">
                  Available for new opportunities
                </span>
              </div>

              <h6 className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                Hello, I'm
              </h6>
              <h1 className="font-bold md:text-7xl text-5xl mb-6 leading-tight">
                <span className="text-white">Fikewa</span>
                <br />
                <span className="text-white">Olatunji</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Full-Stack Software Engineer with expertise in both frontend and
              backend development. I build scalable web applications using
              modern technologies like React, Next.js, Node.js, and Python.
              Passionate about creating robust, user-friendly solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <button
                onClick={() => scrollToSection("about", 100)}
                className="btn-primary"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection("projects", 50)}
                className="btn-secondary"
              >
                View Projects
              </button>
              <button
                onClick={downloadCV}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-slate-700/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full opacity-20 animate-bounce"></div>
              <div
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full opacity-20 animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src={img2}
                  alt="Fikewa Olatunji"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white/20 float"
                />

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-slate-800">
                      Full-Stack
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-slate-800">
                      Next.js
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-slate-800">
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
