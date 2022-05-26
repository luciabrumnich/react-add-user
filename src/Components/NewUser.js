import React from "react";
import UserForm from "./UserForm";

function NewUser(props) {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
    };
    props.onAddUser(userData);
  };
  return (
    <div className="bg-green-500">
      <UserForm onSaveUserData={saveUserDataHandler} />
    </div>
  );
}

export default NewUser;
