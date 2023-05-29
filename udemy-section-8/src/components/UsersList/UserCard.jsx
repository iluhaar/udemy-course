import PropTypes from "prop-types";

import styles from "./Users.module.css";

export const UserCard = ({ children }) => {
  return <div className={styles.card__wrapper}>{children}</div>;
};

UserCard.propTypes = {
  children: PropTypes.any,
};
