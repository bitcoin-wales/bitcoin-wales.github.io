import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-[#F7931A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src="/bitcoin.svg" alt="Bitcoin logo" className="h-8 w-8" />
            <span className="text-[#F7931A] font-bold text-xl tracking-tight">Bitcoin Wales</span>
          </Link>
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-[#F7931A] transition-colors font-medium"
            >
              Home
            </Link>
            <a 
              href="https://www.meetup.com/bitcoin-wales/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#F7931A] transition-colors font-medium"
            >
              Join Meetup
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;