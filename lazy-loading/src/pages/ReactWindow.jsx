import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import axios from 'axios';

const ReactWindow = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Fetch items from the API
  const fetchItems = async (page) => {
    if (loading || !hasMore) return; // Prevent multiple concurrent requests

    setLoading(true);

    try {
      // Make an API request to fetch data
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: page,
          _limit: 20, // Limit to 20 items per page (change as needed)
        },
      });

      const newItems = response.data;

      // If there are no new items, set hasMore to false
      if (newItems.length < 20) {
        setHasMore(false);
      }

      // Append new items to the existing list
      setItems((prevItems) => [...prevItems, ...newItems]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchItems(page);
  }, [page]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="w-full max-w-xl bg-white p-4 rounded-lg shadow-lg overflow-hidden">
        <List
          height={500}
          itemCount={items.length}
          itemSize={100} // Adjust item height based on content
          width="100%"
          onItemsRendered={({ visibleStopIndex }) => {
            // Load more items when the last visible item is rendered
            if (visibleStopIndex === items.length - 1 && hasMore) {
              setPage((prevPage) => prevPage + 1); // Increment page to fetch next batch
            }
          }}
        >
          {({ index, style }) => (
            <div style={style} className="flex items-center justify-between p-4 border-b border-gray-200">
              <div>
                <h3 className="font-bold text-lg">{items[index].title}</h3>
                <p className="text-sm text-gray-600">{items[index].body}</p>
              </div>
              {loading && index === items.length - 1 && (
                <div className="text-sm text-gray-500">Loading...</div>
              )}
            </div>
          )}
        </List>

        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactWindow;
