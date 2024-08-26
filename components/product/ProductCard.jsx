import Image from "next/image";
import { Heart, Eye } from "iconsax-react";

const ProductCard = ({ product }) => {
    // Split the rating into integer and fractional parts
    const integerRating = Math.floor(product.rating);
    const fractionalRating = product.rating % 1;

    return (
      <div className="pt-3 min-w-[270px] bg-[#F5f5f5] rounded  group ">
        <div className="p-4 w-full rounded relative">
          <Image
            className="w-full object-cover"
            src={product.image}
            alt={product.name}
          />
          {product.discount && (
            <div className="absolute top-2 left-2 bg-[#db4444] text-white text-xs font-bold px-2 py-1 rounded">
              -{product.discount}%
            </div>
          )}
          <div className="absolute top-2 right-2 flex flex-col gap-2 ">
            <button className="p-2 bg-white rounded-full shadow-md">
              <Heart size="24" color="#000000" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md">
              <Eye size="24" color="#000000" />
            </button>
          </div>
          <div className="absolute rounded-b-lg bottom-0 left-0 right-0 py-2 bg-black bg-opacity-80 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-[16px] leading-6">
            Add To Cart
          </div>
        </div>
        <div className="pt-4 rounded-t bg-white">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <div className="flex items-center space-x-2 my-2">
            <div className="text-red-500 text-xl font-bold">
              ${product.price}
            </div>
            {product.oldPrice && (
              <div className="text-gray-500 line-through">
                ${product.oldPrice}
              </div>
            )}
          </div>
          <div className="flex items-center">
            <div className="text-yellow-500 flex items-center">
              {[...Array(integerRating)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927a1 1 0 011.902 0l1.136 3.454a1 1 0 00.95.69h3.638a1 1 0 01.588 1.81l-2.944 2.137a1 1 0 00-.364 1.118l1.136 3.454a1 1 0 01-1.451 1.118L10 14.347l-2.944 2.137a1 1 0 01-1.451-1.118l1.136-3.454a1 1 0 00-.364-1.118L3.432 8.881a1 1 0 01.588-1.81h3.638a1 1 0 00.95-.69l1.136-3.454z" />
                </svg>
              ))}
              {fractionalRating >= 0.5 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 15l-5.9 3.1 1.1-6.4L.6 7.5l6.4-.9L10 .6l2.9 5.9 6.4.9-4.6 4.2 1.1 6.4L10 15z" />
                </svg>
              )}
            </div>
            <div className="text-gray-600 ml-2">({product.reviews})</div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;
