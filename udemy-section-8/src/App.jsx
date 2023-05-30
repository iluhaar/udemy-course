import { useState } from "react";
import "./App.css";
import { AddNewUserForm } from "./components/AddNewUser/AddNewUserForm";
import UsersList from "./components/UsersList/UsersListWrapper";

function App() {
  const [users, setUsers] = useState([]);

  const AddNewUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  const removeUser = (id) => {
    setUsers((prev) => {
      const updatedUsers = prev.filter((user) => user.id !== id);
      return updatedUsers;
    });
  };

  return (
    <>
      <AddNewUserForm AddNewUser={AddNewUser} />
      <br />
      <UsersList users={users} removeUser={removeUser} />{" "}
    </>
  );
}

export default App;
