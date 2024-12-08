import React from "react";
import styles from "./Error.module.css";
import clsx from "clsx";

type TError = {
  show?: boolean;
  error?:  any;
  closeError?: any;
}

export const Error = ({show, error, closeError}:TError): JSX.Element => {

  return (
    <div className={clsx(styles.container, show ? styles.show : "")} onClick={() => closeError()}>
      <h2 className={styles.title}>Error</h2>
      {error && <p className={styles.text}>{error}</p>}
    </div>
  );
}