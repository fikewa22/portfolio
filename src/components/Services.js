import React from 'react';
import RulerPenIcon from '../assets/icons/ruler-pen.png';
import CodeIcon from '../assets/icons/code.png';
import AndroidIcon from '../assets/icons/android.png';
import GitIcon from '../assets/icons/git-repo.png';
import JsIcon from '../assets/icons/javascript.png';
import WebScrapingIcon from '../assets/icons/web-scraping.png';

const Services = () => {
    const services = [
        {id: 1, name:'UI & UX DESIGNING', description:'I design beautiful web iterfaces with Figma and Adove XD', image: RulerPenIcon},
        {id:2, name:'WEB DEVELOPMENT', description:'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS', image: CodeIcon},
        {id:3, name:'MOBILE DEVELOPMENT', description:'I am an expert mobile developer. I have experience using Flutter and React Native.', image: AndroidIcon},
        {id:4, name:'VERSION CONTROL', description:'I can use version control systems well, and Git & Mecurial are my go-to tool.', image: GitIcon},
        {id:5, name:'NPM AND NODEJS', description:'I have core understanding of NPM. I can also develop general purpose applications with NodeJS', image: JsIcon},
        {id:6, name:'WEB SCRAPING', description:'I can collect content and data from the internet then manipulate and analyze as needed.', image: WebScrapingIcon},
    ]
    return (
        <div>
            <h1 className='text-primary font-semibold text-3xl mt-14'>The Services I offer</h1>
            <div className='grid grid-cols-3 gap-5 my-8'>
                {
                    services.map(service=> <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
                        <img src={service.image} alt="" className='mb-3'/>
                        <h6 className='text-2xl mb-4'>{service.title}</h6>
                        <p className='text-base'>{service.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;