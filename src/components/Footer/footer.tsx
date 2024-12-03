import styles from "./footer.module.css"

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h1>Абрашкина Алина</h1>
        <p>Frontend-разработчик</p>
      </div>
      <div className={styles.info}>
        <span>GitHub:&nbsp;<a className={styles.info__link} href="https://github.com/Alinabrbr" target="_blank" rel="noreferrer noopener">https://github.com/Alinabrbr</a></span>
        <span>Tg:&nbsp;<a className={styles.info__link} href="https://t.me/alinabrbr " target="_blank" rel="noreferrer noopener">@Alinabrbr</a></span>
      </div>
    </footer>
  );
}