import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from "../utils/types/types";
import {getProducts} from "../services/reducers/productsSlice";
import {Products} from "../pages/products/products";
import {Route, Routes} from "react-router-dom";
import {Layout} from "../pages/layout/layout";
import {NotFound} from "../pages/notFound/notFound";
import {Main} from "../pages/main/main";


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />

        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout header={true} footer={true}>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
