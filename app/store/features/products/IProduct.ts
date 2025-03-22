interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
  category?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
}

export default IProduct;
