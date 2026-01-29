"use client";

import { Product } from "@/src/util/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  let router = useRouter();
  const [product, setProducts] = useState<Product[]>();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      let products = await data.json();
      setProducts(products);
    } catch (error) {
      throw new Error("Fetching Failed");
    }
  };

  const showMore = (params: number) => {
    router.push(`/products/${params}`);
  };

  return (
    <div>
      {product?.map((products: Product, i) => (
        <div onClick={() => showMore(products.id)} key={i}>
          <h1>{products.id}</h1>
          <Image
            src={products.image}
            alt={products.title}
            width={200}
            height={200}
          />
          <h1>Title:{products.title}</h1>
          <h1>Description:{products.description}</h1>
          <h1>Price: {products.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default page;
