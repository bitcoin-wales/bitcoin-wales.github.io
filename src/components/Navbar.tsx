import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BitcoinTicker from './BitcoinTicker';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-bitcoin/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img src="/bitcoin.svg" alt="Bitcoin logo" className="h-8 w-8" />
            <span className="text-bitcoin font-bold text-xl tracking-tight">Bitcoin Wales</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/events" className="nav-link flex items-center">
              Events
              <span className="text-red-500 ml-0.5">!</span>
            </Link>
            <a 
              href="https://www.meetup.com/all-about-bitcoin-meetup-group-wales/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
            >
              Join Meetup
            </a>
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="nav-link flex items-center gap-1"
              >
                Social
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a
                      href="https://x.com/DragonBitcoin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-bitcoin"
                      role="menuitem"
                    >
                      X (Twitter)
                    </a>
                    <button
                      disabled
                      className="block w-full text-left px-4 py-2 text-sm text-gray-500 cursor-not-allowed"
                      role="menuitem"
                    >
                      Discord (Coming Soon)
                    </button>
                  </div>
                </div>
              )}
            </div>
            <BitcoinTicker />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;