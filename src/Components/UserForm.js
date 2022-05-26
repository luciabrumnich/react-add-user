import React, { useState } from "react";

function UserForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: enteredName,
      age: enteredAge,
    };

    props.onSaveUserData(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              min="16"
              step="1"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
