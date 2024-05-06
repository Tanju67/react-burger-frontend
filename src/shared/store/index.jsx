import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./CartSlice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, auth: authSlice.reducer },
});

export default store;
