"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { 
      id: "#home",
      path: "/",
      name: "Accueil",
    },
    {
      id: "#about",
      path: "/about",
      name: "À propos",
    },
    {
      id: "#projects",
      path: "/projects",
      name: "Projets",
    },
    {
      id: "#contact",
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 w-full bg-gray-900/95 backdrop-blur-sm dark:border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link 
            href="/" 
            className='text-lg font-bold uppercase text-white hover:text-indigo-500 transition-colors duration-200'
            data-aos="fade-right"
          >
            Alimi Lamidi
          </Link>

          {/* Menu Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            {links.map((link, index) => (
              <Link 
                href={link.id}
                key={link.id} 
                className='hover:text-indigo-500 transition-colors duration-200'
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Menu Burger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='md:hidden hover:text-blue-500 transition-colors duration-200'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className='md:hidden bg-gray-900 py-4'>
            {links.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className='block hover:text-indigo-500 transition-colors duration-200 py-2'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}