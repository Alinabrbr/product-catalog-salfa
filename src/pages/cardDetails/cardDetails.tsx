import React from "react";
import styles from './cardDetails.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {productsArray, productsArrayLoading} from "../../services/actions/actionsSelector";
import {TProduct, useAppSelector} from "../../utils/types/types";

export default function CardDetails() : JSX.Element {
  const {id} = useParams();
  const isCardsLoading = useAppSelector(productsArrayLoading);
  const cards: TProduct[] = useAppSelector(productsArray);
  const navigate = useNavigate();

  const el: TProduct | undefined = cards.find((item: TProduct): boolean => item.id === id);

  if (isCardsLoading || cards.length === 0) {
    return <>
      <h2>Загрузка продуктов...</h2>
    </>
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h2>Детали продукта</h2>
          <img className={styles.image} src={el?.image} alt={el?.title}/>
          <p>{el?.title}</p>
          <button className={styles.button} onClick={() => navigate(-1)}>Вернуться к каталогу</button>
        </div>
      </div>
    </>
  )
}