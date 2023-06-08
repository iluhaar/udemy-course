import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
