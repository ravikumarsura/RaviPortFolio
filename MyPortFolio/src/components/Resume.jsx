import React from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/CV_Ravi_React_web_2025.pdf";
import resumePreviewImage from "../assets/resumeimg.png";

function Resume() {
  const experiences = [
    {
      title: "React Web & Native Developer",
      company: "Adiversetech LLP",
      duration: "December 2022 – Present",
      description: `
         Developed web applications using ReactJS, Redux Toolkit, JavaScript, HTML, CSS, React Bootstrap, Material UI (MUI), and modern web development frameworks.
         Implemented user authentication and authorization to ensure secure access to web applications.
         Utilized Git for version control, maintaining a clean and organized codebase through proper branching and merging practices.
         Conducted thorough testing using tools like Postman to validate API functionality and performance.
         Participated in code reviews, providing constructive feedback to enhance code quality and maintainability.
         Debugged and resolved issues to ensure the stability and efficiency of web applications.
         Collaborated with the product management team to translate requirements into technical specifications.
         Built responsive and user-friendly front-end interfaces using ReactJS and JavaScript.
         Demonstrated strong logical ability, a systematic approach to problem analysis, solution design, and excellent debugging and troubleshooting skills.
      `,
    },

    {
      title: "Web Developer",
      company: "Purpleplum",
      duration: "December 2021 - November 2022",
      description: `
         Designed and developed interactive web components using HTML, CSS, and JavaScript to create engaging user interfaces.
         Improved the responsiveness of web applications, ensuring seamless user experiences across devices, including desktops, tablets, and mobile phones.
         Collaborated with the design team to implement modern UI/UX principles and translate wireframes into functional web pages.
         Optimized web performance by reducing page load times and improving overall efficiency through clean, reusable code and best practices.
         Integrated APIs to enhance application functionality, enabling dynamic data retrieval and display.
         Conducted cross-browser testing to ensure compatibility across major web browsers.
        Contributed to multiple projects simultaneously, meeting tight deadlines and delivering high-quality results.
        Participated in team meetings and brainstorming sessions to propose innovative solutions for enhancing product features.
      `,
    },
  ];

  const education = [
    {
      degree:
        "Bachelor of Technology in Electrical and Electronics Engineering",
      institution: "Gokul Institute of Technology and Sciences",
      // duration: "2018 - 2022",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Narayana Junior College",
      // duration: "2014 - 2016",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="resume"
      className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-20 px-6"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Left Section */}
        <div className="lg:w-2/3 w-full space-y-10">
          <motion.h2
            className="text-5xl font-extrabold text-indigo-700 text-center lg:text-left"
            variants={cardVariants}
          >
            Resume
          </motion.h2>

          {/* Experience Section */}
          <motion.div className="space-y-10" variants={cardVariants}>
            <h3 className="text-3xl font-semibold text-gray-800">Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                variants={cardVariants}
              >
                <h4 className="text-2xl font-semibold text-gray-800">
                  {exp.title}
                </h4>
                <p className="text-lg text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div className="space-y-10" variants={cardVariants}>
            <h3 className="text-3xl font-semibold text-gray-800">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
                variants={cardVariants}
              >
                <h4 className="text-2xl font-semibold text-gray-800">
                  {edu.degree}
                </h4>
                <p className="text-lg text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Download Resume Button */}
          <motion.div
            className="text-center lg:text-left mt-8"
            variants={cardVariants}
          >
            <a href={resumePDF} download="MyResume">
              <button className="bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-800 transform hover:scale-105 transition">
                Download Resume (PDF)
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/3 w-full flex flex-col items-center justify-center space-y-6"
          variants={cardVariants}
        >
          {/* PDF Preview Image */}
          <img
            src={resumePreviewImage}
            alt="Resume Preview"
            className="rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transform hover:scale-105 transition duration-300"
          />
          {/* View PDF Button */}
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            <button className="bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-800 transform hover:scale-105 transition">
              View Full Resume
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Resume;
