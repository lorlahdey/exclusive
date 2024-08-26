"use client";
import { inter } from "../fonts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

import Button from "@/components/Button";
import Inputfield from "@/components/form/Inputfield";
import { supabase } from "@/utils/supabase/client";

const formData = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [userDetail, setUserDetail] = useState(formData);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleAuth = async () => {
    let { data, error } = await supabase.auth.signInWithPassword(userDetail);

    if (error) {      
      toast.error(error.message || "Something went wrong. Please try again." );
    } else {
      toast.success("Welcome to Exclusive.");
    }

    // router.push(`/`);
  };

  const handleResetPassword = async () => {
    if (!userDetail.email) {
      toast.error(
        "Please enter your email before requesting a password reset."
      );
      return;
    }
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      userDetail.email,
      {
        redirectTo: "http://localhost:3002/forgot-password",
      }
    );

    if (error) {
      toast.error(
        error.message || "Failed to send reset email. Please try again."
      );
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
        Log in to Exclusive
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
        <div className="flex flex-col  gap-5 sm:flex-row justify-between items-center">
          <Button
            path="#"
            text="Log In"
            btnStyle="font-medium text-center py-4"
            onClick={handleAuth}
          />
          <Link
            href=""
            className="font-medium text-[#db4444]"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
