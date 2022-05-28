import NewUser from "./Components/UserForm";
import UsersList from "./Components/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="bg-black text-white m-36">
      <NewUser onAddUser={addUserHandler} />
      <UsersList items={users} />
    </div>
  );
}

export default App;
