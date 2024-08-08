"use client"
import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data));
  // }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Cnic</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map(user => (
            <tr key={user.cnic}>
              <td className="py-2 px-4 border">{user.cnic}</td>
              <td className="py-2 px-4 border">{user.name}</td>
              <td className="py-2 px-4 border">{user.email}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
