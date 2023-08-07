import { useCallback, useState } from "react";
import { IUserUpdated } from "../../util/interfaces";
import User from "../User";
import styles from "./UserList.module.css";

interface IUserListProps {
  users: IUserUpdated[];
}

const UserList = ({ users }: IUserListProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  // 6. Implement memoization for the User components to optimize performance.
  // The components should only re-render when the user data is updated.
  const handleClick = useCallback((userId: string) => {
    setSelectedUser(userId);
  }, []);

  return (
    <div className={styles.list}>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          handleClick={() => handleClick(user.id)}
          isSelected={user.id === selectedUser}
        />
      ))}
    </div>
  );
};

export default UserList;
