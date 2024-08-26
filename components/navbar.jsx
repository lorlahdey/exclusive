"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiShoppingBag } from "react-icons/fi";

import { SearchNormal1, Heart, ShoppingCart, User, CloseCircle, Star1, LoginCurve } from "iconsax-react";
import { inter } from "../app/fonts";
import { supabase } from '@/utils/supabase/client';

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setuser] = useState({})
  const router = useRouter();
  const pathname = usePathname();


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const {  data: { user },} = await supabase.auth.getUser();
  //       setuser(user);
  //       console.log("user----", user)
  //     } catch (err) {
  //       return Promise.reject(err);
  //     }
  //   })();
  // }, []);

  const handleLogout = async () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push(`/`);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/sign-up" },
  ];
  return (
    <div className="px-5 sm:px-[60px] xl:px-[135px] text-black flex flex-col lg:flex-row justify-between lg:items-center pt-10 pb-4 gap-y-8 border-b-[0.5px]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 gap-x-9">
        <h3
          className={`${inter.className} font-bold text-2xl leading-6 tracking-[3%]`}
        >
          Exclusive
        </h3>
        <div className="block lg:hidden">
          <ul className="flex flex-row gap-x-6 sm:gap-x-12 gap-y-6 flex-wrap ">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={`relative flex items-center space-x-2 text-[16px] leading-[24px] ${
                    pathname === item.path ? "border-b border-black " : ""
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block">
        <ul className="flex flex-row gap-x-12 ">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={`relative flex items-center space-x-2 text-[16px] leading-[24px] ${
                  pathname === item.path ? "border-b border-black " : ""
                }`}
              >
                <span className="relative z-10">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <div className="relative">
          <input
            type="search"
            name=""
            id=""
            placeholder="What are you looking for?"
            className="min-w-[243px] relative bg-[#f5f5f5] py-2 pl-5 pr-3 rounded placeholder:text-[12px] placeholder:leading-[18px] focus:outline-none focus:border-none text-[#000000]"
          />
          <SearchNormal1
            size="24"
            color="#000000"
            className="absolute right-[7%] top-[15%] inset-y-0"
          />
        </div>
        <Heart size="32" color="#000000" />
        <ShoppingCart size="32" color="#000000" />
        <div className="relative">
        {( user.role === "authenticated") &&(
              <>
                <User
                  size="32"
                  onClick={() => setIsOpen(!isOpen)}
                  className={`${
                    isOpen
                      ? "bg-[#db4444] rounded-full p-1 text-white"
                      : "text-[#000000]"
                  } `}
                />
                {isOpen && (
                  <div className="absolute z-50 right-0 mt-2 w-[224px] bg-[#989398] text-white rounded-lg shadow-lg">
                    <ul className="pt-[18px] pr-3 pb-[10px] pl-5 flex flex-col gap-y-[13px]">
                      <li className="flex items-center gap-4 cursor-pointer ">
                        <User size="24" color="#FFF" />
                        <span className="text-[14px] leading-5">
                          Manage My Account
                        </span>
                      </li>
                      <li className="flex items-center gap-4 cursor-pointer ">
                        <FiShoppingBag width={24}  height={24} className="w-6 h-6"/>
                        <span className="text-[14px] leading-5">My Order</span>
                      </li>
                      <li className="flex items-center gap-4 cursor-pointer ">
                        <CloseCircle size="24" color="#FFF" />
                        <span className="text-[14px] leading-5">
                          My Cancellations
                        </span>
                      </li>
                      <li className="flex items-center gap-4 cursor-pointer ">
                        <Star1 size="24" color="#FFF" />
                        <span className="text-[14px] leading-5">My Reviews</span>
                      </li>
                      <li className="flex items-center gap-4 cursor-pointer " onClick={handleLogout}>
                        <LoginCurve size="24" color="#FFF" />
                        <span className="text-[14px] leading-5">Logout</span>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )
          }
          </div>
      </div>
    </div>
  );
};

export default navbar;