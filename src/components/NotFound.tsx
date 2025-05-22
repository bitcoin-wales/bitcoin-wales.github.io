import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#F7931A] mb-4">404 - Page Not Found</h1>
        <p className="mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-[#F7931A] hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;