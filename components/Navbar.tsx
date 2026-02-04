'use client';

import { MouseEvent, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { target: "home", label: "Home" }, // Ganti href jadi target id
    { target: "about", label: "About" },
    { target: "skills", label: "Skills" },
    { target: "projects", label: "Projects" },
    { target: "contact", label: "Contact" },
  ];

  // Fungsi untuk scroll tanpa mengubah URL
  const handleScroll = (e: MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
    e.preventDefault(); // Mencegah perubahan URL
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Sesuaikan dengan tinggi navbar Anda
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: targetId === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }
    closeMenu(); // Tutup menu di mobile setelah klik
  };

  return (
    <>
      <nav className="w-full fixed top-0 bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-lg text-gray-900">Habil Yakub Arafah</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm text-gray-600">
            {navLinks.map((link) => (
              <button 
                key={link.target} 
                onClick={(e) => handleScroll(e, link.target)}
                className="hover:text-gray-900 transition cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 transition"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Slide */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-gray-600">
            <HiX size={28} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={(e) => handleScroll(e, link.target)}
              className="text-left text-gray-600 hover:text-gray-900 transition text-lg"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}