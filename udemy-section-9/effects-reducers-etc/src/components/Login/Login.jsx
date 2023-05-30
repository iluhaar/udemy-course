import { useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const initialState = { email: "", password: "", isEmailValid: null, isPasswordValid: null };
const formReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_UPDATE": {
      return {
        email: action.value,
        password: state.password,
        isEmailValid: action.value.includes("@") ? true : false,
        isPasswordValid: state.password.trim().length > 6 ? true : false,
      };
    }
    case "PASSWORD_UPDATE": {
      return {
        email: state.email,
        password: action.value,
        isEmailValid: state.email.includes("@") ? true : false,
        isPasswordValid: action.value.trim().length > 6 ? true : false,
      };
    }

    case "ON_PASSWORD_BLUR": {
      return {
        email: state.email,
        password: state.password,
        isEmailValid: state.isEmailValid,
        isPasswordValid: action.value.trim().length > 6 ? true : false,
      };
    }

    case "ON_EMAIL_BLUR": {
      return {
        email: state.email,
        password: state.password,
        isEmailValid: action.value.includes("@") ? true : false,
        isPasswordValid: state.isPasswordValid,
      };
    }
  }
};

const Login = ({ onLogin }) => {
  const [formState, dispatchUpdateForm] = useReducer(formReducer, initialState);

  const emailChangeHandler = (event) => {
    dispatchUpdateForm({ type: "EMAIL_UPDATE", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchUpdateForm({ type: "PASSWORD_UPDATE", value: event.target.value });
  };

  const onBlurEmailHandler = () => {
    dispatchUpdateForm({ type: "ON_EMAIL_BLUR", value: event.target.value });
  };

  const onBlurPasswordHandler = () => {
    dispatchUpdateForm({ type: "ON_PASSWORD_BLUR", value: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(formState.email, formState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${formState.isEmailValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={emailChangeHandler}
            onBlur={onBlurEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${formState.isPasswordValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={passwordChangeHandler}
            onBlur={onBlurPasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formState.isEmailValid && !formState.isPasswordValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
