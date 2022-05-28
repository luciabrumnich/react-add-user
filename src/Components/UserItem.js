import React from "react";

function UserItem(props) {
  return (
    <li>
      <h3 className="text-gray-800 font-bold border p-2 rounded-md">
        {props.name} ({props.age} years old).
      </h3>
    </li>
  );
}

export default UserItem;
