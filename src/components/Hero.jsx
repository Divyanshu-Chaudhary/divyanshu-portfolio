import profileImage from "../assets/me.jpeg";
function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}

          <div>
            <p className="text-cyan-400 text-xl mb-3">Hello, I'm</p>

            <h1 className="text-6xl font-bold mb-4">Divyanshu</h1>

            <div>
              <h2 className="text-3xl text-slate-300 mb-6">
                Java Backend Developer | Spring Boot | Microservices | AWS
              </h2>
              <p>
                Solved 150+ DSA problems on LeetCode with a 40-day coding
                streak.
              </p>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Building scalable backend systems using Spring Boot, Hibernate,
              REST APIs, PostgreSQL, MySQL and AWS Cloud.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600">
                <a href="https://leetcode.com/u/_op_divyanshu/">Leetcode</a>
              </button>

              <button className="px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Divyanshu"
              className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
