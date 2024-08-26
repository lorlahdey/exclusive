"use client";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { inter } from "../fonts";

import Button from "@/components/Button";
import Inputfield from "@/components/form/Inputfield";
import { supabase } from "@/utils/supabase/client";
import { Message } from "iconsax-react";

const formData = {
  email: "",
  password: "",
  cPassword: "",
};

const SignUp = () => {
  const [userDetail, setUserDetail] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleAuth = async () => {
    const { data, error } = await supabase.auth.updateUser(userDetail, );

    if (error) {
      toast.error(error.message || "Failed to send reset email. Please try again.");
    } else {
      toast.success("Password reset email sent successfully.");
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
        Reset Password
      </h2>
      <p className="text-[16px] leading-6 mb-12">Enter your details below</p>
      <form className="flex flex-col gap-8">
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
        <Inputfield
          type="password"
          identifier="cPassword"
          placeholder="confirm Password"
          value={userDetail.cPassword}
          onChange={handleChange}
        />

        <div className="w-full ">
          <Button
            path="#"
            text="Submit"
            btnStyle="font-medium block text-center py-4"
            onClick={handleAuth}
          />
        </div>
      </form>

      <p className="text-[16px] leading-6 text-center mt-5">
        <Link href="/log-in" className="font-medium underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
