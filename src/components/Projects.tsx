import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Expenses Tracker',
    description: 'A web application to manage user incomes and expenses.',
    image: './ExpenseTracker.jpeg',
    details: {
      technologies: ['React', 'Node.js', 'MongoDB'],
      features: ['Statistics', 'Overall Report', 'Dashboard'],
      link: 'https://github.com/KondaveeteChennakesava/Interns-Management-System',
    },
  },
  {
    id: 2,
    title: 'Bus Tracking System',
    description: 'A web application for college bus management and tracking.',
    image: './BusTracking.png',
    details: {
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: ['Google-Maps-API','Different Users', 'Device Friendly'],
      link: 'https://github.com/KondaveeteChennakesava/flappyBirdGame',
    },
  },
  {
    id: 3,
    title: 'Sports Mania',
    description: 'A web application used to know and learn sports.',
    image: './Sports.jpg',
    details: {
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['Registering', 'Rules & Regulations', 'Authenticated Login'],
      link: 'https://github.com/KondaveeteChennakesava/Digital-Library',
    },
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'A web application used to get weather updates.',
    image: './weather-application.avif',
    details: {
      technologies: ['React', 'RestfulAPI'],
      features: ['Weather Updates'],
      link: 'https://github.com/KondaveeteChennakesava?tab=repositories',
    },
  },
  {
    id: 5,
    title: 'Password Generator',
    description: 'A web application used to generate passwords',
    image: './PasswordGenerator.jpg',
    details: {
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['More Customizable', 'Strength Checking', 'Length Selection'],
      link: 'https://github.com/KondaveeteChennakesava?tab=repositories',
    },
  },
  {
    id: 6,
    title: 'CodeMasters',
    description: 'A web application know top 10 programmers of different colleges.',
    image: './CodeMasters.jpg',
    details: {
      technologies: ['Java', 'JDBC', 'SQL'],
      features: ['Filtering', 'CRUD Student', 'Dashboard'],
      link: 'https://github.com/KondaveeteChennakesava?tab=repositories',
    },
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center">Projects</h2>
        <div className="mb-12 w-20 h-1 mx-auto bg-blue-600 rounded-full"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden bg-white rounded-lg shadow-xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="w-full max-w-2xl p-8 bg-white rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="object-cover w-full h-64 rounded-lg"
                />
                <div className="flex flex-col items-center text-center">
                  <div className="mt-4">
                    <h4 className="mb-4 font-bold">Technologies</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      {selectedProject.details.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm text-blue-800 bg-blue-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="mb-4 font-bold">Key Features</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      {selectedProject.details.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-4 py-2 text-sm text-blue-800 bg-blue-100 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
