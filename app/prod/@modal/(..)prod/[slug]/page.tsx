import { X } from "lucide-react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  console.log(params);
  console.log({ abr: slug });

  const res = await fetch(`https://fakestoreapi.com/products/${slug}`, {
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <a
          href={`/prod/`}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-600" />
        </a>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-60 object-contain"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {product.title}
            </h2>

            <p className="text-sm text-gray-600">{product.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">
                ${product.price}
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                ⭐ {product.rating?.rate}
              </span>
            </div>

            <button className="w-full rounded-xl bg-black py-3 text-sm font-medium text-white hover:bg-gray-800 transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
