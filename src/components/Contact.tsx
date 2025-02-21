import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, User } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    to_name: 'Sricharan Illandula',
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      setSubmitStatus('success');
      setFormData({ to_name: 'Sricharan Illandula', from_name: '', from_email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.log(error);
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-10 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="mb-14 text-4xl font-bold text-center mt-7">Contact Me</h2>
        <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-bold">Get in Touch</h3>
            <div>
              <div  className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <User className="text-blue-400" />
                  <span className="text-xl font-medium">Sricharan Illandula</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-400" />
                  <span className="text-xl font-medium">+91 8519836671</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-400" />
                  <span className="text-xl font-medium">Telangana, INDIA</span>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex space-x-6"
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
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="flex items-center justify-center w-full px-6 py-2 text-sm text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
              {submitStatus === 'success' && (
                <p className="text-center text-green-400">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-red-400">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

        </div>

        {/* Line Separator */}
        <div className="mt-12 border-t border-gray-700"></div>

        {/* Copyright Statement */}
        <p className="mt-6 text-center text-xl text-gray-400">
          © {new Date().getFullYear()} Sricharan Illandula. All rights reserved.
        </p>

      </div>
    </section>
  );
}
