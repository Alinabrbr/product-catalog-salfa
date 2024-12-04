import React from 'react'
import styles from './notFound.module.css'

export const NotFound: React.FC = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Error 404</h1>
      <p>Такой страницы не существует</p>
    </div>
  )
}