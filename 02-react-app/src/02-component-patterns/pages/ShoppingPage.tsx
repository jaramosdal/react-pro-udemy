import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {(mensaje) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.5)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <h1>{mensaje}</h1>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
