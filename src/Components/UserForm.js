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
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="my-10 p-5 bg-white w-4/6 rounded-2xl"
    >
      <div className="text-black font-bold">
        <div className="my-2 w-full">
          <label className="py-2 my-2">Username:</label>
          <br />
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            className="border my-3 p-2 w-full rounded-md"
          />
        </div>
        <div className="my-2">
          <label className="py-2 my-2">Age:</label>
          <br />
          <input
            type="number"
            min="16"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
            className="border my-3 p-2 w-full rounded-md"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="text-white bg-purple-900 my-4 py-2 w-28 rounded"
        >
          Add User
        </button>
      </div>
    </form>
  );
}

export default UserForm;
