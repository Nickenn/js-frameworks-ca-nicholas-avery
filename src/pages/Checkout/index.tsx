import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "../../components/CartItem";
import { useApi } from "../../hooks/useApi";
import styles from "./styles.module.css";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

function Checkout() {
  const { cartItems, removeAllFromCart } = useShoppingCart();
  const { data, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );
  const products = data as IProduct[];

  if (isLoading) {
    return <div>Page is loading</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      const item = products.find((i) => i.id === cartItem.id);
      return total + (item?.discountedPrice || 0) * cartItem.quantity;
    }, 0);

    return totalPrice.toFixed(2);
  };

  return (
    <main className={styles.cartPage}>
      <h2>Shopping Cart</h2>
      <section className={styles.cartContainer}>
        {cartItems.length === 0 ? (
          <div>
            <h3>Your Shopping Cart is empty.</h3>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        )}
        <div className={styles.cartTotal}>
          <h2>Checkout Summary:</h2>
          <div>Shipping cost: 169 NOK</div>
          <h3>
            Subtotal
            <span className={styles.totalPrice}>{getTotalPrice()}</span> NOK
          </h3>
          <Link style={{ textDecoration: "none" }} to="/checkout/success">
            <button
              className={styles.checkoutBtn}
              onClick={() => removeAllFromCart()}
            >
              Complete checkout
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Checkout;
