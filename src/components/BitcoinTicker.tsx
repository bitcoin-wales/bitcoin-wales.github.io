import React, { useEffect, useState } from 'react';

const BitcoinTicker: React.FC = () => {
  const [price, setPrice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp';
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        
        const res = await fetch(url, options);

        const data = await res.json();
        if (data.bitcoin && data.bitcoin.gbp) {
          setPrice(data.bitcoin.gbp.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }));
        } else {
          setError(' N/A 1');
        }
      } catch (e) {
        setError(`Error: ${(e instanceof Error) ? e.message : String(e)}`);
      }
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // update every 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="ml-4 px-3 py-1 rounded bg-bitcoin text-black font-semibold text-sm shadow flex items-center gap-2">
      {price ? price : error ? error : '...'}
      <a href="https://coingecko.com/" target="_blank" rel="noopener noreferrer" title="Powered by CoinGecko">
        <img src="/src/assets/cg.png" alt="Coingecko logo" className="h-4 w-4" />
      </a>
    </span>
  );
};

export default BitcoinTicker;
