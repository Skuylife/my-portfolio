'use client';

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-lg text-gray-900">Habil Yakub Arafah</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm text-gray-600">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="hover:text-gray-900 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 transition"
            aria-label="Toggle menu"
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
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-600 hover:text-gray-900 transition text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}