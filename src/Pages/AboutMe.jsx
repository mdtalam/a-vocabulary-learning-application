import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cool-blue mb-4">About Me</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hello! I'm a dedicated developer passionate about creating intuitive and efficient digital experiences. 
            I specialize in modern web development technologies and love solving complex problems with code.  
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cool-blue mb-6 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["React", "JavaScript", "Node.js", "Tailwind CSS", "Firebase", "Git", "Express.js", "MongoDB"].map(
              (skill, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-4 rounded-md hover:bg-cool-blue hover:text-white transition"
                >
                  <p className="font-medium text-lg">{skill}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cool-blue mb-6 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project Card */}
            {[
              {
                name: "Lingo Bingo",
                description:
                  "A fun and interactive language learning app designed to help users improve their vocabulary and communication skills.",
                link: "#",
              },
              {
                name: "E-Commerce Dashboard",
                description:
                  "A full-stack dashboard for managing inventories, orders, and user analytics for e-commerce platforms.",
                link: "#",
              },
              {
                name: "Portfolio Website",
                description:
                  "A responsive and interactive portfolio to showcase my skills, projects, and achievements.",
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-cool-blue font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-cool-blue mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-700 mb-6">
            Interested in working together or have any questions? Feel free to
            reach out!
          </p>
          <a
            href="mailto:your-email@example.com"
            className="bg-cool-blue text-white py-2 px-6 rounded-md shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
