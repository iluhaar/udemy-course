import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increaseBy, ShowCounter } from "../store/reducers/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { counter, showCounter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const increaseByHandler = () => {
    dispatch(increaseBy(inputValue));
    setInputValue("");
  };

  const toggleCounterHandler = () => {
    dispatch(ShowCounter());
  };

  useEffect(() => {
    if (showCounter) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [showCounter]);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button className={classes.button} disabled={isDisabled} onClick={incrementHandler}>
          Increment
        </button>
        <button className={classes.button} disabled={isDisabled} onClick={decrementHandler}>
          Decrement
        </button>
        <div className={classes.incrementBy__wrapper}>
          <input type="number" value={inputValue} onChange={(e) => setInputValue(+e.target.value)} />
          <button disabled={isDisabled} onClick={increaseByHandler}>
            Increase by{" "}
          </button>
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
