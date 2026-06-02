import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Real-Time Chat Application",
      status: "Completed ✅",
      description:
        "Full-stack real-time chat application using Spring Boot, React, WebSocket, STOMP, MongoDB and Docker.",

      tech: ["Spring Boot", "React", "WebSocket", "STOMP", "MongoDB", "Docker"],

      github: "https://github.com/Divyanshu-Chaudhary/ChatApp",

      live: "",
    },

    {
      title: "Distributed Quiz Management System",

      status: "Completed ✅",

      description:
        "Microservices-based quiz management system implementing service discovery, API Gateway and inter-service communication.",

      tech: [
        "Spring Boot",
        "Spring Cloud",
        "OpenFeign",
        "Eureka",
        "API Gateway",
        "MySQL",
      ],

      github:
        "https://github.com/Divyanshu-Chaudhary/springboot-microservices-quiz-system.git",

      live: "",
    },

    {
      title: "Book Management System",

      status: "Live 🚀",

      description:
        "Full-stack book management platform with authentication, authorization, REST APIs and AWS deployment.",

      tech: [
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "JPA",
        "MySQL",
        "AWS EC2",
      ],

      github:
        "https://github.com/Divyanshu-Chaudhary/SpringBootBookManagement.git",

      live: "http://devdivyanshu.space:8080/login",
    },

    {
      title: "Product Management System",

      status: "Foundation Project 📚",

      description:
        "CRUD application built using Spring MVC, Hibernate and MySQL following MVC architecture principles.",

      tech: ["Spring MVC", "Hibernate", "MySQL", "JSP", "Maven"],

      github: "https://github.com/Divyanshu-Chaudhary/product-crud-spring-mvc",

      live: "",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Projects
        </h2>

        <p className="text-center text-slate-400 mb-16">
          A showcase of my backend and full-stack development journey
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-slate-800
                rounded-2xl
                border
                border-slate-700
                p-8
                hover:border-cyan-400
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-green-400 mb-4">{project.status}</p>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-2
                      bg-slate-700
                      rounded-lg
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    bg-slate-700
                    rounded-lg
                    hover:bg-slate-600
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      bg-cyan-500
                      rounded-lg
                      hover:bg-cyan-600
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
