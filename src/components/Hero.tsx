import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {

  // const handleDownloadCV = () => {
  //   const link = document.createElement('a');
  //   link.href = '/Resume.pdf';
  //   link.download = 'Sricharan-resume.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <section className="flex items-center justify-center min-h-screen text-white bg-gray-900">
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
            Full Stack Developer | Competetive Programmer
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


          {/* <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadCV}
            className="flex items-center justify-center px-5 py-3 mx-auto mt-8 space-x-2 text-white transition-all duration-200 bg-[#1D4ED8] border-2 border-[#1D4ED8] hover:bg-transparent"
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.button> */}


        </motion.div>
      </div>
    </section>
  );
}