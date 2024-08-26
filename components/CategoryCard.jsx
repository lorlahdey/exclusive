

const CategoryCard = ({
  icon,
  label,
  showCardBorder,
  description,
  labelStyle,
  descriptionStyle,
  showBgOnHover,
  cardStyle,
}) => {
  return (
    <div
      className={`group flex flex-col items-center justify-center px-4 gap-2 ${
        showCardBorder ? "border border-[#0000004D]" : ""
      } rounded-lg text-black ${
        showBgOnHover ? "hover:bg-[#db4444] hover:text-white" : ""
      }    ${cardStyle || ""} transition-all duration-300`}
    >
      <div className="">{icon}</div>
      <span className={` ${labelStyle || ""}`}>{label}</span>
      <span className={`${descriptionStyle || ""}`}>{description}</span>
    </div>
  );
};

export default CategoryCard;