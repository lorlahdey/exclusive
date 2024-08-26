"use client";
import { useRef } from "react";
import Button from "./Button";
import CategoriesBanner from "./CategoriesBanner";
import CategoryCardGroup from "./CategoryCardGroup";
import { ProductLists } from "./product/ProductLists";
import GalleryCardGroup from "./GalleryCardGroup";

const CategotySection = ({
  isBorderBottom,
  showButton,
  forProducts,
  products,
  forCategory,
  catHeader,
  forGalleryLike,
  catDescription,
  endDate,
  showDate,
  showArrows,
  showSideButton,
}) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className={`${isBorderBottom ? "border-b" : ""}`}>
      <CategoriesBanner
        catHeader={catHeader}
        catDescription={catDescription}
        endDate={endDate}
        showDate={showDate}
        showArrows={showArrows}
        showSideButton={showSideButton}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      {forProducts && (
        <ProductLists products={products} scrollRef={scrollRef} />
      )}
      {forCategory && <CategoryCardGroup scrollRef={scrollRef} />}
      {forGalleryLike && <GalleryCardGroup />

      }
      {showButton && (
        <div className="my-[60px] flex justify-center justify-items-stretch">
          <Button text="View All Product" path="/" />
        </div>
      )}
    </div>
  );
};

export default CategotySection;
