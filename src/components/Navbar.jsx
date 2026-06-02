function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full
    backdrop-blur-md
    bg-slate-900/80
    border-b border-slate-800
    z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-cyan-400">Divyanshu</h1>

        <ul className="hidden md:flex gap-8 text-slate-300">
          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
