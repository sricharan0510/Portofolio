import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'JavaScript', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'Git', level: 65 },
  { name: 'Java', level: 75 },
  { name: 'MongoDB', level: 70 },
];

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skills.forEach((_, index) => {
        gsap.fromTo(
          `.skill-bar-${index}`,
          {
            width: '0%',
          },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            ease: 'power2.out',
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
    <section ref={skillsRef} className="py-20 text-white bg-gray-900">
      <div className="container px-4 mx-auto">

        <h2 className="mb-4 text-4xl font-bold text-center">Skills</h2>
        <div className="mb-12 w-14 h-1 mx-auto bg-blue-600 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className={`mb-6 skill-item-${index}`}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full">
                <div
                  className={`h-full bg-blue-500 rounded-full skill-bar-${index}`}
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}