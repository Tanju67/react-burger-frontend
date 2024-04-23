import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    product: {
      title: "",
      quantity: 0,
      price: 0,
      extras: [],
    },
    item: [],
  },
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
      state.totalPrice = action.payload.price;
    },
    setExtras(state, action) {
      state.product.extras?.push(action.payload);
    },
    deleteExtras(state, action) {
      console.log(action.payload);
      const newExtras = state.product.extras.filter(
        (item) => item.id !== action.payload
      );
      state.product.extras = newExtras;
    },

    addProductToCart(state, action) {
      state.item.push(state.product);
    },

    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
