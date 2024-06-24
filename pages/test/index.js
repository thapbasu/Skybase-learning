import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import ProductRepo from '../repo/Product';
import { useEffect } from 'react';
import { setProducts } from '../store/productSlide';

export const getServerSideProps = async () => {
  try {
    const productRepo = new ProductRepo();
    let products = [];

    await productRepo.getProducts(
      {},
      (data) => {
        products = data;
      },
      (data) => {
        products = data;
      }
    );

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
};

const Product = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products, dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
      {products.map((product, index) => (
        <div
          className="flex flex-col items-center shadow-lg px-6 py-6"
          key={index}
        >
          <img src={product.image} className="size-36" alt="" />
          <h1>{product.title}</h1>
          <Link href={`/test/ProductDetail/${product.id}`}>
            <button className="bg-blue-400 px-6 py-2 rounded-lg border-none text-white mt-2">
              Buy now
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
