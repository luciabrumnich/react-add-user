import React from "react";
import UserItem from "./UserItem";

function UsersList(props) {
  return (
        <ul>
          {props.items.map((user) => (
            <UserItem name={user.name} age={user.age} />
          ))}
        </ul>
  );
}

export default UsersList;
