import Link from 'next/link';
import React from 'react'

const Button = ({path, text, btnStyle, ...rest}) => {
  return (
    <Link
      href={path}
      className={`${btnStyle || ""} px-12 py-4 bg-[#DB4444] font-medium text-[16px] leading-6 text-white rounded`}
      {...rest}
    >
      {text}
    </Link>
  );
}

export default Button