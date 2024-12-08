import styles from './products.module.css'
import {TProduct, useAppDispatch, useAppSelector} from "../../utils/types/types";
import {Card} from "../../components/Card/card";
import {productsArray} from "../../services/actions/actionsSelector";
import {
  addToFavoriteProduct,
  removeProduct,
  unFavoriteProduct
} from "../../services/reducers/productsSlice";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const Products = () => {

  const dispatch = useAppDispatch();
  const products: TProduct[] = useAppSelector(productsArray);


  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFavoriteOnly, setIsFavoriteOnly] = useState(false)

  const switchFunction = () => {
    setIsFavoriteOnly(!isFavoriteOnly);
  }

  useEffect(() => {
    if(isFavoriteOnly) {
      const filtered = products.filter(item => item.isFavorite);
      setFilteredProducts(filtered);

      return
    }
    setFilteredProducts(products);
  }, [isFavoriteOnly, products]);

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

  return (
    <section className={styles.products}>
      <div className={styles.checkboxButton}>
        <input type="checkbox" id="favorite" name="favorite" checked={isFavoriteOnly} onChange={switchFunction}/>
        <label htmlFor="favorite">Избранные</label>
      </div>

      <ul className={styles.products__list}>
        {filteredProducts?.map((product: TProduct) => (
          <Card key={product.id} product={product} buttonDelete={() => DeleteProduct(product)}
                buttonAddToFavorite={() => AddToFavoriteProduct(product)}/>))}
      </ul>

      <button className={styles.button} onClick={handleClick}>Создать новую карточку</button>
    </section>
  );
}