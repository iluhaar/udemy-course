import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleCart } from "../../store/reducers/uiSlice";
import { useState } from "react";

const CartButton = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toggleCart(!showCart));
    setShowCart(!showCart);
  };

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      {totalQuantity < 1 ? <> </> : <span className={classes.badge}>{totalQuantity}</span>}
    </button>
  );
};

export default CartButton;
