import React, {useEffect} from 'react';
import './App.css';
import {Footer} from "../components/Footer/footer";
import {Header} from "../components/Header/header";
import {useAppDispatch} from "../utils/types/types";
import {getProducts} from "../services/reducers/productsSlice";
import {Products} from "../components/Products/products";


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
