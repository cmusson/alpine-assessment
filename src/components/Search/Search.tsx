import React, { useState } from "react";
import { IUserUpdated } from "../../util/interfaces";
import styles from "./Search.module.css"; // Make sure to provide the correct path

interface ISearchProps {
  users: IUserUpdated[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<IUserUpdated[]>>;
}

// 7. Implement searching functionality by name, ID, or friend's ID.
// Allow users to search for users by entering a query in an input field.
// Display only the users that match the search criteria.
// The search should be case-insensitive and match any part of the user's name, ID, or friend's ID.
const Search = ({ users, setFilteredUsers }: ISearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value.toLowerCase();
    setSearchQuery(newQuery);

    const filteredUsers = users.filter((user) => {
      const normalizedName = user.name.toLowerCase();
      const normalizedId = user.id.toLowerCase();
      const friendNamesMatch = user.friendNames.some((friendName) =>
        friendName.toLowerCase().includes(newQuery)
      );

      return (
        normalizedName.includes(newQuery) ||
        normalizedId.includes(newQuery) ||
        friendNamesMatch
      );
    });

    setFilteredUsers(filteredUsers);
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Search Users..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
