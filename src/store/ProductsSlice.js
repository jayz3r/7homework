import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await axios.get(
      "https://dummyjson.com/products?limit=10&skip=10"
    );
    return resp.data;
  }
);
const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default ProductsSlice.reducer;
