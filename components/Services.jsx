import React from 'react';
import Image from "next/image";
import CategoryCard from './CategoryCard';
import delivery from "@/public/images/services/delivery.svg";
import guarantee from "@/public/images/services/guarantee.svg";
import customerService from "@/public/images/services/customerService.svg";

const services = [
  {
    icon: <Image src={delivery} alt="Get it on Google Play" className="" />,
    description: "Free delivery for all orders over $140",
    label: "FREE AND FAST DELIVERY",
  },
  {
    icon: <Image src={customerService} alt="Get it on Google Play" className="" />,
    description: "Friendly 24/7 customer support",
    label: "24/7 CUSTOMER SERVICE",
  },
  {
    icon: <Image src={guarantee} alt="Get it on Google Play" className="" />,
    description: "We return money within 30 days",
    label: "MONEY BACK GUARANTEE",
  },
];
const Services = () => {
    return (
      <div className="flex flex-wrap justify-center items-center  gap-y-8 gap-x-[44px] lg:gap-x-[88px]">
        {services.map((item, index) => (
          <CategoryCard
            key={index}
            icon={item.icon}
            label={item.label}
            description={item.description}
            labelStyle="font-semibold text-[20px] leading-[28px] mt-4"
            descriptionStyle="text-center text-[14px] leading-[21px]"
          />
        ))}
      </div>
    );
}

export default Services