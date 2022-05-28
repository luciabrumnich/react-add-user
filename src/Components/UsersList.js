import React from "react";
import UserItem from "./UserItem";

function UsersList(props) {
  return (
    <div className='bg-white w-4/6 rounded-2xl'>
      <ul className='space-y-4 p-5'>
        {props.items.map((user) => (
          <UserItem name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
