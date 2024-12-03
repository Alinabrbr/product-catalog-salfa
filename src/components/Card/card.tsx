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
        <h2 className={styles.card__title}>{product.title}</h2>
        <img className="card__image" src={product.image} alt=""/>
        <div className={styles.card__item_info}>
          <div>
            <button className={styles.card__cart_button} type="button" onClick={buttonAdd}>Добавить в избранное</button>
            <p className="card__cart-counter"></p>
          </div>
        </div>
      </article>
    </li>
  );
}