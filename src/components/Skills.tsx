import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaJava, FaDatabase, FaHtml5, FaCss3 } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', level: 70, icon: <FaReact className="text-blue-500" /> },
  { name: 'Node.js', level: 65, icon: <FaNodeJs className="text-green-600" /> },
  { name: 'JavaScript', level: 75, icon: <FaJs className="text-yellow-500" /> },
  { name: 'Python', level: 80, icon: <FaPython className="text-blue-400" /> },
  { name: 'Git', level: 65, icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Java', level: 75, icon: <FaJava className="text-orange-500" /> },
  { name: 'MongoDB', level: 70, icon: <FaDatabase className="text-green-700" /> },
  { name: 'MySQL', level: 75, icon: <FaDatabase className="text-blue-600" /> },
  { name: 'HTML', level: 90, icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', level: 85, icon: <FaCss3 className="text-blue-500" /> },
];

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    console.log("Skills Array:", skills); // Debugging

    const ctx = gsap.context(() => {
      skills.forEach((skill, index) => {
        gsap.fromTo(
          `.skill-bar-${index}`,
          { width: '0%' },
          {
            width: `${Number(skill.level)}%`, // Ensure it's a number
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: `.skill-item-${index}`,
              start: 'top center+=100',
            },
          }
        );

        gsap.fromTo(
          `.skill-icon-${index}`,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: `.skill-item-${index}`,
              start: 'top center+=100',
            },
          }
        );
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={skillsRef} className="py-20 text-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center">Skills</h2>
        <div className="mb-12 w-14 h-1 mx-auto bg-blue-600 rounded-full"></div>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:justify-between">
          {skills.map((skill, index) => (
            <div key={index} className={`w-full sm:w-1/2 lg:w-5/12 flex items-center space-x-4 skill-item-${index} mb-4`}>
              <div className={`text-4xl skill-icon-${index}`}>{skill.icon}</div>
              <div className="flex-grow">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-300 rounded-full">
                  <div
                    key={index} // Force re-rendering
                    className={`h-full bg-blue-500 rounded-full skill-bar-${index}`}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
