import React, { useState } from 'react';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      const storedUser = localStorage.getItem(email);
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
          alert('Login successful');
        } else {
          setError('Invalid password');
        }
      } else {
        setError('User not found');
      }
    } else {
      // Handle registration logic
      if (localStorage.getItem(email)) {
        setError('User already exists');
      } else {
        localStorage.setItem(email, JSON.stringify({ email, password, username }));
        alert('Registration successful');
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button
        onClick={handleToggle}
        className="w-full mt-4 text-blue-500 hover:underline dark:text-blue-400"
      >
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default Authentication;
