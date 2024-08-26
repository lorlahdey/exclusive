import React, { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";

const Inputfield = ({
  type,
  value,
  placeholder,
  identifier,
  inputStyle,
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="relative w-full">
      <input
        type={isPasswordVisible && type === "password" ? "text" : type}
        name={identifier}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${
          inputStyle || ""
        } w-full py-2 border-b border-[#00000066] placeholder:text-[16px] placeholder:text-[#00000066] placeholder:leading-6 focus:outline-none`}
      />
      {type === "password" && (
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <EyeSlash size="24" color="#00000066" />
          ) : (
            <Eye size="24" color="#00000066" />
          )}
        </div>
      )}
    </div>
  );
};

export default Inputfield;
