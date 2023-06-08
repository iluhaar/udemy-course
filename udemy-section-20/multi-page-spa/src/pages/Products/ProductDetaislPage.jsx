import { Link, useParams } from "react-router-dom";

import styles from "./PDP.module.css";

const ProductDetaislPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.pdp__wrapper}>
      PDP: {id}
      <button className={styles.back_button}>
        <Link to=".." relative="path">
          {" "}
          Back
        </Link>
      </button>
    </div>
  );
};

export default ProductDetaislPage;
