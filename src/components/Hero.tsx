import React from 'react';

const Hero = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F7931A] mb-6">
            Welcome to Bitcoin Wales
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join South Wales' premier Bitcoin community. We meet regularly to discuss Bitcoin, share knowledge, and build connections.
          </p>
          <a
            href="https://www.meetup.com/bitcoin-wales/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F7931A] text-black font-semibold px-8 py-3 rounded-full hover:transform hover:-translate-y-1 transition-all duration-200"
          >
            Join Our Next Meetup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;