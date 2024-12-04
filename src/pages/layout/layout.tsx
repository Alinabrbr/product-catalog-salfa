import React, { FC, ReactNode } from 'react'
import styles from './layout.module.css'
import { Header } from '../../components/Header/header'
import { Footer } from '../../components/Footer/footer'
import clsx from 'clsx'

type TLayoutProps = {
  children: ReactNode
  header?: boolean
  footer?: boolean
}

export const Layout: FC<TLayoutProps> = ({ children, header = true, footer = true }) => {
  return (
    <>
      {header && (
        <div className={styles.header}>
          <Header />
        </div>
      )}
      <main className={clsx(styles.container, { [styles.noHeader]: !header })}>{children}</main>
      {footer && (
        <div className={styles.footer}>
          <Footer />
        </div>
      )}
    </>
  )
}