import React from "react";

function UserItem(props) {
  return (
    <li>
      <div>
        <h3>
          {props.name}, {props.age}
        </h3>
      </div>
    </li>
  );
}

export default UserItem;
