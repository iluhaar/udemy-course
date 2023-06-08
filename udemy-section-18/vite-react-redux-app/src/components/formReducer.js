export const formReducer = (state, action) => {
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

    default:
      return state;
  }
};
