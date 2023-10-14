import React from 'react';
import img1 from "../assets/projects/img1.png"
import img2 from "../assets/projects/img2.png"
import img3 from "../assets/projects/img3.png"

const Projects = () => {
  const projects=[
    {
      title: "LITTLE LEMON",
      description: "A stylish interface for little lemon customers who want to explore the restaurant's menu and make reservations.",
      photo: img1,
      live: "https://little-lemon-fikewa.vercel.app/",
      repo: "https://github.com/fikewa22/little-lemon.git"
    },
    {
      title: "FELIDAE",
      description: "A brief exploration of the fascinating world of feline creatures, from domestic cats to their wild counterparts, in a simple and informative format.",
      photo: img2,
      live: "https://felidae.vercel.app/",
      repo: "https://github.com/fikewa22/robofriends.git"
    },
    {
      title: "LEAPCURE",
      description: "A patient-centered platform bridging the gap between clinical trials and those who need them most, fostering equitable research through patient advocacy.",
      photo: img3,
      live: "https://leapcure.vercel.app/",
      repo: "https://github.com/fikewa22/leapcure.git"
    }
  ];
  return (
    <div className='px-7 md:px-10 my-8 mt-24' id='projects'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Featured Projects</h1>
      <p className='text-black my-2 md:w-2/3 leading-[2]'>
I have worked on many projects over the course of being a web developer. Here are a few of my live, real-world projects. </p>
{/* Featured Projects */}
<div className="grid grid-cols-1 md:grid-cols-3 md:gap-[100px] sm:mx-9 my-6 items-center justify-center">
  {
    projects.map((project,index)=> <div
    key={index}
    className="flex flex-col shadow-sm md:h-[450px] md:w-96 md:gap-x-10 bg-white p-4 rounded-xl justify-start items-center my-5"
  >
    <a
      href={project.photo}
      target="_blank"
      rel="noreferrer"
      className="mb-4"
    >
      <img src={project.photo} alt={project.title} />
    </a>
    <h3 className="text-primary font-semibold text-xl">
      {project.title}
    </h3>
    <p className="relative text-black mt-1 leading-[2]">{project.description}</p>
    <div className="flex flex-col md:block justify-start items-center mt-5 md:mt-[350px] md:absolute">
      <a href={project.live}><button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
View Live</button></a>
      <a href={project.repo}><button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-black ">
        Github Repo
      </button></a>
    </div>
    </div> )
  }
</div>
    </div>
  );
};

export default Projects;