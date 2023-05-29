import { useState } from "react";
import "./App.css";
import { AddNewUserForm } from "./components/AddNewUser/AddNewUserForm";
import UsersList from "./components/UsersList/UsersListWrapper";

function App() {
  const [users, setUsers] = useState([]);

  const AddNewUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <AddNewUserForm AddNewUser={AddNewUser} />
      <br />
      <UsersList users={users} />{" "}
    </>
  );
}

export default App;
