import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    // Simulate search results
    const simulatedResults = ['Bitcoin', 'Blockchain', 'Cryptocurrency', 'Wallet', 'Mining'];
    const filteredResults = simulatedResults.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="px-4 py-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 mt-1 rounded shadow-lg z-10">
          {results.map((result, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
