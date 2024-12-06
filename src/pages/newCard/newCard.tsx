import React from "react";
import styles from './newCard.module.css'
import {useNavigate} from "react-router-dom";

export default function NewCard() : JSX.Element {

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h2 className='text_type_main-large title'>Детали продукта</h2>
          <img className={styles.image} src={''} alt={''}/>
          <p>Новый продукт</p>
          <button className={styles.button} onClick={() => navigate(-1)}>Вернуться к каталогу</button>
        </div>
      </div>
    </>
  )
}