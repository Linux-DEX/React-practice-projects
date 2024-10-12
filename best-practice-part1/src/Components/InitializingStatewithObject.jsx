import React, { useEffect, useState } from "react";
import useFetch from "./CustomHook";

const BlogPost = () => {
  // const [post, setPost] = useState(null);
  // const [loading, setLoading] = useState(true);

  const [post, loading] = useFetch("https://dummyjson.com/post/1");

  // useEffect(() => {
  //   fetch("https://dummyjson.com/post/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPost(data);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <article>
      {loading ? (
        "loading..."
      ) : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </>
      )}
    </article>
  );
};

export default BlogPost;
