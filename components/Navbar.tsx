'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { target: 'home', label: 'Home' },
    { target: 'about', label: 'About' },
    { target: 'skills', label: 'Skills' },
    { target: 'projects', label: 'Projects' },
    { target: 'contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Smooth scroll TANPA hash & TS-safe
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const offset = 80; // tinggi navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const position = elementRect - bodyRect - offset;

    window.scrollTo({
      top: targetId === 'home' ? 0 : position,
      behavior: 'smooth',
    });

    // jaga URL tetap bersih
    window.history.replaceState(null, '', window.location.pathname);

    closeMenu();
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-lg text-gray-900">
            Habil Yakub Arafah
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm text-gray-600">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="hover:text-gray-900 transition cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-gray-600"
            aria-label="Close Menu"
          >
            <HiX size={28} />
          </button>
        </div>

        <div className="flex flex-col space-y-6 px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="text-left text-lg text-gray-600 hover:text-gray-900 transition"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
