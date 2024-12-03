import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {TMessageResponse, TProduct} from "../../utils/types/types";
import {fetchProducts} from "../../utils/api";


type TInitialState = {
  products: TProduct[];
  isLoading: boolean;
  error: SerializedError | null;
}

export const initialState: TInitialState = {
  products: [],
  isLoading: false,
  error: null
};

export const getProducts = createAsyncThunk(
  'productsGet',
  async () => {
    return await fetchProducts().then((data) => data);
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending.type, state => {
        state.products = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled.type, (state, action: PayloadAction<TInitialState>) => {
        state.products = action.payload.products;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected.type, (state, action: PayloadAction<TMessageResponse>) => {
        state.error = action.payload.message ? Error(action.payload.message) : null;
        state.isLoading = false;
      })
  }
})

export default productsSlice.reducer;