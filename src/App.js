import NewUser from "./Components/UserForm";
import UsersList from "./Components/UsersList";
import { useState } from "react";

/* const initial_users = [
  { name: "Lu", age: "35" },
  { name: "Fran", age: "28" },
  { name: "Nube", age: "6" },
]; */
function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsers((prevUsers) => {
      return [...prevUsers, {name: userName, age: userAge}];
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
