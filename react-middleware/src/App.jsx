import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
