import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search"; // Make sure to provide the correct path
import UserList from "./components/UserList"; // Make sure to provide the correct path
import { IUser, IUserUpdated } from "./util/interfaces";
import { formatUser } from "./util/functions";

function App() {
  const [users, setUsers] = useState<IUserUpdated[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUserUpdated[]>([]);

  // 2. Fetch the users' data from an API endpoint when the component mounts.
  // The API response should be an array of User objects.
  const fetchUsers = async () => {
    fetch("sampleData/usersData.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedUsers = data.map((user: IUser) => {
          return formatUser(user, data);
        }); // Format each user
        setUsers(() => formattedUsers);
        setFilteredUsers(() => formattedUsers);
      })
      .catch((error) => {
        console.error("Error fetching user data", error);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main>
      <Search users={users} setFilteredUsers={setFilteredUsers} />
      <UserList users={filteredUsers} />
    </main>
  );
}

export default App;
