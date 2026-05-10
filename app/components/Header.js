"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-surface/90 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between items-center w-full px-gutter py-sm max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-headline-md">diversity_1</span>
            <span className="text-headline-md font-bold text-on-surface">Kindred</span>
          </div>
          <div className="hidden md:flex gap-lg items-center">
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/">
              Home
            </Link>
            
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/programs">
              Programs
            </Link>

            <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/impact">
              Impact
            </Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/stories">
              Stories
            </Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="/volunteer">
              Volunteer
            </Link>
            <a className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold hover:shadow-md transition-all active:scale-95" href="/donate">
              Donate
            </a>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <a className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full font-bold text-sm" href="/donate">Donate</a>
            <button 
              onClick={toggleMenu}
              className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[32px]">menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        
        {/* Sidebar */}
        <div className="fixed right-0 top-0 h-full w-80 bg-surface shadow-2xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-headline-md">diversity_1</span>
                <span className="text-headline-md font-bold text-primary">Kindred</span>
              </div>
              <button 
                onClick={toggleMenu}
                className="text-on-surface-variant hover:bg-surface-container p-2 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                <Link 
                  href="/" 
                  onClick={toggleMenu}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-primary font-bold font-label-md text-label-md"
                >
                  Home
                </Link>
                
                <Link 
                  href="/programs" 
                  onClick={toggleMenu}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-label-md text-label-md"
                >
                  Programs
                </Link>

                <Link 
                  href="/impact" 
                  onClick={toggleMenu}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-label-md text-label-md"
                >
                  Impact
                </Link>

                <Link 
                  href="/stories" 
                  onClick={toggleMenu}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-label-md text-label-md"
                >
                  Stories
                </Link>

                <Link 
                  href="/volunteer" 
                  onClick={toggleMenu}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-label-md text-label-md"
                >
                  Volunteer
                </Link>

                <Link 
                  href="/annual-report" 
                  onClick={toggleMenu}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant font-label-md text-label-md"
                >
                  Annual Report
                </Link>
              </div>
              
              {/* Donate Button */}
              <div className="mt-6 pt-6 border-t border-outline-variant">
                <a 
                  href="/donate" 
                  onClick={toggleMenu}
                  className="block w-full bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-bold hover:shadow-md transition-all active:scale-95 text-center"
                >
                  Donate
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
