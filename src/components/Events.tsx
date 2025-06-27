import React from 'react';

const Events = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-bitcoin mb-8">Upcoming Events</h1>
      <div className="grid gap-8">
        <div className="bg-gray-900 rounded-lg p-6 border border-bitcoin/20">
          <h2 className="text-2xl font-bold text-bitcoin mb-2">Bitcoin Beach Retreat (11-14 July 2025)</h2>
          <p className="text-gray-300 mb-4">
            Join us for an exclusive Bitcoin retreat experience in Wales. Connect with fellow Bitcoiners,
            learn from experts, and enjoy the beautiful Welsh coast.
          </p>
          <a 
            href="https://bitcoinretreat.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;