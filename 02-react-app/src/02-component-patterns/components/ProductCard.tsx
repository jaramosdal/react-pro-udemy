import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

const ProductCard = () => {
  const { counter, increaseBy, decreaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffe Mug"
      />
      <span className={styles.productDescription}>Coffe Mug</span>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => decreaseBy(1)}>
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
