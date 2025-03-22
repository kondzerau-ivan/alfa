import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IProduct from './IProduct';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<IProduct[], void>({
      query: () => '/products',
    }),
  }),
});

export const { useFetchProductsQuery } = productsApi;
