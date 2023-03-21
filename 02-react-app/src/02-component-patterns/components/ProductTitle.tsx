import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

interface Props {
  title?: string;
  className?: string;
}

export const ProductTitle = ({ title, className }: Props) => {
  const { product } = useContext(ProductContext);
  let titleToShow = title ?? product.title;

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {titleToShow}
    </span>
  );
};
