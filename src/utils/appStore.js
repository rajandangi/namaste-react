const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // Add more reducers here
    cart: cartReducer,
  },
});

export default appStore;
