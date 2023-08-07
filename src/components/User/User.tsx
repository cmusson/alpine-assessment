import React from "react";
import { IUserUpdated } from "../../util/interfaces";
import styles from "./User.module.css";

interface IUserProps {
  user: IUserUpdated;
  handleClick: () => void;
  isSelected: boolean;
}

// 6. Implement memoization for the User components to optimize performance.
// The components should only re-render when the user data is updated.
const User = React.memo(({ user, handleClick, isSelected }: IUserProps) => {
  const { image, name, email, rank, friendNames } = user;
  const containerClassName = isSelected
    ? `${styles.container} ${styles.selected}`
    : styles.container;

  return (
    <div className={containerClassName} onClick={handleClick}>
      <div className={styles.top}>
        <img src={image} alt="user image" />
        <div className={styles.info}>
          <div className={styles.nameEmail}>
            <h2 className={styles.bold}>{name}</h2>
            <p className={styles.email}>{email}</p>
          </div>
          <h2 className={styles.bold}>{`Rank : ${rank}`}</h2>
        </div>
      </div>
      <h2 className={styles.bold}>{friendNames.join(", ")}</h2>
    </div>
  );
});

export default User;
