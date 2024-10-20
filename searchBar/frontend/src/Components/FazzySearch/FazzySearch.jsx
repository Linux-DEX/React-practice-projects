import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import "./FazzySearch.css"; // Include your styles

const FazzySearch = () => {
  const [query, setQuery] = useState(""); // State to store user query
  const [results, setResults] = useState([]); // State to store search results
  const [data, setData] = useState([]); // State to store fetched data
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the API and store it in local storage
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/search?query=all"); // Modify the endpoint as needed
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      localStorage.setItem("searchData", JSON.stringify(jsonData)); // Store fetched data in local storage
    } catch (err) {
      setError(err.message);
    }
  };

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("searchData");
    if (storedData) {
      setData(JSON.parse(storedData)); // Parse and set stored data
    } else {
      fetchData(); // Fetch data if not available in local storage
    }
  }, []);

  // Function to perform fuzzy search
  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    // Fuzzy search setup
    const fuse = new Fuse(data, {
      keys: ["code", "shortDescription", "longDescription"], // Adjust keys based on your data structure
      includeScore: true,
      threshold: 0.4, // Adjust threshold for fuzzy matching
    });

    // Perform the search
    const results = fuse.search(searchQuery);
    setResults(results.map((result) => result.item)); // Extract matched items
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch} // Update query state and perform search
        placeholder="Enter search query"
        className="search-input"
      />

      {error && <p>Error: {error}</p>}

      <ul className="results-list">
        {results.map((result) => (
          <li key={result._id} className="result-item">
            <strong>{result.code}</strong> - {result.shortDescription}
            <br />
            {result.longDescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FazzySearch;
