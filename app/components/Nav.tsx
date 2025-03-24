"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as LinkR  } from "react-scroll"
import Link  from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { 
      id: "acceuil",
      name: "Accueil",
    },
    {
    id: "about",
      name: "À propos",
    },
    {
      id: "projects",
      name: "Projets",
    },
    {
      id: "contact",
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
              <LinkR 
                to={link.id}
                key={index} 
                className='hover:text-indigo-500 transition-colors duration-200'
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                {link.name}
              </LinkR>
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
          <div className='md:hidden bg-gray-900/50 space-y-2 py-4'>
            {links.map((link) => (
              <LinkR 
                to={link.id} 
                className='block hover:text-indigo-500 transition-colors duration-200 py-2'
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </LinkR>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}