import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";
import coins from './coins/coinslice'
import cart from './cart/cartslice'
import auth from './auth/authslice'
const store = configureStore({
  reducer: { 
    theme,
    coins,
    cart,
    auth
   },
});

export default store;
