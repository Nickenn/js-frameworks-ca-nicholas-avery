import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import styles from "./style.module.css";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: [];
  tags: [];
}

function ProductDetails({ product }: { product: IProduct }) {
  const { increaseCartQuantity } = useShoppingCart();

  const handleClick = () => {
    increaseCartQuantity(product.id);
  };

  return (
    <section className={styles.productDetailsContainer}>
      <h3>{product.title}</h3>
      <img src={product.imageUrl} alt={product.title} />
      <div className={styles.productDetails}>
        <p className={styles.productDescription}>{product.description}</p>
        <p>
          {product.price > product.discountedPrice && (
            <span className={styles.discountedPrice}>{product.price} NOK</span>
          )}
        </p>
        <h3 className={styles.productPrice}>
          {product.discountedPrice} <span>NOK</span>
        </h3>
        <button className={styles.ctaBtn} onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
