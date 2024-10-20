import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import "./FazzySearch.css";

const FazzySearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/searchall");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      localStorage.setItem("searchData", JSON.stringify(jsonData));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("searchData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["code", "shortDescription", "longDescription"],
      includeScore: true,
      threshold: 0.4,
    });

    const results = fuse.search(searchQuery);
    setResults(results.map((result) => result.item));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Enter search query"
        className="search-input"
      />

      {error && <p>Error: {error}</p>}

      <ul className="results-list">
        {results.length === 0 && query && <li>No results found</li>}
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
