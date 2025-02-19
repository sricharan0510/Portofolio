import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about-section" className="relative py-16 flex items-center min-h-screen">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="mb-4 text-4xl font-bold text-center text-gray-800">About Me</h2>
        <div className="w-14 h-1 mx-auto bg-blue-600 rounded-full"></div>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
          {/* About Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left px-6">
            <p className="text-gray-700 leading-loose text-lg">
              I am passionate about building meaningful and efficient digital experiences.
              With a strong eye for detail and problem-solving, I love crafting intuitive solutions that enhance user interaction and functionality.
              Every project I work on is an opportunity to learn, improve, and create something impactful.
              I thrive in fast-paced environments where collaboration, adaptability, and continuous growth drive success.
              My goal is to contribute to projects that push boundaries, improve efficiency, and deliver seamless user experiences.
            </p>
            {/* Soft Skills Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">My Soft Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Communication",
                  "Teamwork",
                  "Adaptability",
                  "Leadership",
                  "Creativity",
                  "Time Management",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white shadow-md"
                  >
                    <p className="font-medium">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center px-6">
            <div className="relative w-80 h-[28rem] sm:w-96 sm:h-[30rem] overflow-hidden">
              <img
                src="./MyPic.png"
                alt="My Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
