import { Link } from "react-router-dom";
import styles from "./style.module.css";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
}

interface IProductListProps {
  products: IProduct[];
}

function ProductList({ products }: IProductListProps) {
  const productItem = products.map((product) => {
    const { id, imageUrl, title, price, discountedPrice } = product;
    const discount = discountedPrice < price;
    const discountValue = (((price - discountedPrice) / price) * 100).toFixed(
      0
    );

    return (
      <div key={id} className={styles.product}>
        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
          <img src={imageUrl} alt="product image" />
          <h4 className={styles.pruductTitle}>{title}</h4>
        </Link>
        <div>
          {discount ? (
            <div>
              <span className={styles.sale}>{discountedPrice} NOK</span>
              <span className={styles.discountedPrice}>{price} NOK</span>
              <div className={styles.discount}>{discountValue} %</div>
            </div>
          ) : (
            <div>
              <span className={styles.price}>{discountedPrice} NOK</span>
            </div>
          )}
        </div>
        <div>
          <Link className={styles.viewProduct} to={`/product/${id}`}>
            View product
          </Link>
        </div>
      </div>
    );
  });
  return <section className={styles.container}>{productItem}</section>;
}

export default ProductList;
