const Highlights = () => {
  const highlights = [
    {
      icon: "🏆",
      title: "GATE 2026 Qualified",
      description: "Computer Science & Information Technology (CS & IT)",
    },
    {
      icon: "💻",
      title: "150+ LeetCode Problems",
      description: "Consistent problem-solving across DSA topics",
    },
    {
      icon: "🔥",
      title: "40+ Day Coding Streak",
      description: "Daily coding and interview preparation",
    },
    {
      icon: "🎓",
      title: "B.Tech Graduate",
      description: "Electrical Engineering, DTU",
    },
    {
      icon: "🤝",
      title: "Mentored 10+ Students",
      description: "Delhi Government's Desh Ka Mentor Initiative",
    },
    {
      icon: "☁️",
      title: "AWS Certified",
      description: "Cloud fundamentals and deployment experience",
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Highlights
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
