import React from 'react';

const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-bitcoin mb-8 tracking-tight">
            Welcome to Bitcoin Wales
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 text-gray-300 leading-relaxed">
            Join South Wales' premier Bitcoin community. We meet regularly to discuss Bitcoin, share knowledge, and build connections.
          </p>
          <a
            href="https://www.meetup.com/all-about-bitcoin-meetup-group-wales/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join Our Next Meetup
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;