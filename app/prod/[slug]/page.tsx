import Image from "next/image";

const page = async (params: { params: { slug: string } }) => {
  let { slug } = await params.params;

  let data = await fetch(`https://fakestoreapi.com/products/${slug}`);
  let product = await data.json();

  return (
    <div>
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <h1>{product.price}</h1>
    </div>
  );
};

export default page;
