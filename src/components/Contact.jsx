import React from 'react';
import github from '../assets/socials/github.svg'
import twitter from '../assets/socials/twitter.svg'
import linkedin from '../assets/socials/linkedin.svg'
import email from '../assets/socials/sms.png'

const Contact = () => {
  return (
    <div className='px-7 md:px-10 my-10' id='contact'>
    <div className='flex flex-col md:flex-row'>
      {/* Text and Icons */}
      <div className='md:w-1/2'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Connect with me:</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>
        You can reach out to me here</p>

        {/* social icons */}
        <div className='flex'>
          <a href="https://github.com/fikewa22" className='ml-4'><img src={github} alt="" /></a>
          <a href="https://twitter.com/fikewa22" className='ml-4'><img src={twitter} alt="" /></a>
          <a href="https://www.linkedin.com/in/abdul-qudus-olatunji-07ba83114/" className='ml-4'><img src={linkedin} alt="" /></a>
          <a href="mailto:fikewaolatunji@gmail.com" className='ml-4'><img src={email} alt="" /></a>
        </div>
        </div>
        {/* Form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>
            <form>
                <input type="text" name="name" placeholder="Name:" className="bg-[white] bg-opacity-3 py-3 px-3 md:w-3/4 w-full rounded "/>
                <input type="email" name="email" placeholder="Email:" className="bg-[white] bg-opacity-3 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[white] bg-opacity-3 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
                  Send
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;