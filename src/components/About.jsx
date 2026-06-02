function About() {
  return (
    <section id="about" className="min-h-screen bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          About Me
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Get to know me better
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Card */}

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Who Am I?
            </h3>

            <p className="text-slate-300 leading-8">
              I'm Divyanshu, an Electrical Engineering graduate passionate about
              backend development and scalable software systems.
            </p>

            <br />

            <p className="text-slate-300 leading-8">
              I specialize in Java, Spring Boot, REST APIs, PostgreSQL and AWS
              Cloud. I enjoy building real-world applications and continuously
              improving my problem-solving skills through Data Structures and
              Algorithms.
            </p>

            <br />

            <p className="text-slate-300 leading-8">
              My goal is to build reliable, high-performance applications that
              solve meaningful business problems.
            </p>
          </div>

          {/* Right Card */}

          <div className="flex flex-col gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                🎓 Education
              </h3>
              <p className="text-slate-300">Delhi Technical University</p>

              <p className="text-slate-300">B.Tech in Electrical Engineering</p>

              <p className="text-slate-400">Graduated in 2025</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                💻 Current Focus
              </h3>

              <p className="text-slate-300">Spring Boot</p>

              <p className="text-slate-300">Microservices</p>

              <p className="text-slate-300">AWS Cloud</p>

              <p className="text-slate-300">DSA & Problem Solving</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                🚀 Career Goal
              </h3>

              <p className="text-slate-300">
                Seeking Backend Developer opportunities where I can contribute
                to scalable systems while growing as a software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
