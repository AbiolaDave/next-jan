import { Product } from "@/src/util/types/types";
import Image from "next/image";
import Link from "next/link";

const ProductsComp = ({ products }: { products: Product[] }) => {
  return (
    <>
      <div>
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div key={product.id}>
              <h1>{product.id}</h1>
              <h1>{product.title}</h1>
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
              <h2>{product.price}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductsComp;
