import React, { useState } from "react";
import github from "../assets/socials/github.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
import email from "../assets/socials/sms.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <div className="contact-section section" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's connect and discuss how we can work together to bring your
            ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="card">
              <h3 className="text-2xl font-bold text-dark-800 mb-6 gradient-text">
                Let's Connect
              </h3>
              <p className="text-lg text-dark-600 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and software
                development.
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-dark-800 mb-4">
                  Follow me on:
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className="w-6 h-6 transition-all duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Email</p>
                    <p className="text-dark-800 font-medium">
                      fikewaolatunji@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="card">
              <h3 className="text-2xl font-bold text-dark-800 mb-6 gradient-text">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="form-input resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-slate-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
