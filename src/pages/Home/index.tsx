import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import Hero from "../../components/Hero";
import Search from "../../components/Search";
import ProductList from "../../components/ProductList";
import styles from "./styles.module.css";

interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: [];
}

function Home() {
  const [searchField, setSearchField] = useState("");
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

  return (
    <main className={styles.container}>
      <Hero />
      <Search
        placeholder="Search products"
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <ProductList
        products={products.filter((product) =>
          product.title.toLowerCase().includes(searchField.toLowerCase())
        )}
      />
    </main>
  );
}
export default Home;
