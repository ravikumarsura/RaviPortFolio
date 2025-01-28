import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaBriefcase } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-400">
            Let's connect! Feel free to reach out to me on any of the platforms below.
          </p>
        </div>

        {/* Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center">
          {/* GitHub */}
          <a
            href="https://github.com/ravikumarsura"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2"
          >
            <FaGithub className="text-4xl text-gray-300 group-hover:text-indigo-400 transition-all duration-300 transform group-hover:scale-125" />
            <span className="text-sm text-gray-400 group-hover:text-white transition-all">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ravikumarsura"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2"
          >
            <FaLinkedin className="text-4xl text-gray-300 group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-125" />
            <span className="text-sm text-gray-400 group-hover:text-white transition-all">LinkedIn</span>
          </a>

          {/* Naukri */}
          <a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2"
          >
            <FaBriefcase className="text-4xl text-gray-300 group-hover:text-green-400 transition-all duration-300 transform group-hover:scale-125" />
            <span className="text-sm text-gray-400 group-hover:text-white transition-all">Naukri</span>
          </a>

          {/* Email */}
          <a
            href="mailto:ravikumarsura.career@gmail.com"
            className="group flex flex-col items-center space-y-2"
          >
            <FaEnvelope className="text-4xl text-gray-300 group-hover:text-red-400 transition-all duration-300 transform group-hover:scale-125" />
            <span className="text-sm text-gray-400 group-hover:text-white transition-all">Email</span>
          </a>

          {/* Codewars */}
          <a
            href="https://www.codewars.com/users/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2"
          >
            <SiCodewars className="text-4xl text-gray-300 group-hover:text-yellow-400 transition-all duration-300 transform group-hover:scale-125" />
            <span className="text-sm text-gray-400 group-hover:text-white transition-all">Codewars</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
