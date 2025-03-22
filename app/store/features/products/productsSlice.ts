import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IProduct from "./IProduct";

export interface IState {
  products: IProduct[];
  showFavoritesOnly: boolean;
}

const initialState: IState = {
  products: [],
  showFavoritesOnly: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      return ({...state, products: action.payload})
    },
    toggleFavorites(state) {
      return ({...state, showFavoritesOnly: !state.showFavoritesOnly});
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.isFavorite = !product.isFavorite;
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      return ({...state, products: state.products.filter(p => p.id !== action.payload)});
    }
  },
});

export const { setProducts, toggleFavorites, toggleFavorite, deleteProduct } = productsSlice.actions;
