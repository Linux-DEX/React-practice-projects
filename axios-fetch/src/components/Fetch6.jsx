import React, { useState, useEffect, useRef } from 'react';

const Fetch6 = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const controller = useRef(null); // AbortController reference

  // Function to start fetching data
  const startFetch = async () => {
    setIsLoading(true);
    setError(null);
    setData(null);

    // Initialize the AbortController
    controller.current = new AbortController();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.current.signal,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch request canceled');
      } else {
        setError('Error fetching data');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Function to cancel the fetch request
  const cancelFetch = () => {
    if (controller.current) {
      controller.current.abort(); // Abort the fetch request
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="fetch-container p-4">
      <h1 className="text-2xl font-bold mb-4">Fetch Data with Cancel</h1>

      {/* Button to start fetching */}
      <button
        onClick={startFetch}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? 'Fetching...' : 'Start Fetch'}
      </button>

      {/* Button to cancel fetch */}
      <button
        onClick={cancelFetch}
        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-4"
        disabled={!isLoading}
      >
        Cancel Fetch
      </button>

      {/* Show loading, error, or fetched data */}
      {isLoading && !error && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <div className="mt-4">
          <h2 className="font-bold">Fetched Posts:</h2>
          <ul>
            {data.slice(0, 5).map((post) => (
              <li key={post.id}>
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Fetch6;
