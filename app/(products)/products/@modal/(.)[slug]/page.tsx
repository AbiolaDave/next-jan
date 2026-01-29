import { X } from "lucide-react";

const Page = async ({ params }: { params: { slug?: string } }) => {
  console.log(params);
  const { slug } = await params;

  console.log({ ohSlugOo: slug });

  if (!slug) return null;

  const res = await fetch(`https://fakestoreapi.com/products/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const product = await res.json();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        <a
          href="/products"
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-600" />
        </a>

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-60 object-contain"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">${product.price}</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                ⭐ {product.rating?.rate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
