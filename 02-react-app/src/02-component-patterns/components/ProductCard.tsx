import { createContext } from "react";

import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy, decreaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        decreaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
