import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    title: 'MongoDB Developer Toolkit',
    issuer: 'GeeksForGeeks',
    date: 'Jan, 2025',
    credentialId: 'N/A',
  },
  {
    title: 'JavaScript Essentials',
    issuer: 'Cisco',
    date: 'Dec, 2024',
    credentialId: 'EMHs-DwVw',
  },
  {
    title: 'Data Base Management System',
    issuer: 'NPTEL',
    date: 'Oct, 2024',
    credentialId: 'w9uoC-H9sw',
  },
  {
    title: 'IT Specialist in Java',
    issuer: 'Pearson Vue',
    date: 'July, 2024',
    credentialId: 'wUCEB-FaSd',
  },
  {
    title: 'Full Stack Development',
    issuer: 'TechnicalHub',
    date: 'July, 2024',
    credentialId: 'CBAB7F2EEA66',
  },
  {
    title: 'Programming in Java',
    issuer: 'NPTEL',
    date: 'May, 2024',
    credentialId: 'CBAB7F2EEA66',
  },
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'Apr, 2024',
    credentialId: 'N/A',
  },
  {
    title: 'Web Developer',
    issuer: 'CodSoft',
    date: 'Dec, 2023',
    credentialId: 'aHxU-s4Nk',
  },
  
];

export default function Certificates() {
  const certificatesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.certificate-item', {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: certificatesRef.current,
          start: 'top center+=100',
        },
      });
    }, certificatesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={certificatesRef} id="certificates" className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mt-4 mb-4 text-4xl font-bold text-center">Certificates</h2>
        <div className="mb-12 w-16 h-1 mx-auto bg-blue-600 rounded-full"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 transition-shadow bg-white rounded-lg shadow-md certificate-item hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                  {/* <p className="mt-1 text-gray-600">{cert.issuer}</p> */}
                  <div className="flex items-center justify-between mt-3">
                    <p className="mt-1 text-gray-600">{cert.issuer}</p>
                    <span className="text-sm text-gray-500">Issued: {cert.date}</span>
                    {/* <span className="text-sm text-gray-500">ID: {cert.credentialId}</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}