import { useContext } from "react";
import classes from "./Navigation.module.css";
import { AuthContext } from "../../store/auth-context";

const Navigation = ({ onLogout }) => {
  const isLoggedIn = useContext(AuthContext);
  console.info("🚀 ~ file: Navigation.jsx:7 ~ Navigation ~ data:", isLoggedIn);
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
