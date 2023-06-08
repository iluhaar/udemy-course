import { updateCart } from "./cartSlice";
import { showNotification } from "./uiSlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("https://udemy-course-a957e-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Fetching cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("https://udemy-course-a957e-default-rtdb.firebaseio.com/cart.json");

      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const data = response.json();

      return data;
    };

    try {
      const cartData = await sendRequest();

      dispatch(updateCart(cartData));
      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data fatched successfully!",
        })
      );
    } catch (error) {
      console.log("🚀 ~ file: cartActions.js:70 ~ return ~ cartData:", error);

      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
