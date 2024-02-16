import React from 'react';
import Tools from './Tools';
import photo1 from "../assets/icons/ruler-pen.png"
import photo2 from "../assets/icons/code.png"
import photo3 from "../assets/icons/git-repo.png"
import photo4 from "../assets/icons/web-scraping.png"

const About = () => {
  const skills = [
    {name: 'UI DESIGN AND PROTOTYPING', image: photo1},
    {name: 'WEB DEVELOPMENT', image: photo2},
    {name: 'VERSION CONTROL', image: photo3},
    {name: 'RESPONSIVE FRAMEWORKS', image: photo4}
  ];
  return (
    <div className="md:mt-56 md:px-10 sm:mt-24 px-7" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-8">About me </h1>
      <p className="my-3 text-l text-black md:text-justify md:w-2/3 leading-[2]">
      Hi. My name is Abdul-Qudus Olatunji. I am a versatile professional, excelling as a Freelance Wix Designer and Frontend Developer.I specialize in crafting captivating user interfaces with HTML, CSS, and JavaScript, while also utilizing frameworks like ReactJS. My skills extend to creating responsive designs with Bootstrap, practicing version control with Git and GitHub, and collaborating seamlessly within teams for efficient web development.</p>
      {/* experience section */}
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">2+</div>
        <p className="text-black text-2xl md:ml-5">Years of experience. Specialized in building interactive and responsive web applications ensuring a seamless web experience for users.</p>
      </div>
       {/* Skills card */}
       <div className='flex flex-col md:flex-row'>
        {
          skills.map((skill,index)=> <div key={index} className='md:w-[256px] md:h-[254px] bg-primary hover:bg-tertiary flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500 hover:-rotate-3 hover:scale-110'>
          <img src={skill.image} alt="" />
          <p className='text-2xl font-semibold text-white mt-3'>{skill.name}</p>
          </div>)
        }
       </div>
       {/* Tools card */}
       <Tools/>
    </div>
  );
};

export default About;