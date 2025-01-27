import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import 'swiper/css'; 

const projects = [
  {
    title: 'Academic Time Table Creator',
    description:
      'Developed a component with dynamic dropdowns for days and periods, fetching period values via GET and ensuring user-friendly data entry.',
    technologies: ['React.js', 'Ant Design'],
    link: 'https://example.com',
    image: 'https://img.freepik.com/free-vector/school-timetable-template_1308-32702.jpg?t=st=1737996607~exp=1738000207~hmac=675a6ed5aa5f75702b455cfa74173f11395f2373dc5f395324c1a37ffd8a2a6f&w=2000',
  },
  {
    title: 'Examination Cell',
    description:
      'A centralized system for managing exam schedules, student registrations, and result declarations with real-time updates.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    link: 'https://example.com',
    image: 'https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?t=st=1737996853~exp=1738000453~hmac=68a8788b653bc9ac547ba2cdbcd2551f2c9df3b6fd93b651b753a3440c00e90a&w=2000',
  },
  {
    title: 'ERP System',
    description:
      'An enterprise resource planning system for managing business processes like accounting, HR, and inventory in one platform.',
    technologies: ['React.js', 'Redux', 'Node.js'],
    link: 'https://example.com',
    image: 'https://img.freepik.com/free-photo/enterprise-resource-planning-holographic-interface_23-2149092251.jpg?t=st=1737996919~exp=1738000519~hmac=26427c03653ab21aec8e4eb2a6c652fce342f2510ac77003c4f1d29a922b53a9&w=2000',
  },
  {
    title: 'NIRF Dashboard',
    description:
      'A dashboard to track and analyze NIRF (National Institutional Ranking Framework) data, providing insightful reports and comparisons.',
    technologies: ['React.js', 'D3.js', 'Express'],
    link: 'https://example.com',
    image: 'https://img.freepik.com/free-vector/business-diagram-template-with-information-numbers-infographic_1284-41044.jpg?t=st=1737996993~exp=1738000593~hmac=8e38903c5abd1decf047d277bcae85ce1d8ec2e4097576b61a545cf7731000fc&w=1480',
  },
  {
    title: 'OBE (Outcome-Based Education)',
    description:
      'A web application designed for managing Outcome-Based Education (OBE) data, tracking student performance, and aligning with academic outcomes.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    link: 'https://example.com',
    image: 'https://img.freepik.com/free-photo/city-committed-education-collage-concept_23-2150062214.jpg?t=st=1737997046~exp=1738000646~hmac=26e2890e18121c19931b920acf8b5feacb2158f75060040bad1ff2e87c9d262e&w=2000',
  },
  {
    title: 'Mock Interview Platform',
    description:
      'A platform for conducting mock interviews, simulating real-world interview scenarios, with feedback and performance tracking.',
    technologies: ['React.js', 'Node.js', 'Socket.io'],
    link: 'https://example.com',
    image: 'https://img.freepik.com/free-vector/flat-university-concept-background_23-2148189717.jpg?t=st=1737996881~exp=1738000481~hmac=05a43fa4e96ad8c57b645329aeb62050ffe3d2267731913e2785d0fb07aed2c3&w=1480',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 z-0 bubble-background"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card border border-gray-200 rounded-lg shadow-xl p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
            >
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                effect="fade"
                className="mb-6 rounded-lg overflow-hidden"
              >
                <SwiperSlide>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover rounded-lg transform group-hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </SwiperSlide>
              </Swiper>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-200">Technologies:</h4>
                <ul className="list-disc pl-5 text-gray-200">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-indigo-500 transition-all duration-300 transform group-hover:translate-x-2"
                >
                  <FaExternalLinkAlt className="inline mr-2" />
                  View Project
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-400 transition-all duration-300 transform group-hover:translate-x-2"
                >
                  <FaGithub className="inline mr-2" />
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
