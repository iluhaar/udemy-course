import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addNewItem } from "../../store/reducers/cartSlice";

const ProductItem = ({ id, title, price, description }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addNewItem({ id: id, name: title, price, quantity: 1 }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
