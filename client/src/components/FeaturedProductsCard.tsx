import Link from 'next/link';

export default function ProductCard({
  id,
  image,
  category,
  name,
  price,
  oldPrice,
  rating,
  isOnSale,
}: {
  id: number;
  image: string;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  isOnSale?: boolean;
}) {
  return (
    <Link
      href={`/products/${id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative">
        <img src={image} alt={name} className="aspect-square w-full object-cover" />
        {isOnSale && (
          <div className="absolute top-2 left-2">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault(); // ⛔ Prevent navigation
            e.stopPropagation(); // ⛔ Stop bubbling
            // Handle heart click logic
          }}
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-700 hover:text-red-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-sm text-gray-500 mb-1">{category}</h3>
        <h4 className="font-medium text-gray-900 mb-2 truncate">{name}</h4>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
            {oldPrice && <span className="text-sm text-gray-500 line-through ml-2">${oldPrice.toFixed(2)}</span>}
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0..." />
            </svg>
            <span className="text-sm text-gray-700 ml-1">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
