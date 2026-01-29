import ProductsComp from ".";

const page = async () => {
  let products;
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    products = await data.json();
  } catch (error) {
    alert("Failed to fetch products");
    console.log(error);
  }

  return (
    <>
      <div>
        <h1>Available Products</h1>
        <ProductsComp products={products} />
      </div>
    </>
  );
};

export default page;
