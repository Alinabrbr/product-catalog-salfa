import styles from './products.module.css'
import {TProduct, useAppSelector} from "../../utils/types/types";
import {Card} from "../../components/Card/card";
import {productsArray} from "../../services/actions/actionsSelector";

export const Products = () => {

  const products: TProduct[] = useAppSelector(productsArray);

  const AddToCart = (product: TProduct): void => {
  }

  return (
    <section className={styles.products}>
      <ul className={styles.products__list}>
        {products?.map((product: TProduct) => (<Card key={product.id} product={product} buttonAdd={() => AddToCart(product)}/>))}
      </ul>
    </section>
  );
}