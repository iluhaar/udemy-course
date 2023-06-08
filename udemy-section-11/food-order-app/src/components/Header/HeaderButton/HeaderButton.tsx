import CartIcon from "./CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderButton = () => {
  return (
    <>
      <button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        Your Cart
        <span className={styles.badge}>1</span>
      </button>
    </>
  );
};

export default HeaderButton;
