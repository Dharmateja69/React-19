interface ProductInfos {
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductInfoprops {
  products?: ProductInfos[]; // ✅ make it optional
}

const ProductInfo = ({ products = [] }: ProductInfoprops) => {
  if (!Array.isArray(products)) return <p>Loading...</p>; // ✅ prevent crash

  return (
    <>
      {products.map((product) => (
        <div
          key={product.title}
          className="border border-solid bg-black text-white p-4 m-2 rounded"
        >
          <h1>Title: {product.title}</h1>
          <h1>Description: {product.description}</h1>
          <h1>Price: ${product.price}</h1>
          <img src={product.image} alt="preview" className="w-40 h-40" />
        </div>
      ))}
    </>
  );
};

export default ProductInfo;
