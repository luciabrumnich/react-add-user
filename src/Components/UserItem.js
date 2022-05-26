import React from "react";

function UserItem(props) {
  return (
    <li>
      <div>
        <h3 className="text-gray-800 font-bold border p-2">
          {props.name} ({props.age} years old).
        </h3>
      </div>
    </li>
  );
}

export default UserItem;
