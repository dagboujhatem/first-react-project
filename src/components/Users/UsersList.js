import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div>
      {props.users.length === 0 && 
      <Card className={styles.users}>
        <h2>No users found</h2>
        </Card>
        }
      {props.users.length > 0 && (
        <Card className={styles.users}>
          <ul>
            {props.users.map((item, index) => {
              return (
                <li key={index}>
                  {item.userName} ({item.userAge} years old)
                </li>
              );
            })}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default UsersList;
