import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          {/* logo section*/}
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <span className="gradient-text hover:scale-105 transition-transform duration-300">
              Fikewa Olatunji
            </span>
          </div>

          {/*Mobile Menu Icons */}
          <div
            onClick={() => setOpen(!open)}
            className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-dark-800 absolute z-50"
          >
            {open ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3BottomRightIcon className="w-7 h-7" />
            )}
          </div>

          {/*Nav link items */}
          <ul
            className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto
          mt-4 md:mt-0 md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 glass rounded-b-2xl shadow-lg" : "top-[-490px]"
          }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-7 font-semibold cursor-pointer"
              >
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  offset={-80}
                  className="nav-link block"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
