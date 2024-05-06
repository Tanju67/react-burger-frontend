import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: {
      title: "",
      price: 0,
      extras: [],
    },
    cart: [],
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
      const newExtras = state.product.extras.filter(
        (item) => item.id !== action.payload
      );
      state.product.extras = newExtras;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
