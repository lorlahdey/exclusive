"use client";
import Link from "next/link";
import { inter } from "./fonts";

export default function NotFound() {
  
  return (
    <div className="pt-10 lg:pt-20">
      <div className="text-[14px] leading-[21px] text-black">
        <Link href="/" className="opacity-35">
          {" "}
          Home{" "}
        </Link>
        <span className="mx-2">/</span>
        <span>404 Error</span>
      </div>
      <div className="min-h-screen flex flex-col gap-y-5 lg:gap-y-10 justify-center items-center  text-center py-[60px] sm:py-[80px] lg:py-[140px]">
        <h1
          className={`${inter.className}  text-[55px] lg:text-[110px] leading-[60px] lg:leading-[115px] tracking-[3%] font-medium`}
        >
          404 Not Found
        </h1>
        <p className=" text-[14px] lg:text-[16px] lg:leading-6 mb-5 lg:mb-10">
          Your visited page not found. You may go home page.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-[#DB4444] font-medium text-[16px] leading-6 text-white rounded"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}
