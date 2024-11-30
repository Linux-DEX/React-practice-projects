import { useQuery } from "@tanstack/react-query";

const Fetch4 = () => {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=10").then(
        (res) => res.json()
      ),
    queryKey: ["comments"],
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  return (
    <div className="h-screen overflow-y-auto p-4 flex flex-col ">
      <h1 className="text-3xl">Email address of users</h1>
      {comments.map((comment) => (
        <h2 key={comment.id} className="users">
          {comment.id}.{comment.email}
        </h2>
      ))}
    </div>
  );
};
export default Fetch4;
