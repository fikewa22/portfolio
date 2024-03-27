import React from "react";
import github from "../assets/socials/github.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-black flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | Abdul-Qudus Olatunji</p>
        <p className="hidden sm:block">Frontend Developer</p>
        <p className="hidden sm:block">Wix Designer</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://github.com/fikewa22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://twitter.com/fikewa22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://www.linkedin.com/in/abdul-qudus-olatunji-07ba83114/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:fikewaolatunji@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;