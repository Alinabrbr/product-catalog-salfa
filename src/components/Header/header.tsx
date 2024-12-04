import React from "react";
import styles from "./header.module.css"
import clsx from "clsx";

export const Header = () => {


  return (
    <header className={styles.header}>
      <h1 className={clsx('text_type_heading-main')}>ICE-CREAM</h1>
    </header>
  );
}