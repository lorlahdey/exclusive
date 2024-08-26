import { inter } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import { Send, } from "iconsax-react";
import {
  RiFacebookLine,
  RiLinkedinLine,
  RiInstagramLine,
} from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";

import AppStore from "@/public/images/footer/GooglePlay.svg";
import GooglePlay from "@/public/images/footer/GooglePlay.svg";
import QrCode from "@/public/images/footer/QrCode.svg";


const Footer = () => {
    return (
      <footer className="px-5 sm:px-[60px] xl:px-[135px] bg-black text-white flex flex-col pt-10 lg:pt-20 pb-6 gap-y-[60px]">
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 gap-y-14 text-[#FAFAFA]">
          <div className="col-span-1">
            <h4
              className={`${inter.className} font-bold text-[24px] leading-6 tracking-[3%] mb-6`}
            >
              Exclusive
            </h4>
            <p className="mb-6 text-[20px] leading-[28px] text-[#FAFAFA]">
              Subscribe
            </p>
            <p className="mb-3 text-[16px] leading-6 text-[#FAFAFA]">
              Get 10% off your first order
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-[1.5px] border-[#fafafa] placeholder:text-[16px] placeholder:leading-[24px] focus:outline-none w-full py-3 pl-4 text-black rounded"
              />
              <Send
                size="24"
                color="#FFFFFF"
                className="absolute right-[4%] top-[20%]"
              />
            </form>
          </div>
          <div className="col-span-1">
            <h4 className="font-medium text-[20px] leading-[28px] mb-6">
              Support
            </h4>
            <address className="not-italic text-[16px] leading-[24px] text-[#FAFAFA]">
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
              <br />
              <a
                href="mailto:exclusive@gmail.com"
                className="block mt-4 text-[16px] leading-[24px]"
              >
                exclusive@gmail.com
              </a>
              <a
                href="tel:+8801588889999"
                className="block mt-4 text-[16px] leading-[24px]"
              >
                +88015-88888-9999
              </a>
            </address>
          </div>
          <div className="col-span-1">
            <h4 className="font-medium text-[20px] leading-[28px] mb-6">
              Account
            </h4>
            <ul className="text-[16px] leading-6 flex flex-col gap-4 text-[#FAFAFA]">
              <li>
                <Link href="#" className="block">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="block">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="#" className="block">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="block">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="block">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-medium text-[20px] leading-[28px] mb-6">
              Quick Link
            </h4>
            <ul className="text-[16px] leading-6 flex flex-col gap-4 text-[#FAFAFA]">
              <li>
                <Link href="#" className="block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="block">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-medium text-[20px] leading-[28px] mb-6">
              Download App
            </h4>
            <p className="font-medium text-[12px] leading-[18px] mb-2 text-[#FAFAFA33]">
              Save $3 with App New User Only
            </p>
            <div className="grid grid-row-2 grid-cols-2">
              <div className="row-span-2">
                <Image src={QrCode} alt="QrCode" className="row-span-3 " />
              </div>
              <div>
                <Image
                  src={AppStore}
                  alt="Get it on Google Play"
                  className=""
                />
              </div>
              <div>
                <Image src={GooglePlay} alt="Download on the App Store" />
              </div>
            </div>
            <div className="flex gap-x-6 mt-6">
              <a href="#" className="text-2xl">
                <RiFacebookLine />
              </a>
              <a href="#" className="text-2xl">
                <TbBrandTwitter />
              </a>
              <a href="#" className="text-2xl">
                <RiInstagramLine />
              </a>
              <a href="#" className="text-2xl">
                <RiLinkedinLine />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-4 border-t-[#FAFAFA33] border-t-[1px]">
          <p className="text-[#F9F9F933]">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </footer>
    );
}

export default Footer