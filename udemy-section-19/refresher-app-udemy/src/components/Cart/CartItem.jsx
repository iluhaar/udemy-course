import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { decreaseQuantity, increaseQuantity, removeItem } from "../../store/reducers/cartSlice";

const CartItem = ({ id, title, quantity, total, price }) => {
  const dispatch = useDispatch();

  const onIncreaseHandler = () => {
    dispatch(increaseQuantity(id));
  };
  const onDecreaseHandler = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    } else {
      dispatch(removeItem(id));
    }
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onDecreaseHandler}>-</button>
          <button onClick={onIncreaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
