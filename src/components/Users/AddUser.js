import React, { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(); 

  const addUserHandler = (e) => {
    e.preventDefault();
    // using react Ref
    // console.log(nameInputRef)
    // console.log(nameInputRef.current.value)
    const userName = nameInputRef.current.value
    const userAge = ageInputRef.current.value
    // form validation
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (greather than 0).",
      });
      return;
    }
    // print values
    // console.log({userName, userAge})
    props.addUser({ userName, userAge });
    setError(undefined);

    // reset the form
    resetFormHandler();
  };

  const resetFormHandler = e => {
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  const onConfirmHander = e => {
    setError(undefined);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={onConfirmHander} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Type a username here"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            placeholder="Type a age here"
            ref={ageInputRef}
          />
          <div className={styles["actions-btn"]}>
            <Button type="submit" value="Add User" />
            <Button type="reset" onClick={resetFormHandler}>
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
