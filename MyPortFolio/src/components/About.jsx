import React from "react";
import { motion } from "framer-motion";
import raviprofile from "../assets/RPhoto.jpg"; // Adjusted import path

function About() {
  return (
    <section id="about" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image with Animation */}
        <motion.div
  className="relative rounded-2xl w-96 h-96 lg:w-96 lg:h-96 overflow-hidden shadow-2xl border-4 border-indigo-500"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{
    scale: 1.1,
    rotate: 2,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
  <img
    src={raviprofile}
    alt="Ravikumar Sura - React Developer"
    className="w-full h-full object-cover"
  />
  <motion.div
    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900 via-indigo-800 to-transparent p-4 text-white text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
  >
    <h2 className="text-xl font-semibold">Ravikumar Sura</h2>
    <p className="text-sm italic">React Developer</p>
  </motion.div>
</motion.div>


        {/* Content with Animated Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center lg:text-left mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Hello! I’m <span className="font-bold text-indigo-600">Ravikumar Sura</span>, a professional <span className="font-bold text-indigo-600">React.js</span> and <span className="font-bold text-indigo-600">React Native</span> developer with over 3 years of experience. I specialize in building intuitive, scalable, and performance-driven web and mobile applications. My core expertise lies in technologies like <span className="font-bold text-indigo-600">JavaScript, HTML, CSS, Tailwind CSS, and Redux</span>. I’m passionate about delivering seamless user experiences and staying updated with the latest trends in web and mobile development.
          </p>
          <div className="space-y-6">
            {/* Skills */}
            <motion.div
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600">Technical Skills</h3>
              <p className="text-gray-700 mt-2">
                - Proficient in <span className="font-bold">React.js</span> and <span className="font-bold">React Native</span> for building dynamic, modern web and mobile applications.<br />
                - Hands-on experience with <span className="font-bold">JavaScript, HTML, CSS</span>, and <span className="font-bold">Tailwind CSS</span> for clean and responsive designs.<br />
                - Expertise in state management using <span className="font-bold">Redux</span> and <span className="font-bold">Context API</span>.<br />
                - Familiarity with tools like <span className="font-bold">Git, Webpack</span>, and <span className="font-bold">Postman</span> for efficient development workflows.
              </p>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600">Professional Achievements</h3>
              <p className="text-gray-700 mt-2">
                - Successfully led the development of multiple client projects, delivering user-friendly applications ahead of deadlines.<br />
                - Developed an inventory management dashboard that included advanced features like pagination, filtering, and data visualization.<br />
                - Played a critical role in optimizing performance for a React Native mobile app, improving load times by 30%.<br />
                - Recognized for integrating seamless user interfaces and improving user retention rates.
              </p>
            </motion.div>

            {/* Passions */}
            <motion.div
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600">Passions and Vision</h3>
              <p className="text-gray-700 mt-2">
                I’m passionate about exploring emerging web and mobile technologies, contributing innovative solutions, and collaborating with like-minded professionals. My vision is to grow as a developer while contributing to meaningful projects that positively impact users and businesses worldwide.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
