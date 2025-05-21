import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    // Fetch blog posts from an API or local data
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul>
        {currentPosts.map((post, index) => (
          <li key={index} className="mb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
