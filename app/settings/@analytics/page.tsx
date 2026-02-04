import { Product } from "@/src/util/types/types";
import Image from "next/image";

const page = async () => {
  let products;

  try {
    let data = await fetch("https://fakestoreapi.com/products");
    products = await data.json();
  } catch (error) {
    console.log("Product fetch failed", error);
  }

  return (
    <div className="w-1/3">
      <h1>Analytics here</h1>
      {products?.map((product: Product) => (
        <div key={product.id}>
          <h1>{product.id}</h1>
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <h1>{product.title}</h1>
          <h1>{product.description}</h1>
          <h1>Price: {product.price}</h1>
        </div>
      ))}
      <h1>End of running</h1>
    </div>
  );
};

export default page;
