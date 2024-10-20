import React, { useState } from "react";
import "./SearchBarAPI.css";

function SearchBarAPI() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);

  const fetchResults = async () => {
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch(
        `http://localhost:8000/search?query=${query}&skip=${skip}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSkip(0);
    await fetchResults();
  };

  const handleNextPage = () => {
    setSkip(skip + limit);
    fetchResults();
  };

  const handlePreviousPage = () => {
    if (skip > 0) {
      setSkip(skip - limit);
      fetchResults();
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul className="results-list">
        {results.map((result, index) => (
          <li key={index} className="result-item">
            <strong>{result.code}</strong> - {result.shortDescription}
            <br />
            {result.longDescription}
          </li>
        ))}
      </ul>

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={skip === 0}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}

export default SearchBarAPI;
