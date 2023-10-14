import { ChangeEvent } from "react";
import styles from "./style.module.css";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ placeholder, handleChange }: SearchProps) {
  return (
    <section className={styles.formContainer}>
      <form className={styles.form}>
        <label className={styles.searchIcon}>
          <BsSearch />
        </label>
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default Search;
