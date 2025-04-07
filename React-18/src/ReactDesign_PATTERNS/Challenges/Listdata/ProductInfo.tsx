interface ProductinfoProps {
  product: {
    name: string;
    description: string;
    price: string;
    rating: string;
    imageUrl: string;
  };
}
const ProductInfo = ({ product }: ProductinfoProps) => {
  const { name, description, price, rating, imageUrl } = product;
  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>Description:{description}</h2>
      <h1>Price:{price}</h1>
      <h1>Rating:{rating}</h1>
      <img src={imageUrl} alt="unplash" />
      <br />
    </div>
  );
};

export default ProductInfo;
