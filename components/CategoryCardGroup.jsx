import React from 'react'

import { Eye, Headphone, Camera, WatchStatus, Monitor, Game, Mobile  } from "iconsax-react";
import CategoryCard from './CategoryCard';

const categories = [
  {icon: <Mobile size="56" />, description: "Phones", },
  {icon: <Monitor size="56" />, description: "Computers", },
  {icon: <WatchStatus size="56" />, description: "Camera",  },
  { icon: <Camera size="56" />, description: "HeadPhones" },
  { icon: <Headphone size="56" />, description: "Gaming" },
  { icon: <Game size="56" />, description: "SmartWatch" },
  { icon: <Eye size="56" />, description: "Gaming" },
];

const CategoryCardGroup = ({scrollRef}) => {
  return (
    <div className="mt-[60px] mb-[70px]">
      <div
        className="flex overflow-x-auto whitespace-nowrap gap-[30px]"
        ref={scrollRef}
      >
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            cardStyle="min-w-[170px] py-6"
            description={category.description}
            descriptionStyle="text-[16px] leading-6 mt-2"
            active={category.active}
            showCardBorder={true}
            showBgOnHover={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCardGroup;