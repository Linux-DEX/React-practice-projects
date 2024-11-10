import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  email: string;
  userId: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get('http://localhost:5000/users');
  return response.data;
};

const FetchUserM2: React.FC = () => {
  const { data: users, error, isLoading } = useQuery({
    queryKey: ['users'],  
    queryFn: fetchUsers,  
    refetchInterval: 5000, 
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <div style={{ color: 'red' }}>Error fetching users</div>}

      <h2>Users List</h2>
      <ul>
        {users?.length ? (
          users.map((user) => (
            <li key={user._id}>
              <strong>{user.name}</strong> - {user.email} (User ID: {user.userId})
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default FetchUserM2;
