import React, { useState } from 'react'
import MasonryLayout from "../components/MasonLayout.tsx";
import "./Dashboard1.css"

const items = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  content: `Item ${i + 1}`,
  height: 100 + Math.floor(Math.random() * 400),
}));

const Dashboard1 = () => {
  const [highlightedIds, setHighlightedIds] = useState<number[]>([]);

  const highlightEven = () => {
    const evens = items.filter((_, i) => i % 2 === 0).map((item) => item.id);
    setHighlightedIds(evens);
  };

  const highlightOdd = () => {
    const odds = items.filter((_, i) => i % 2 !== 0).map((item) => item.id);
    setHighlightedIds(odds);
  };

  const clearHighlights = () => {
    setHighlightedIds([]);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard 1</h1>
        <div className="button-group">
          <button className="superscript-button" onMouseEnter={highlightEven} onMouseLeave={clearHighlights}>
            <span className="sup-text">Hover</span>
            <span className="base-text">Button A</span>
          </button>
          <button onMouseEnter={highlightOdd} onMouseLeave={clearHighlights}>
            Hover Button B
          </button>
        </div>
      </div>
      <MasonryLayout items={items} highlightedIds={highlightedIds} />
    </div>
  );
};

export default Dashboard1;

