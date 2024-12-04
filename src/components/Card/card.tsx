import styles from './card.module.css'
import {TProduct} from "../../utils/types/types";

type TCardProps = {
  product: TProduct;
  buttonAdd?: () => void;
}
export const Card = ({product, buttonAdd}:TCardProps) => {

  return (
    <li className={styles.card__item}>
      <article>
        <button className={styles.card__cart_button} type="button" onClick={buttonAdd}/>
        <img className={styles.card__image} src={product.image} alt=""/>

        <div className={styles.card__item_title}>
          <h2 className={styles.card__text}>{product.title}</h2>
          <div>
            <button className={styles.card__favorite_button} type="button"></button>
          </div>
        </div>
      </article>
    </li>
  );
}