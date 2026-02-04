import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm Arafah 👋
      </h1>

      <p className="text-gray-400 max-w-xl text-lg md:text-xl">
        Full Stack Developer | STMIK Jaya Nusa Graduate
        <br />
        Specializing in PHP, JavaScript, React & Node.js
      </p>

      {/* Social Links */}
      <div className="flex gap-4 mt-6">
        <a 
          href="https://github.com/Skuylife" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/habil-yakub-arapah-713514290/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="mailto:habilyakubarafah@gmail.com"
          className="text-gray-400 hover:text-red-500 transition"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}