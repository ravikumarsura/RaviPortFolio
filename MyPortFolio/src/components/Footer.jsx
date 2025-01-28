import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        {/* Footer Text */}
        <p className="text-sm md:text-base text-gray-400 hover:text-gray-200 transition-all duration-300">
          © {new Date().getFullYear()} Ravikumar Sura. All rights reserved.
        </p>
        
        <p className="text-sm md:text-base text-gray-400 hover:text-gray-200 transition-all duration-300">
          Built with <span className="text-red-500 animate-pulse">❤️</span> using <span className="font-semibold text-indigo-400">React.js</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/ravikumarsura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-transform transform hover:scale-125"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ravikumarsura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-125"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ravikumarsura.career@gmail.com"
            className="text-gray-400 hover:text-red-400 transition-transform transform hover:scale-125"
          >
            Email
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-xs text-gray-500 text-center">
          Designed with care to deliver the best experience. ✨
        </p>
      </div>
    </footer>
  );
}

export default Footer;
