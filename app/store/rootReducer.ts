import { combineReducers } from "redux";
import { productsSlice } from "./features/products/productsSlice";
import { productsApi } from "./features/products/productsApi";

export const rootReducer = combineReducers({
  catalog: productsSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
