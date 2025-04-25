"use client";

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Rainforest Pools USA" 
              width={200} 
              height={60} 
              priority
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-primary hover:text-secondary font-medium">
              Home
            </Link>
            <Link href="/pools" className="text-primary hover:text-secondary font-medium">
              Pool Models
            </Link>
            <Link href="/gallery" className="text-primary hover:text-secondary font-medium">
              Gallery
            </Link>
            <Link href="/about" className="text-primary hover:text-secondary font-medium">
              About Us
            </Link>
            <Link href="/builders" className="text-primary hover:text-secondary font-medium">
              Builders
            </Link>
            <Link href="/builders/order" className="text-primary hover:text-secondary font-medium">
              Order Form
            </Link>
            <Link href="/contact" className="text-primary hover:text-secondary font-medium">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button 
              className="text-primary p-2 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {/* Hamburger icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  // X icon when menu is open
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  // Hamburger icon when menu is closed
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-md z-10">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-3 py-3">
                <Link 
                  href="/" 
                  className="text-primary hover:text-secondary font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/pools" 
                  className="text-primary hover:text-secondary font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pool Models
                </Link>
                <Link 
                  href="/gallery" 
                  className="text-primary hover:text-secondary font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link 
                  href="/about" 
                  className="text-primary hover:text-secondary font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/builders" 
                  className="text-primary hover:text-secondary font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Builders
                </Link>
                <Link 
                  href="/builders/order" 
                  className="text-primary hover:text-secondary font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order Form
                </Link>
                <Link 
                  href="/contact" 
                  className="text-primary hover:text-secondary font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <div className="bg-white text-primary font-bold py-1 px-3 rounded mr-2">
                  ICC-ES
                </div>
                <span className="text-sm">Certified Quality</span>
              </div>
              <p className="text-sm max-w-md">
                All Rainforest Pools USA fiberglass pools come with a lifetime structural warranty and 15-year surface warranty.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">&copy; {new Date().getFullYear()} Rainforest Pools USA</p>
              <p className="text-sm">Premium Fiberglass Pools & Spas</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
