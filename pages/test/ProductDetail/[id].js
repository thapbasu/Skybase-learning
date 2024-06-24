import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const products = useSelector((state) => state.products.products);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="h-[100vh] flex  items-center">
      <div className=" max-w-2xl flex-col items-center shadow-2xl px-6 py-6 flex justify-center  mx-auto h-fit">
        <img src={product.image} className="size-36" alt="" />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <span>{`${product.price}Rs.`}</span>
        <button className="bg-blue-400 px-6 py-2 rounded-lg border-none text-white mt-2">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
