import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (data) => {
    // console.log(data)
    setUsers((prevUserList) => {
      return [...prevUserList, data];
    });
  };

  return (
    <div>
      <AddUser addUser={addNewUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
