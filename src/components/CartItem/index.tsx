import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { BsFillFileMinusFill } from "react-icons/bs";

interface ICartItem {
  id: number;
  quantity: number;
}

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

function CartItem({ id }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  useEffect(() => {
    const url = `https://api.noroff.dev/api/v1/online-shop/${id} `;
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  if (isLoading) {
    return <div>Page is loading</div>;
  }

  if (isError || !product) {
    return <div>Error loading data</div>;
  }

  return (
    <div className={styles.cartItem}>
      <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
        <img
          className={styles.link}
          src={product.imageUrl}
          alt="product picture"
        />
      </Link>
      <div>
        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
          <h2>{product.title}</h2>{" "}
        </Link>
        <p className={styles.itemNumber}>Item number: {product.id}</p>
        <div className={styles.price}>{product.discountedPrice} NOK</div>
      </div>

      <div className={styles.quantity}>
        <button
          className={styles.quantityBtn}
          onClick={() => increaseCartQuantity(id)}
        >
          Add item
          <BsPlusSquareFill className={styles.icon} />
        </button>
        <button
          className={styles.quantityBtn}
          onClick={() => decreaseCartQuantity(id)}
        >
          Remove item
          <BsFillFileMinusFill className={styles.icon} />
        </button>
        <div className={styles.productQuantity}>{getItemQuantity(id)}</div>
      </div>
      <button className={styles.removeBtn} onClick={() => removeFromCart(id)}>
        Remove all
        <BsFillTrash3Fill className={styles.icon} />
      </button>
    </div>
  );
}

export default CartItem;
