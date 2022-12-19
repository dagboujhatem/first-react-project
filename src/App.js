import React, { useState, Fragment } from "react";
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
    // first way to use react fragment
    // <React.Fragment>
    //   <AddUser addUser={addNewUser} />
    //   <UsersList users={users} />
    // </React.Fragment>

    // second way to use react fragment
    //   <Fragment>
    //   <AddUser addUser={addNewUser} />
    //   <UsersList users={users} />
    // </Fragment>

    // third way to use react fragment
    <>
      <AddUser addUser={addNewUser} />
      <UsersList users={users} />
    </>
  );
}

export default App;
