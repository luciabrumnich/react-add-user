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
    <div>
      <UserForm onSaveUserData={saveUserDataHandler} />
    </div>
  );
}

export default NewUser;
