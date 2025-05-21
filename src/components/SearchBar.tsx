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
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="px-4 py-2 border rounded"
      />
      {results.length > 0 && (
        <ul className="search-results mt-2">
          {results.map((result, index) => (
            <li key={index} className="py-1">
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
