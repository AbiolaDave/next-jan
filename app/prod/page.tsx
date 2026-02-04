import Image from "next/image";
import Link from "next/link";

const page = async () => {
  let products;
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    products = await data.json();
    // console.log(products);
  } catch (error) {
    // alert("Failed to fetch products");
    console.log(error);
  }

  return (
    <>
      <div>
        <h1>Available Products</h1>
        {/* <ProductsComp products={products} /> */}
        <div>
          {products.map((product: any) => (
            <Link
              prefetch={false}
              href={`/prod/${product.id}`}
              key={product.id}
            >
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
      </div>
    </>
  );
};

export default page;
