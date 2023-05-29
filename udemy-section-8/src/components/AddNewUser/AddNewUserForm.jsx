import { useState } from "react";

import PropTypes from "prop-types";

import styles from "./AddNewUser.module.css";
import { Modal } from "../Modal/Modal";

export const AddNewUserForm = ({ AddNewUser }) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const onSubmitHandler = () => {
    event.preventDefault();

    if (userName === "" || age === "") {
      setIsOpen(true);
    } else {
      const user = {
        userName,
        age: +age,
        id: Math.random(),
      };

      AddNewUser(user);

      setUserName("");
      setAge("");
    }
  };

  return (
    <div className={styles.form__wrapper}>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <div>All fields are required</div>
        </Modal>
      )}
      <form onSubmit={onSubmitHandler}>
        <div className={styles.form_controls}>
          <label>
            <h3>Username</h3>
          </label>
          <input
            type="text"
            value={userName}
            placeholder="Username goes here.."
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>
            <h3>Age (Years)</h3>
          </label>
          <input
            type="number"
            min={0}
            max={100}
            value={age}
            placeholder="Age goes here.."
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.add_new_user__button}>
          {" "}
          Add new user
        </button>
      </form>
    </div>
  );
};

AddNewUserForm.propTypes = {
  AddNewUser: PropTypes.func,
};
