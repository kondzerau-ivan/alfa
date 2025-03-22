'use client';

import { useEffect } from "react";
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

  const products = useAppSelector(selectFilteredProducts);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center">
      {products.map(product => (
        <Product key={product.id} id={product.id} image={product.image} title={product.title} description={product.description} isFavorite={product.isFavorite} />
      ))}
    </ul>
  );
};

export default Products;
