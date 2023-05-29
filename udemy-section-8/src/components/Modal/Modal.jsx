import PropTypes from "prop-types";

import styles from "./modal.module.css";

export const Modal = ({ setIsOpen, children }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <div className={styles.modalContent}>{children}</div>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  setIsOpen: PropTypes.func,
};
