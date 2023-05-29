import { User } from "./User";

import PropTypes from "prop-types";

import styles from "./Users.module.css";
import { UserCard } from "./UserCard";

const UsersListWrapper = ({ users }) => {
  return (
    <>
      <div className={styles.users__wrapper}>
        {users &&
          users.map((user) => (
            <UserCard key={user.id}>
              <User userName={user.userName} age={user.age} />
            </UserCard>
          ))}
      </div>
    </>
  );
};

export default UsersListWrapper;

UsersListWrapper.propTypes = {
  users: PropTypes.array,
};
