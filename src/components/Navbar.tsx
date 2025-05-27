import React from 'react';
import { Link } from 'react-router-dom';
import BitcoinTicker from './BitcoinTicker';

const Navbar = () => {
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
            <BitcoinTicker />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;