import React, {useEffect} from 'react';
import styles from "./app.module.css";
import {useAppDispatch} from "../utils/types/types";
import {getProducts} from "../services/reducers/productsSlice";
import {Products} from "../pages/products/products";
import {Route, Routes} from "react-router-dom";
import {Layout} from "../pages/layout/layout";
import {NotFound} from "../pages/notFound/notFound";
import {Main} from "../pages/main/main";
import CardDetails from "../pages/cardDetails/cardDetails";
import NewCard from "../pages/newCard/newCard";


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout header={true} footer={true}>
                <Main/>
              </Layout>
            }
          />

          <Route
            path="/products"
            element={
              <Layout header={true} footer={true}>
                <Products/>
              </Layout>
            }
          />

          <Route
            path="/products/:id"
            element={
              <Layout header={true} footer={true}>
                <CardDetails/>
              </Layout>
            }
          />

          <Route
            path="/create-product"
            element={
              <Layout header={true} footer={true}>
                <NewCard/>
              </Layout>
            }
          />

          <Route
            path="*"
            element={
              <Layout header={true} footer={true}>
                <NotFound/>
              </Layout>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
