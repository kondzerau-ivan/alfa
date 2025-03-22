'use client';

import { selectProductById } from "../../store/features/products/productsSelectors";
import { useAppSelector } from "../../hooks/redux";
import { useParams, useRouter, notFound } from "next/navigation";
import IProduct from "../../store/features/products/IProduct";


const ProductPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const product: IProduct | undefined = useAppSelector((state) => selectProductById(state, parseInt(id)))
  if (!product) {
    notFound();
  }


  return (

    <div className="bg-base-200 p-3 md:p-7">
      <button onClick={() => router.back()} className="btn btn-secondary">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-left"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
        Return</button>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.image}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <div className="badge badge-primary badge-xl mb-10">{product.category}</div>
            <h1 className="text-5xl font-bold">{product.title}</h1>
            <p className="py-6">
              {product.description}
            </p>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div className="stat-title">Customers Rating:</div>
                <div className="stat-value text-primary">{product.rating?.rate}</div>
                <div className="stat-desc">* Based on reviews</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div className="stat-title">Quantity:</div>
                <div className="stat-value text-secondary">{product.rating?.count}</div>
                <div className="stat-desc">* Available in stock</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
