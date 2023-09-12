import React, { useState } from 'react';
import { Link, ScrollLink } from 'react-scroll';
import {BookOpenIcon, Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid';

const Header = () => {
  let Links = [
    {name:"Home", link:"home"},
    {name:"About me", link:"about"},
    {name:"Projects", link:"projects"},
    {name:"Contact", link:"contact"}
  ]
  let [open, setOpen]= useState(false);
  return (
    <div className='max-w-7xl w-full'>
    <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
      {/* logo section*/}
      <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
        <span className='text-primary hover:text-white'>Abdul-Qudus Olatunji</span>
      </div>

      {/*Mobile Menu Icons */}
      <div onClick={()=> setOpen(!open)} className='w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-black absolute'>
        {
        open ? <XMarkIcon/> : <Bars3BottomRightIcon/>
      }
      </div>
      {/*Nav link items */}
      <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto
      mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 bg-transparent transition-all duration-500 ease-in ${open? "top-12" : "top-[-490px]"}`}>
        {
        Links.map(link => <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold cursor-pointer'>
          <Link to={link.link} activeClass='active' smooth={true} spy={true} offset={-80} className='text-black transition-all duration-500 hover:text-white'>
            {link.name}</Link>
        </li>)
        }
      </ul>
      </div>
    </div>
  );
};

export default Header;