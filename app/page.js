import CategorySection from "@/components/CategorySection";
import Services from "@/components/Services";

import StoryStatistics from "@/components/StoryStatistics";
import { BestSelling, exploreProduct, flashSales, slides } from "@/helper/data";
import HeroAndCategoryMenus from "@/components/HeroAndCategoryMenus";
import Carousel from "@/components/Carousel";


export default function Home() {
    return (
      <main className="px-5 sm:px-[60px] xl:px-[135px]">
        <HeroAndCategoryMenus />
        <div className="min-h-screen my-10 lg:my-20">
          <CategorySection
            isBorderBottom={true}
            showButton={true}
            forProducts={true}
            products={flashSales}
            catHeader="Today's"
            catDescription="Flash Sales"
            endDate="2024-12-31T23:59:59"
            showDate={true}
            showArrows={true}
          />
          <div className="mt-20">
            <CategorySection
              isBorderBottom={true}
              showButton={false}
              forCategory={true}
              catHeader="Categories"
              catDescription="Browse By Categories"
              showDate={false}
              showArrows={true}
            />
          </div>
          <div className="mt-20 pb-[60px]">
            <CategorySection
              isBorderBottom={false}
              showButton={false}
              forProducts={true}
              products={BestSelling}
              catHeader="This Month"
              catDescription="Best Selling Products"
              showDate={false}
              showSideButton={true}
            />
          </div>
          <div className="mt-20">
            <Carousel initialActiveIndex={1} />
          </div>
          <div className="mt-[70px]">
            <CategorySection
              isBorderBottom={false}
              showButton={true}
              forProducts={true}
              products={exploreProduct}
              catHeader="Our Products"
              catDescription="Explore Our Products"
              showDate={false}
              showArrows={true}
            />
          </div>
          <div className="mt-20 pb-[60px]">
            <CategorySection
              isBorderBottom={false}
              showButton={false}
              forGalleryLike={true}
              products={flashSales}
              catHeader="Featured"
              catDescription="New Arrival"
              showDate={false}
              showArrows={false}
            />
          </div>
          <div className="mt-20 pb-[60px]">
            <Services />
            {/* <StoryStatistics /> */}
          </div>
        </div>
      </main>
    );
}
