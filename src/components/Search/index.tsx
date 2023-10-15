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
      <div>
        <form className={styles.searchForm}>
          <label className={styles.searchIcon}>
            <BsSearch />
          </label>
          <input
            className={styles.searchInput}
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
          />
        </form>
      </div>
    </section>
  );
}

export default Search;
