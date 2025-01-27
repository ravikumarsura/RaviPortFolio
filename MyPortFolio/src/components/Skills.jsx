import React from 'react';
import { FaReact, FaHtml5, FaNodeJs, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiAntdesign, SiPostgresql, SiDocker, SiGit, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <FaReact className="text-4xl text-blue-500" />, description: 'A JavaScript library for building user interfaces.' },
  { name: 'React Native', icon: <FaReact className="text-4xl text-blue-500" />, description: 'Build native mobile apps using React.' },
  { name: 'JavaScript', icon: <SiTailwindcss className="text-4xl text-yellow-500" />, description: 'A versatile programming language for web development.' },
  { name: 'HTML5 & CSS3', icon: <FaHtml5 className="text-4xl text-orange-500" />, description: 'The foundational languages for building websites.' },
  { name: 'Context API & Redux', icon: <SiRedux className="text-4xl text-purple-600" />, description: 'State management tools for React applications.' },
  { name: 'MUI', icon: <SiAntdesign className="text-4xl text-indigo-500" />, description: 'A popular React component library.' },
  { name: 'Ant Design', icon: <SiAntdesign className="text-4xl text-indigo-500" />, description: 'A design system and UI component library.' },
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" />, description: 'JavaScript runtime built on Chrome\'s V8 engine.' },
  { name: 'MongoDB', icon: <FaDatabase className="text-4xl text-green-700" />, description: 'A NoSQL database for modern applications.' },
  { name: 'Git & GitHub', icon: <FaGithub className="text-4xl text-black" />, description: 'Version control and collaboration tools for developers.' },
  
  // Additional Skills
//   { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl text-blue-700" />, description: 'A powerful, open-source relational database system.' },
//   { name: 'Docker', icon: <SiDocker className="text-4xl text-cyan-500" />, description: 'Platform for developing, shipping, and running applications in containers.' },
  { name: 'Git', icon: <SiGit className="text-4xl text-orange-500" />, description: 'Distributed version control system to track changes in code.' },
//   { name: 'Firebase', icon: <SiFirebase className="text-4xl text-yellow-500" />, description: 'A platform for building and managing mobile and web applications.' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-500" />, description: 'A utility-first CSS framework for rapid UI development.' },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg p-6 bg-white text-center rounded-lg shadow-md"
            >
              <div className="mb-4">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-800">{skill.name}</p>
              <div className="text-sm text-gray-600 mt-2">
                {skill.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
