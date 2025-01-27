import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/CV_Ravi_React_web_2025.pdf";
import resumePreviewImage from "../assets/resumeimg.png"; 

function Resume() {
  const experiences = [
    {
      title: "React Developer",
      company: "Adiversetech LLP",
      duration: "September 2022 – Present",
      description:
        "Developed web applications using ReactJS, Redux Toolkit, JavaScript, HTML, CSS, React Bootstrap, Material UI (MUI), and modern web frameworks. Implemented user authentication, authorization, and contributed to code reviews.",
    },
    {
      title: "Frontend Intern",
      company: "XYZ Solutions",
      duration: "2020 - 2021",
      description:
        "Built interactive components using HTML, CSS, and JavaScript. Contributed to responsive design improvements and enhanced user experience across multiple projects.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Electrical and Electronics Engineering",
      institution: "JNTU Kakinada",
      duration: "2018 - 2022",
    },
    {
      degree: "Higher Secondary Education",
      institution: "National Junior College",
      duration: "2014 - 2016",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="resume"
      className="bg-gradient-to-br from-indigo-50 via-blue-100 to-indigo-200 py-20 px-4"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Left Section */}
        <div className="lg:w-2/3 w-full space-y-8">
          <motion.h2
            className="text-4xl font-bold text-gray-800 text-center lg:text-left mb-10"
            variants={cardVariants}
          >
            Resume
          </motion.h2>

          {/* Experience Section */}
          <motion.div className="space-y-8" variants={cardVariants}>
            <h3 className="text-3xl font-semibold text-indigo-600">Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                variants={cardVariants}
              >
                <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div className="space-y-8" variants={cardVariants}>
            <h3 className="text-3xl font-semibold text-indigo-600">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                variants={cardVariants}
              >
                <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Resume Button */}
          <motion.div className="text-center lg:text-left mt-6" variants={cardVariants}>
            <a href={resumePDF} download="MyResume">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
                Download Resume (PDF)
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          className="xl:w-1/2 w-full flex flex-col items-center justify-center space-y-6"
          variants={cardVariants}
        >
          {/* PDF Preview Image */}
          <img
            src={resumePreviewImage}
            alt="Resume Preview"
            className="rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition duration-300"
          />
          {/* View PDF Button */}
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
              View Full Resume
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Resume;
