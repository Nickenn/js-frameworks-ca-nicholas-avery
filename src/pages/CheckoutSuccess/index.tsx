import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";

function CheckoutSuccess() {
  return (
    <main className={styles.successPage}>
      <div>
        <h1>
          Thank you for your purchase!
          <BsFillCartCheckFill className={styles.icon} />
        </h1>
        <div className={styles.info}>
          <p>Your order number is: 0769053</p>
          <p>
            An email has been sent to you with your order confirmation and
            tracking information.
          </p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
export default CheckoutSuccess;
