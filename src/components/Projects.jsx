import React from 'react';
import img1 from "../assets/projects/img1.png"
import img2 from "../assets/projects/img2.png"
import img3 from "../assets/projects/img3.png"

const Projects = () => {
  const projects=[
    {
      title: "TWINDER",
      description: "A live Geolocation app for finding tweets and twitter users around you.",
      photo: img1
    },
    {
      title: "LIVENTS",
      description: "A video streaming app with live Geolocation for for streaming events.",
      photo: img2
    },
    {
      title: "MOOVE",
      description: "Mobile app for booking instant pickup and dropoff across major cities.",
      photo: img3
    },
  ];
  return (
    <div className='px-7 md:px-10 my-8 ' id='projects'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Featured Projects</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>
I have worked on many projects over the course of being a web developer. Here are a few of my live, real-world projects. </p>
{/* Featured Projects */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
  {
    projects.map((project,index)=> <div
    key={index}
    className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
  >
    <a
      href={project.photo}
      target="_blank"
      rel="noreferrer"
      className="mb-4"
    >
      <img src={project.photo} alt={project.title} />
    </a>
    <h3 className="text-primary font-semibold text-lg">
      {project.title}
    </h3>
    <p className=" text-white mt-1">{project.description}</p>
    <div className="mt-5">
      <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
View Live</button>
      <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
        Github Repo
      </button>
    </div>
    </div> )
  }
</div>
    </div>
  );
};

export default Projects;