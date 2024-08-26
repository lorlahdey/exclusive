import { Shop, DollarCircle, ShoppingBag, Money } from "iconsax-react";
import {inter} from "@/app/fonts"
import CategoryCard from "./CategoryCard";

const stats = [
  {
    icon: <Shop size="32" />,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    icon: <DollarCircle size="32" />,
    value: "33k",
    label: "Monthly Product Sale",
  },
  {
    icon: <ShoppingBag size="32" />,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    icon: <Money size="32" />,
    value: "25k",
    label: "Annual gross sale on our site",
  },
];

const StoryStatistics = () => {
    return (
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {stats.map((stat, index) => (
          <CategoryCard
            key={index}
            icon={stat.icon}
            label={stat.value}
            description={stat.label}
            showCardBorder={true}
            cardStyle="py-[30px]"
            labelStyle={`font-bold ${inter.className} text-[32px] leading-[30px] tracking-[4%] mt-4 mb-1`}
            descriptionStyle="text-center text-[16px] leading-[21px]"
          />
        ))}
      </div>
    );
};

export default StoryStatistics;
