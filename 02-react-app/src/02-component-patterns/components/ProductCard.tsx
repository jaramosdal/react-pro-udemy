import { createContext } from "react";

import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy, decreaseBy } = useProduct({
    onChange,
    product,
    value,
  });
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
