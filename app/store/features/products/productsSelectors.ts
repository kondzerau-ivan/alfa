import { createSelector } from 'reselect';
import { IState } from './productsSlice';

export const selectProducts = (state: { catalog: IState }) => state.catalog.products;

export const selectFilteredProducts = createSelector(
  [selectProducts, (state: { catalog: IState }) => state.catalog.showFavoritesOnly],
  (products, showFavoritesOnly) => {
    return showFavoritesOnly ? products.filter(p => p.isFavorite) : products;
  }
);

export const selectProductById = (state: { catalog: IState }, id: number) => {
  return state.catalog.products.find(p => p.id === id);
}
