"use client";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { toggleFavorites } from "../store/features/products/productsSlice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const showFavoritesOnly = useAppSelector((state) => state.catalog.showFavoritesOnly);

  const handleChange = () => {
    dispatch(toggleFavorites());
  }

  return (
    <div className="filter-favorites flex mb-5 justify-end">
      <label htmlFor="favorites" className="filter-favorites__label pr-5 hover:cursor-pointer flex">
        {showFavoritesOnly ? "Show all" : "Show favorites"}
      </label>
      <input id="favorites" type="checkbox" defaultChecked className="toggle" onChange={handleChange} />
    </div>
  )
}

export default Filter;
