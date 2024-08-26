import Image from 'next/image';
import Link from 'next/link';

const GalleryCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-[#0d0d0d] h-full pt-5 relative group overflow-hidden rounded shadow-lg cursor-pointer">
      <div className="h-full">
        <Image
          src={image}
          alt={title}
          className="cover w-fit px-[30px] transition-transform transform group-hover:scale-110"
        />
      </div>
      <div className="absolute z-50 inset-0 flex flex-col justify-end pl-[24px] pb-[24px]">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-white text-sm">{description}</p>
        <Link href={link} className="text-white mt-2 underline">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default GalleryCard;