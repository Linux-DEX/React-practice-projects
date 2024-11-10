import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  _id: string; 
  name: string;
  email: string;
  userId: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); 
  // const [newUser, setNewUser] = useState<{ email: string }>({ email: '' });  
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);  
    } catch (err: any) {
      setError('Error fetching users');
    }
  };

  // const handleAddUser = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!newUser.email ) {
  //     setError('Please fill all fields');
  //     return;
  //   }

  //   try {
  //     await axios.post('http://localhost:5000/users', newUser);
  //     setNewUser({ email: "" }); 
  //     fetchUsers();  
  //   } catch (err: any) {
  //     setError('Error adding user');
  //   }
  // };

  useEffect(() => {
    fetchUsers();  

    const intervalId = setInterval(() => {
      console.log("fetch user")
      fetchUsers();
    }, 5000);

    return () => {
      console.log("clear interval value")
      clearInterval(intervalId)
    };  
  }, []);

  return (
    <div>
      <h1>User Management</h1>

      {/* <form onSubmit={handleAddUser}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form> */}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>{user.name}</strong> - {user.email} (User ID: {user.userId})
          </li>
        ))}
      </ul>
      <img src="https://strapi.dhiwise.com/uploads/incremental_static_regeneration_a_revolution_in_react_app_5_215100e812.jpg?w=1920&q=75" alt="" />
    </div>
  );
};

export default App;
