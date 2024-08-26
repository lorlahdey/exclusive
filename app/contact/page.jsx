"use client";
// import { inter } from "../fonts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import Button from "@/components/Button";
import Inputfield from "@/components/form/Inputfield";
import { supabase } from "@/utils/supabase/client";

const formData = {
  email: "",
  password: "",
};

const Contact = () => {
  const [userDetail, setUserDetail] = useState(formData);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  // const handleAuth = async () => {
  //   let { data, error } = await supabase.auth.signInWithPassword(userDetail);
  //   console.log(data , error)

  //   router.push(`/`);
  // };

  return (
    <div className="w-full">
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
