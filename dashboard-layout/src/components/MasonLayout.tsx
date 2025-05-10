import React from 'react';
import "./MasonLayout.css";

type MasonryLayoutProps = {
  items: { id: number; content: string; height: number }[];
  highlightedIds?: number[];
};

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ items, highlightedIds = [] }) => {
  return (
    <div className="masonry-container">
      {items.map((item) => (
        <div
          key={item.id}
          className={`masonry-item ${highlightedIds.includes(item.id) ? 'highlight' : ''}`}
          style={{ height: item.height }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;

