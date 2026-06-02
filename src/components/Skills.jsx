function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C++", "SQL"],
    },
    {
      title: "Backend",
      skills: [
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "JPA",
        "REST APIs",
        "JDBC",
      ],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git", "GitHub", "Linux"],
    },
    {
      title: "Microservices",
      skills: ["Spring Cloud", "OpenFeign", "Eureka", "API Gateway"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Skills
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Technologies I use to build scalable backend systems,
          cloud-native applications and modern web solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-slate-700 rounded-lg text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
