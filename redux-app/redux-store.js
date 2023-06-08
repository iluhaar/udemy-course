const redux = require("redux");

const initalStore = {
  counter: 0,
};

const counterReducer = (state = initalStore, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      return {
        counter: state.counter + 1,
      };
    }

    case "DECREMENT_COUNTER": {
      return {
        counter: state.counter - 2,
      };
    }

    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestSate = store.getState();

  console.log("🚀 ~ file: redux-store.js:15 ~ counterSubscriber ~ latestSate:", latestSate);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT_COUNTER" });

setTimeout(() => {
  store.dispatch({ type: "DECREMENT_COUNTER" });
}, 1000);
