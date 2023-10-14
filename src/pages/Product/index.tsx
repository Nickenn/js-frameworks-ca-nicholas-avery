import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";
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

function Product() {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

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
    return <main>Error loading data..</main>;
  }

  return (
    <main className={styles.container}>
      <ProductDetails product={product} />
    </main>
  );
}

export default Product;
