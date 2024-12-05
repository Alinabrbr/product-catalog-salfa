import {RootState} from "../store";

export const productsArray = (store: RootState) => store.products.products;
export const productsArrayLoading = (store: RootState) => store.products.isLoading;