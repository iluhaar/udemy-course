import { Link } from "react-router-dom";

import styles from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Red Scarf",
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
  },
  {
    id: "p3",
    title: "Green Trousers",
  },
];

const Products = () => {
  return (
    <div className={styles.content}>
      {DUMMY_PRODUCTS &&
        DUMMY_PRODUCTS.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            {product.title}
          </Link>
        ))}
    </div>
  );
};

export default Products;
