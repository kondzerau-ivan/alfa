'use client';

import { useEffect } from "react";
import Link from "next/link";
import { setProducts } from "../store/features/products/productsSlice";
import { selectFilteredProducts } from "../store/features/products/productsSelectors";
import Product from "./Product";
import { useAppSelector } from "../hooks/redux";
import { useFetchProductsQuery } from "../store/features/products/productsApi";
import { useAppDispatch } from "../hooks/redux";

const Products = () => {

  const { data } = useFetchProductsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data]);
  const showFavoritesOnly = useAppSelector((state) => state.catalog.showFavoritesOnly);
  const isAnyFavoriteExists = useAppSelector((state) => state.catalog.products.some(product => product.isFavorite));
  const products = useAppSelector(selectFilteredProducts);

  const handleMessage = () => {
    if (showFavoritesOnly && !isAnyFavoriteExists) {
      return "No favorites yet...";
    } else if (products.length === 0) { 
      return "No products yet...";
    }
  };

  const message = handleMessage();

  return (
    <>
    {message && <div className="text-center text-2xl mt-10">{message}</div>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center mx-auto">
      {products.map(product => (
        <Product key={product.id} id={product.id} image={product.image} title={product.title} description={product.description} isFavorite={product.isFavorite} />
      ))}
    </div>
    </>
  );
};

export default Products;
