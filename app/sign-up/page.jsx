'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from "react-toastify";
import { inter } from '../fonts';

import google from "@/public/images/auth/Icon-Google.svg";
import Button from '@/components/Button';
import Inputfield from '@/components/form/Inputfield';
import { supabase } from '@/utils/supabase/client';

const formData = {
    name: "",
    email: "",
    password: "",
}
const SignUp = () => {
  const [userDetail, setUserDetail] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleAuth = async () => {
    const { data, error } = await supabase.auth.signUp(userDetail, {
      options: {
        data: {
          name: userDetail.name,
        },
      },
    });

    if (error) {
      toast.error("Sign-up failed. Please try again.");
    } else {
      toast.success("Sign-up successful! Welcome aboard.");
    }
  };

  return (
    <div className="w-3/4">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        icon
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        className="mt-5"
      />
      <h2
        className={` ${inter.className} font-medium text-[36px] leading-[40px] tracking-[4%] mb-6`}
      >
        Create an account
      </h2>
      <p className="text-[16px] leading-6 mb-12">Enter your details below</p>
      <form className="flex flex-col gap-8">
        <Inputfield
          type="text"
          identifier="name"
          placeholder="Name"
          value={userDetail.name}
          onChange={handleChange}
        />
        <Inputfield
          type="text"
          identifier="email"
          placeholder="Email or Phone Number"
          value={userDetail.email}
          onChange={handleChange}
        />
        <Inputfield
          type="password"
          identifier="password"
          placeholder="Password"
          value={userDetail.password}
          onChange={handleChange}
        />
        <div className="w-full ">
          <Button
            path="#"
            text="Create Account"
            btnStyle="font-medium block text-center py-4"
            onClick={handleAuth}
          />
        </div>
      </form>
      {/* <div className="flex items-center justify-center my-4">
            <hr className="w-1/4" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="w-1/4" />
          </div> */}
      <button className="w-full py-4 border border-[#00000066] rounded flex items-center justify-center gap-x-5 text-[16px] leading-6 hover:bg-gray-100 mt-4 mb-8">
        <Image src={google} alt="Google Icon" className="w-5 h-5" />
        <span>Sign up with Google</span>
      </button>
      <p className="text-[16px] leading-6 text-center">
        Already have an account?{" "}
        <Link href="/log-in" className="font-medium underline">
          Log in
        </Link>
      </p>
    </div>
  );
}

export default SignUp