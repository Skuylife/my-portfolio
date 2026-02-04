import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-gray-600">Arafah.dev</span>

        <div className="space-x-6 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}