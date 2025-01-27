import React from "react";
import { motion } from "framer-motion";
import raviprofile from "../assets/RPhoto.jpg"; // Adjusted import path

function About() {
  return (
    <section id="about" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image with Animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={raviprofile}
            alt="Ravikumar Sura - React Developer"
            className="rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-indigo-500"
          />
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
            Hello! I’m <span className="font-bold text-indigo-600">Ravikumar Sura</span>, a passionate developer specializing in <span className="font-bold text-indigo-600">React.js</span> and <span className="font-bold text-indigo-600">React Native</span>. With over 3 years of professional experience, I excel in building modern, user-friendly web and mobile applications tailored to business needs.
          </p>
          <div className="space-y-4">
            {/* Card 1 */}
            <motion.div
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600">Expertise</h3>
              <p className="text-gray-700 mt-2">
                I specialize in crafting seamless UI/UX experiences using technologies like React.js, React Native, JavaScript, HTML, and CSS.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600">Strengths</h3>
              <p className="text-gray-700 mt-2">
                Experienced in state management using Redux and Context API, I ensure optimal performance and scalability in applications.
              </p>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600">Vision</h3>
              <p className="text-gray-700 mt-2">
                My goal is to contribute innovative and efficient solutions to the tech industry while collaborating with talented teams worldwide.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
