const projects = [
  {
    title: "TransPadang Mobile API",
    desc: "Designed and implemented a fully functional API for TransPadang mobile application with optimized backend logic, achieving 25% faster data processing.",
    tech: "Laravel • REST API • MySQL",
    type: "Professional"
  },
  {
    title: "Padang Mobile - Official Documents Module",
    desc: "Developed a specialized 'Surat' widget meeting all UI/UX specifications and technical requirements for production-ready integration.",
    tech: "React Native • API Integration",
    type: "Professional"
  },
  {
    title: "Car Rental Application",
    desc: "Full-stack car rental system with RESTful APIs, JWT authentication, and complete booking workflow integration between React Native mobile app and Laravel backend.",
    tech: "Laravel • React Native • MySQL • JWT",
    type: "Academic"
  },
  {
    title: "Mosque Digital System",
    desc: "Online donation platform with transparent financial reporting, robust validation, and real-time financial tracking for accountability.",
    tech: "CodeIgniter • MySQL • Payment Gateway",
    type: "Academic"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                {p.type}
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              {p.desc}
            </p>
            <span className="text-sm font-medium text-gray-400">
              {p.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}