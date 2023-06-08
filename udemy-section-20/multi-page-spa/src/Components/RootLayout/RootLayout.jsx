import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import styles from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
