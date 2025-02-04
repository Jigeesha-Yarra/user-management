import './App.css'
import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { userName: "Aditya Gupta", userEmail: "aditya@gmail.com", userAge: "22", userUniqueId: '1' },
    { userName: "Vanshita Jaiswal", userEmail: "vanshita@gmail.com", userAge: "21", userUniqueId: '2' },
    { userName: "Sachin Yadav", userEmail: "sachin@gmail.com", userAge: "22", userUniqueId: '3' }
  ]);

  // Handling user addition
  const handleAddUser = (event) => {
    event.preventDefault();
    const newUser = {
      userName: event.target.userName.value,
      userEmail: event.target.userEmail.value,
      userAge: event.target.userAge.value,
      userUniqueId: event.target.userUniqueId.value
    };
    setUsers([...users, newUser]);
  };

  // Handling user deletion
  const handleDeleteUser = (userUniqueId) => {
    setUsers(users.filter(user => user.userUniqueId !== userUniqueId));
  };

  // Handling user update
  const handleUpdateUser = (event) => {
    event.preventDefault();
    const updatedUser = {
      userName: event.target.userName.value,
      userEmail: event.target.userEmail.value,
      userAge: event.target.userAge.value,
      userUniqueId: event.target.userUniqueId.value
    };
    setUsers(users.map(user =>
      user.userUniqueId === updatedUser.userUniqueId ? updatedUser : user
    ));
  };

  return (
    <div>
      <h2>User Management System</h2>

      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userUniqueId}>
              <td>{user.userUniqueId}</td>
              <td>{user.userName}</td>
              <td>{user.userEmail}</td>
              <td>{user.userAge}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.userUniqueId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="userUniqueId" placeholder="User Unique Id" />
        <input type="text" name="userName" placeholder="User Name" />
        <input type="text" name="userEmail" placeholder="User Email" />
        <input type="text" name="userAge" placeholder="User Age" />
        <button type="submit">Submit</button>
      </form>

      <h2>Update User</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="userUniqueId" placeholder="User Unique Id" />
        <input type="text" name="userName" placeholder="User Name" />
        <input type="text" name="userEmail" placeholder="User Email" />
        <input type="text" name="userAge" placeholder="User Age" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default App;
