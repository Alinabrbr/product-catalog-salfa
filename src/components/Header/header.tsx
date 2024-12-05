import React from "react";
import styles from "./header.module.css"
import clsx from "clsx";
import { Link} from 'react-router-dom'

export const Header = () => {


  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={clsx('text_type_heading-main')}>ICE-CREAM</h1>
      </Link>
    </header>
  );
}