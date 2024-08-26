'use client'
import ProductCard from "./ProductCard";

export const ProductLists = ({ products, scrollRef }) => {
    return (
      <div
        className="flex mt-[60px] overflow-x-auto whitespace-nowrap gap-[30px]"
        ref={scrollRef}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
};
