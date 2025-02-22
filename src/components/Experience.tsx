import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Technical Hub',
    date: '2024 - Present',
    description: 'Led development of enterprise applications using React and Node.js',
  },
  {
    title: 'Basic FrontEnd Developer',
    company: 'CodSoft',
    date: 'Nov, 2023 - Dec, 2023',
    description: 'Deep dived in to Html and CSS',
  },
  // {
  //   title: 'Junior Developer',
  //   company: 'StartUp Hub',
  //   date: '2018 - 2019',
  //   description: 'Worked on front-end development using React',
  // },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 mx-auto">
        <h2 className="mt-4 mb-4 text-4xl font-bold text-center">Experience</h2>
        <div className="mb-12 w-16 h-1 mx-auto bg-blue-600 rounded-full"></div>
        <VerticalTimeline lineColor="#6366f1">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: '#fff',
                boxShadow: '0 3px 10px rgb(99 102 241 / 0.2)',
              }}
              contentArrowStyle={{ borderRight: '7px solid #6366f1' }}
              date={exp.date}
              iconStyle={{ background: '#6366f1', color: '#fff' }}
              icon={<Briefcase />}
            >
              <h3 className="text-xl font-bold vertical-timeline-element-title">
                {exp.title}
              </h3>
              <h4 className="mt-2 text-indigo-100 vertical-timeline-element-subtitle">
                {exp.company}
              </h4>
              <p className="mt-4 text-indigo-50">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}