import React from 'react';
import Services from './Services';
import photo1 from "../assets/icons/ruler-pen.png"
import photo2 from "../assets/icons/code.png"
import photo3 from "../assets/icons/android.png"
import photo4 from "../assets/icons/web-scraping.png"

const About = () => {
  const skills = [
    {name: 'WIX DESIGNER', image: photo1},
    {name: 'WEB DEVELOPMENT', image: photo2},
    {name: 'MOBILE DEVELOPMENT', image: photo3},
    {name: 'WEB SCRAPING', image: photo4}
  ];
  return (
    <div className="md:px-10 sm:mt-24 px-7" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me </h1>
      <p className="my-3 text-secondary md:w-2/3 leading-[2]">
      Hi. My name is Abdul-Qudus Olatunji. I am a versatile professional, excelling as a Freelance Wix Designer, Frontend Developer, and Content Writer. With a passion for creativity and technology, I craft captivating content for diverse brands while also building responsive and dynamic websites. My expertise lies in seamlessly blending design and development to deliver exceptional online experiences.
      </p>
      {/* experience section */}
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">2+</div>
        <p className="text-secondary text-2xl md:ml-5">Years of experience. Specialized in building interactive and responsive web applications ensuring a seamless web experience for users.</p>
      </div>
       {/* Skills card */}
       <div className='flex flex-col md:flex-row'>
        {
          skills.map((skill,index)=> <div key={index} className='md:w-[256px] md:h-[254px] bg-tertiary hover:bg-primary flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
          <img src={skill.image} alt="" />
          <p className='text-2xl font-semibold text-white mt-3'>{skill.name}</p>
          </div>)
        }
       </div>
       {/* services card */}
       <Services/>
    </div>
  );
};

export default About;