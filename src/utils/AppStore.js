import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const AppStore = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
console.log("store", AppStore);
export default AppStore;
