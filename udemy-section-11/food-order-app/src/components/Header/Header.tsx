import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton/HeaderButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>ReactMeals</h2>
      <HeaderButton />
    </header>
  );
};

export default Header;
