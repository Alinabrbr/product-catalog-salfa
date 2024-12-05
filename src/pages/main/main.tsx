import styles from './main.module.css'
import leftArrow from '../../images/arrow-left.png'
import {useNavigate} from "react-router-dom";

export const Main = () => {

  const navigate = useNavigate()

  function handleClick() {
    navigate('/products')
  }

  return (
    <section className={styles.container}>
      <div className={styles.backgroundImage}>
      </div>
      {/*<div className={styles.backgroundCircles}>*/}
      {/*</div>*/}
      <button className={styles.button} onClick={handleClick}>
        Посмотреть каталог
        <img src={leftArrow} alt="стрелочка влево"/>
      </button>
    </section>
  );
}