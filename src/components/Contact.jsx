import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 flex items-center"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Contact Me
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Let's connect and build something amazing.
        </p>

        <p className="text-center text-slate-400 mb-16">
          Open to Backend Developer and Java Developer opportunities. Available
          for full-time roles.
        </p>

        <div className="bg-slate-800 rounded-2xl p-10 border border-slate-700">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <a
                href="mailto:divyanshuchaudhary067@gmail.com"
                className="text-lg hover:text-cyan-400"
              >
                divyanshuchaudhary067@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <span className="text-lg">+91-8384055507</span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-cyan-400 text-2xl" />
              <a
                href="https://github.com/Divyanshu-Chaudhary"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                GitHub Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <a
                href="https://www.linkedin.com/in/divyanshu-76855b229/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
