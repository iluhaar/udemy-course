import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notificaton";
import { getCartData, sendCartData } from "./store/reducers/cartActions";

let isInit = true;

function App() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);
  const { notification, isShowCart } = useSelector((state) => state.uiState);

  useEffect(() => {
    if (isInit) {
      dispatch(getCartData());
      isInit = false;
      return;
    }

    if (cart.isChanged) {
      dispatch(
        sendCartData({
          items: cart.items || [],
          totalQuantity: cart.totalQuantity,
        })
      );
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
