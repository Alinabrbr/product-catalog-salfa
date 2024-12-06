import styles from './products.module.css'
import {TProduct, useAppDispatch, useAppSelector} from "../../utils/types/types";
import {Card} from "../../components/Card/card";
import {productsArray} from "../../services/actions/actionsSelector";
import {addToFavoriteProduct, removeProduct, unFavoriteProduct} from "../../services/reducers/productsSlice";
import {useNavigate} from "react-router-dom";

export const Products = () => {

  const products: TProduct[] = useAppSelector(productsArray);
  const dispatch = useAppDispatch();

  const AddToFavoriteProduct = (product: TProduct): void => {
    product.isFavorite ?
      dispatch(unFavoriteProduct(product))
      : dispatch(addToFavoriteProduct(product))
  }

  const DeleteProduct = (product: TProduct): void => {
    dispatch(removeProduct(product));
  }

  const navigate = useNavigate()

  function handleClick() {
    navigate('/create-product')
  }

  const value1 = 'all';
  const value2 = 'favorite';
  const value3 = 'alphabet';

  function filterFunction() {
    // let selectedValue = event.target.value;
    // console.log(selectedValue);
    // if (selectedValue === value1) {
    //   // all
    // } else if (selectedValue === value2) {
    //   products.filter((product: TProduct) => {
    //     product.isFavorite = true
    //   })
    // } else {
    //   sortAlphabet()
    // }
  }

  // function sortAlphabet() {
  //   products.sort(function(a, b) {
  //     if (a.title < b.title) {
  //       return -1;
  //     }
  //     if (a.title > b.title) {
  //       return 1;
  //     }
  //     // если имена равны
  //     return 0;
  //   });
  // }

  return (
    <section className={styles.products}>
      {/*<select className={styles.filter} onChange={filterFunction}>*/}
      {/*  <option value={value1}>Все продукты</option>*/}
      {/*  <option value={value2}>Избранные продукты</option>*/}
      {/*  <option value={value3}>Сортировка по алфавиту</option>*/}
      {/*</select>*/}
      <ul className={styles.products__list}>
        {products?.map((product: TProduct) => (
          <Card key={product.id} product={product} buttonDelete={() => DeleteProduct(product)}
                buttonAddToFavorite={() => AddToFavoriteProduct(product)}/>))}
      </ul>
      <button className={styles.button} onClick={handleClick}>Создать новую карточку</button>
    </section>
  );
}