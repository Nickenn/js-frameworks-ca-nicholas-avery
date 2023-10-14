import styles from "./style.module.css";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { BsFillBagFill } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";

import image from "../../assets/logo.png";

function Footer() {
  const { cartQuantity } = useShoppingCart();
  const currentDate = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">
              <BsHouseDoorFill />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <BsMailbox2 />
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout">
              <BsFillBagFill />
              {cartQuantity !== 0 && (
                <span className={styles.cartIndicator}>{cartQuantity}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to="/">
        <img src={image} alt="logo" className={styles.logo} />
      </Link>
      <p>copyright @ {currentDate} Gadgets'n'Stuff </p>
    </footer>
  );
}
export default Footer;
