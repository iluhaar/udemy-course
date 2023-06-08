import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import RootLayout from "./Components/RootLayout/RootLayout";
import ErrorPage from "./Components/Error/ErrorPage";
import ProductDetaislPage from "./pages/Products/ProductDetaislPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetaislPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
