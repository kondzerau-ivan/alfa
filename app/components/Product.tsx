import Link from "next/link";
import { useAppDispatch } from "../hooks/redux";
import { toggleFavorite, deleteProduct } from "../store/features/products/productsSlice";

const Product = ({ id = 0, image = "", title = "", description = "", isFavorite = false }) => {
  const dispatch = useAppDispatch();

  const handleFavorite = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <Link href={`/product/${id}`} className="rounded-lg overflow-hidden">
        <figure className="w-full h-72">
          <img className="w-full h-full object-cover"
            src={image}
            alt="Shoes" />
        </figure>
        <div className="overflow-hidden mt-5 mb-2 px-3">
          <h2 className="card-title line-clamp-1">{title}</h2>
        </div>
        <div className="overflow-hidden mb-5  px-3">
          <p className="line-clamp-2">{description}</p>
        </div>
      </Link>
      <div className="card-actions justify-end gap-5 px-3 pb-3">
        <button className="btn btn-outline btn-primary" onClick={() => {
          handleFavorite(id);
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>

          <span className="hidden">Добавить в избранное</span>
        </button>
        <button className="btn btn-outline btn-secondary" onClick={() => {
          handleDelete(id);
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M3 6l3 0 1-1h10l1 1h3v2h-2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8H1V6zm5 3v10h2V9H8zm6 0v10h2V9h-2z" />
          </svg>
          <span className="hidden">Удалить</span>
        </button>
      </div>
    </div>
  )
}

export default Product;
