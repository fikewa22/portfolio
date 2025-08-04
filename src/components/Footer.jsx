import React from "react";
import github from "../assets/socials/github.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
import email from "../assets/socials/sms.png";

const Footer = () => {
  const socialLinks = [
    { icon: github, url: "https://github.com/fikewa22", label: "GitHub" },
    { icon: twitter, url: "https://twitter.com/fikewa22", label: "Twitter" },
    {
      icon: linkedin,
      url: "https://www.linkedin.com/in/abdul-qudus-olatunji-07ba83114/",
      label: "LinkedIn",
    },
    { icon: email, url: "mailto:fikewaolatunji@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white font-medium">
              © 2024 Fikewa Olatunji. All rights reserved.
            </p>
            <p className="text-white/80 text-sm mt-1">
              Full-Stack Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 filter brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
