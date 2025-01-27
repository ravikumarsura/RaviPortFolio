import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';

function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg mb-12">Feel free to connect with me on any of the platforms below.</p>
        <div className="flex justify-center gap-8">
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-400 transform transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-400 transform transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-400 transform transition-all duration-300 hover:scale-110"
          >
            <FaTwitter />
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="text-3xl hover:text-gray-400 transform transition-all duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>

          {/* Codewars */}
          <a
            href="https://www.codewars.com/users/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-gray-400 transform transition-all duration-300 hover:scale-110"
          >
            <SiCodewars />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
