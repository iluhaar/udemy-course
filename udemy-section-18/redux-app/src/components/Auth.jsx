import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/authSlice";
import { formReducer } from "./formReducer";

import classes from "./Auth.module.css";

const initialState = { email: "", password: "", isEmailValid: null, isPasswordValid: null };

const Auth = () => {
  const [formState, dispatchUpdateForm] = useReducer(formReducer, initialState);

  const dispatch = useDispatch();

  const { email, password, isEmailValid, isPasswordValid } = formState;

  const emailChangeHandler = (event) => {
    dispatchUpdateForm({ type: "EMAIL_UPDATE", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchUpdateForm({ type: "PASSWORD_UPDATE", value: event.target.value });
  };

  const onBlurEmailHandler = (event) => {
    dispatchUpdateForm({ type: "ON_EMAIL_BLUR", value: event.target.value });
  };

  const onBlurPasswordHandler = (event) => {
    dispatchUpdateForm({ type: "ON_PASSWORD_BLUR", value: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  const isButtonDisabled = isEmailValid && isPasswordValid ? false : true;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className={classes.control}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => emailChangeHandler(e)}
              onBlur={onBlurEmailHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => passwordChangeHandler(e)}
              onBlur={onBlurPasswordHandler}
            />
          </div>
          <button disabled={isButtonDisabled}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
