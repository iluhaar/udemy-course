import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import styles from "./modal.module.css";

const ModalWrapper = ({ setIsOpen, children }) => {
  console.info("🚀 ~ file: Modal.jsx:7 ~ ModalWrapper ~ { setIsOpen, children }:", { setIsOpen, children });
  return <>{setIsOpen && createPortal(<Modal setIsOpen={setIsOpen}>{children} </Modal>, document.body)}</>;
};

export default ModalWrapper;

export const Modal = ({ setIsOpen, children }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />{" "}
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

ModalWrapper.propTypes = {
  children: PropTypes.any,
  setIsOpen: PropTypes.func,
};

Modal.propTypes = {
  children: PropTypes.any,
  setIsOpen: PropTypes.func,
};
