import PropTypes from "prop-types";

import styles from "./Users.module.css";

export const User = ({ userName, age }) => {
  return (
    <div className={styles.user}>
      <p>
        {userName} ({age} years old)
      </p>
    </div>
  );
};

User.propTypes = {
  userName: PropTypes.string,
  age: PropTypes.number,
};
