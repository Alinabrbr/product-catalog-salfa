import styles from './card.module.css'
import {TProduct} from "../../utils/types/types";
import {Link, useLocation} from "react-router-dom";
import clsx from "clsx";

type TCardProps = {
  product: TProduct;
  buttonDelete?: () => void;
  buttonAddToFavorite?: () => void;
}
export const Card = ({product, buttonDelete, buttonAddToFavorite}:TCardProps) => {

  const location = useLocation();
  const getActiveClass = (product:TProduct) => product.isFavorite ? styles.active : styles.inactive;

  return (

    <li className={styles.card__item}>
      <button className={styles.card__delete_button} type="button" onClick={buttonDelete}/>
      <Link className={styles.card} to={`/products/${product.id}`} state={{background: location}}>
        <img className={styles.card__image} src={product.image} alt=""/>

        <div className={styles.card__item_title}>
          <h2 className={styles.card__text}>{product.title}</h2>
        </div>
      </Link>

      <div>
        <button className={clsx(styles.card__favorite_button, getActiveClass(product))} type="button" onClick={buttonAddToFavorite}/>
      </div>
    </li>
  );
}