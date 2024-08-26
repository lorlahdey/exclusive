import GalleryCard from "./GalleryCard";
import speaker from "@/public/images/products/new-arrivals/amazonSpeaker.svg";
import gucci from "@/public/images/products/new-arrivals/gucciPefumes.svg";
import ps5 from "@/public/images/products/new-arrivals/ps5.svg";
import hat from "@/public/images/products/new-arrivals/hatWoman.svg";

const galleryDetails = [
  {
    image: ps5,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    colSpan: "col-span-2 row-span-2",
    link: "/",
  },
  {
    image: hat,
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    colSpan: "col-span-2 row-span-1",
    link: "/",
  },
  {
    image: speaker,
    title: "Speakers",
    description: "Amazon wireless speakers.",
    colSpan: "col-span-1 row-span-1",
    link: "/",
  },
  {
    image: gucci,
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP.",
    link: "/",
    colSpan: "col-span-1 row-span-1",
  },
];

const GalleryCardGroup = () => {
    return (
      <div className="mt-[60px] grid grid-row-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
        {galleryDetails.map((item, index) => (
          <div key={index} className={`${item.colSpan || ""}`}>
            <GalleryCard
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          </div>
        ))}
      </div>
    );
}

export default GalleryCardGroup