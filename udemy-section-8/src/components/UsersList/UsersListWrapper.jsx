import { User } from "./User";

import PropTypes from "prop-types";

import styles from "./Users.module.css";
import { UserCard } from "./UserCard";

const UsersListWrapper = ({ users, removeUser }) => {
  return (
    <>
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id} className={styles.users__wrapper} onClick={() => removeUser(user.id)}>
              <UserCard>
                <User userName={user.userName} age={user.age} />
              </UserCard>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UsersListWrapper;

UsersListWrapper.propTypes = {
  users: PropTypes.array,
  removeUser: PropTypes.func,
};
