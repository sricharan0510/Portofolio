import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="flex items-center justify-center min-h-screen text-white bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/modern-desktop-background-geometric-blue-design-vector_53876-135923.jpg')" }}
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-6xl font-bold"
          >
            Sricharan Illandula
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-2xl text-gray-300"
          >
            Full Stack Developer | Competitive Programmer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a target='_blank' href="https://github.com/sricharan0510" className="text-gray-300 transition-colors hover:text-white">
              <Github size={24} />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/sricharan-illandula-0a61b22a4/" className="text-gray-300 transition-colors hover:text-white">
              <Linkedin size={24} />
            </a>
            <a target='_blank' href="mailto:sricharan0504@gmail.com" className="text-gray-300 transition-colors hover:text-white">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
