import useFetch from "react-fetch-hook";

const Fetch5 = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <div className="h-screen overflow-y-auto p-4 ">
      <h1 className="font-bold text-center">Post of users</h1>
      {posts.map((post) => (
          <div key={post.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
          >
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch5;
