import React, { useState, useEffect } from "react";
import request from "../api/axios_instance";

const Axios3 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // we can use like this also
        // const response = await axios.get("/posts");
        const response = await request({
          url: "posts",
          method: "GET",
        });
        setPosts(response.data);
      } catch (e) {
        console.error("Error in GET request:", e);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Posts:</h2>
        <div className="max-h-[100vh] overflow-y-auto">
          {" "}
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="p-4 border border-gray-300 rounded-md shadow-sm"
              >
                <strong className="text-xl">{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Axios3;
