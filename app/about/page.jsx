"use client";
// import { inter } from "../fonts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import Button from "@/components/Button";
import { supabase } from "@/utils/supabase/client";



const About = () => {
  const [userDetail, setUserDetail] = useState("");
  
  

  return (
    <div className="w-full">
      <h1>About</h1>
    </div>
  );
};

export default About;
