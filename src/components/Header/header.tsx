import React from "react";
import styles from "./header.module.css"

export const Header = () => {


  return (
    <header className={styles.header}>
      <h1>Каталог продуктов</h1>
      <div className={styles.cart}>

      </div>
    </header>
  );
}