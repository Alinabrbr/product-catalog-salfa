import React, {useState} from "react";
import styles from './newCard.module.css'
import {useNavigate} from "react-router-dom";
import {TProduct, useAppDispatch} from "../../utils/types/types";
import {v4 as uuidv4} from 'uuid';
import {createNewCard} from "../../services/reducers/productsSlice";
import {validateImageURL, validateTitle} from "../../utils/utils";
import {Error} from "../../components/Error/Error";

export default function NewCard() : JSX.Element {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('')
  const [imageURL, setImageURL] = useState('')

  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isImageURLValid, setIsImageURLValid] = useState(true);

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState ('');

  function hideError() {
    setShowError(false);
  }

  function createCard(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let card: TProduct = {
      "title": title,
      "image": imageURL,
      "id": uuidv4(),
      "isFavorite": false
    };

    let validationError = validation()
    if (validationError !== null) {
      setError(validationError)
      setShowError(true);
      setTimeout(() => hideError(), 3000);
    } else {
      dispatch(createNewCard(card));
      navigate('/products');
      setTitle('');
      setImageURL('');
    }
  }

  const validation = (): string | null => {
    let error = validateTitle(title)
    if (error !== null) {
      setIsTitleValid(false)
      return error;
    }

    error = validateImageURL(imageURL)
    if (error !== null) {
      setIsImageURLValid(false)
      return error
    }

    return null
  }

  return (
    <>
      <Error show={showError} closeError={hideError} error={error}></Error>

      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h2>Создание новой карточки</h2>
          <form className={styles.form} onSubmit={createCard}>

            <input  className={styles.input} placeholder={'Текст'} name={"title"} value={title} required
                   onChange={(event) => setTitle(event.target.value)}/>
            <input className={styles.input} placeholder={'Картинка'} name={"imageURL"} value={imageURL} required
                   onChange={(event) => setImageURL(event.target.value)}/>

              <button className={styles.buttonCreate}>
                Создать
              </button>
          </form>
          <button className={styles.buttonBack} onClick={() => navigate(-1)}>Вернуться к каталогу</button>
        </div>
      </div>
    </>
  )
}