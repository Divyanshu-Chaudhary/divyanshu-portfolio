function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-cyan-400">Divyanshu</h3>

        <p className="text-slate-400 mt-2">Java Full Stack Developer</p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="text-slate-300 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            className="text-slate-300 hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/yourleetcode"
            target="_blank"
            className="text-slate-300 hover:text-cyan-400"
          >
            LeetCode
          </a>
        </div>

        <p className="text-slate-500 text-sm mt-6">
          © 2026 Divyanshu. All rights reserved. Built with React.js & Tailwind
          CSS
        </p>

        <h3 className="text-slate-300 mt-6">
          Java • Spring Boot • Microservices • MySQL • PostgreSQL • MongoDB •
          Docker • AWS
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
