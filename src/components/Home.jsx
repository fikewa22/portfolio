import React from 'react';
import img2 from '../assets/img2.png';

const Home = () => {
  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='md:px-10 px-7 my-10 md:h-full bg-[#6495ED]' id='home'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        {/* Text Content */}
        <div className='text-black'>
          <h6 className='text-3xl mt-12'>Hello, I'm</h6>
          <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Abdul-Qudus Olatunji</h1>
          <p className='md:w-96'>
            Freelance Wix Designer, Frontend Developer & Content Writer. I create engaging content for various brands and I also develop responsive websites.
          </p>
          <div className='mt-5'>
            <button onClick={() => scrollToSection('about', 100)} className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>
              About me
            </button>
            <button onClick={() => scrollToSection('projects', 50)} className='btn outline py-1.5 px-6 rounded border-none ml-5 text-black'>
              Projects
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='order-first md:order-last relative'>
          <img src={img2} alt="" />
        </div>
      </div>

      {/* Divider */}
      <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'></div>
      <div className='h-[5px] bg-white md:hidden w-44 absolute right-0 rounded-[4px] my-8'></div>
    </div>
  );
};

export default Home;
