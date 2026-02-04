export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Hi, I'm Arafah 👋
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        A Computer Systems graduate passionate about Web Development, 
        IoT, and System Integration. I enjoy building clean and functional applications.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-black text-white rounded-lg"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-2 border rounded-lg"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}