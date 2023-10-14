import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { BsFillBagFill } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";

import image from "../../assets/logo-no-background.png";
import styles from "./style.module.css";

function Header() {
  const { cartQuantity } = useShoppingCart();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={image} alt="logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">
              {" "}
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
    </header>
  );
}

export default Header;
