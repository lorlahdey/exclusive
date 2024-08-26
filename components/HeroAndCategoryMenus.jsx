import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";
import mainHero from "@/public/images/banners/iphone14WithText.svg";
import Carousel from "./Carousel";

const HeroAndCategoryMenus = () => {
  return (
    <div className=" pt-10  flex">
      <aside className="w-1/4 border-r border-black pr-4 text-[16px] leading-6">
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <Link href="#" className="">
              Woman's Fashion
            </Link>
            <ArrowRight2 size="24" color="#000000" />
          </li>
          <li className="flex justify-between items-center">
            <Link href="#" className="">
              Men's Fashion
            </Link>
            <ArrowRight2 size="24" color="#000000" />
          </li>
          <li>
            <Link href="#" className="">
              Electronics
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Home & Lifestyle
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Medicine
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Sports & Outdoor
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Baby's & Toys
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Groceries & Pets
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Health & Beauty
            </Link>
          </li>
        </ul>
      </aside>
      <section className="w-3/4 pl-[45px] h-full">
        <div className="relative">
          {/* <img
            src="https://via.placeholder.com/1200x400" // Replace with your image URL
            alt="Banner"
            className="w-full h-full object-cover"
          /> */}
          <Image
            src={mainHero}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          {/* <Carousel /> */}
          {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
            <div>
              <h2 className="text-2xl">iPhone 14 Series</h2>
              <p className="text-lg mt-2">Up to 10% off Voucher</p>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-2 bg-white text-black"
              >
                Shop Now →
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroAndCategoryMenus
;
