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
            path="*"
            element={
              <Layout header={true} footer={true}>
                <NotFound/>
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
        </Routes>
    </div>
  );
}

export default App;
