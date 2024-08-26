'use client'
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

import iphone from "@/public/images/banners/iphone14.svg";
import jbl from "@/public/images/banners/jbl1.svg";

const slides = [
  {
    id: 1,
    title: "Enhance Your Music Experience",
    category: "Categories",
    time: { hours: 23, days: 5, minutes: 59, seconds: 35 },
    buttonLabel: "Buy Now!",
    imageUrl: jbl,
  },
  {
    id: 2,
    title: "Experience the Best Sound Quality",
    category: "Audio",
    time: { hours: 12, days: 2, minutes: 45, seconds: 20 },
    buttonLabel: "Shop Now!",
    imageUrl: iphone,
  },
  // Add more slides as needed
];

const ScrollableSection = ({ initialActiveIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    carouselRef.current.scrollTo({
      left: activeIndex * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const nextSlide = () => {
    const newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    carouselRef.current.scrollTo({
      left: newIndex * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    carouselRef.current.scrollTo({
      left: newIndex * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        className="relative w-full bg-black overflow-x-auto snap-x snap-mandatory"
        ref={carouselRef}
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-full snap-center flex flex-col lg:flex-row items-center justify-between px-14 py-11 bg-black text-white gap-y-8"
            >
              <div className="flex flex-col gap-8">
                <h2 className="text-[#00FF66] font-semibold text-[16px] leading-[20px]">
                  {slide.category}
                </h2>
                <h1 className="font-semibold text-[48px] leading-[60px]">
                  {slide.title}
                </h1>
                <div className="flex flex-wrap gap-6">
                  <div className="p-4 bg-white text-black flex flex-col items-center rounded-full">
                    <span className="font-semibold text-[16px] leading-[20px]">
                      {slide.time.hours}{" "}
                    </span>
                    <span className="text-[11px] leading-[18px]">Hours</span>
                  </div>
                  <div className="p-4 bg-white text-black flex flex-col items-center rounded-full">
                    <span className="font-semibold text-[16px] leading-[20px]">
                      {slide.time.days}
                    </span>
                    <span className="text-[11px] leading-[18px]">Days</span>
                  </div>
                  <div className="p-3 bg-white text-black flex flex-col items-center rounded-full">
                    <span className="font-semibold text-[16px] leading-[20px]">
                      {slide.time.minutes}{" "}
                    </span>
                    <span className="text-[11px] leading-[18px]">Minutes</span>
                  </div>
                  <div className="p-3 bg-white text-black flex flex-col items-center rounded-full">
                    <span className="font-semibold text-[16px] leading-[20px]">
                      {slide.time.seconds}
                    </span>
                    <span className="text-[11px] leading-[18px]">Seconds</span>
                  </div>
                </div>
                <button className="font-medium px-12 py-4 bg-[#00FF66] text-[#FAFAFA] text-[16px] leading-[24px] rounded">
                  {slide.buttonLabel}
                </button>
              </div>
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        // onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:bg-[#ffffff66] bg-opacity-50 p-2 rounded-full"
      >
        <ArrowLeft2 size="32" color="#ffffff" />
      </button>
      <button
        // onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:bg-[#ffffff66] bg-opacity-50 p-2 rounded-full"
      >
        <ArrowRight2 size="32" color="#ffffff" />
      </button>

      {/* Slide Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex
                ? "border-2 border-white bg-[#db4444]"
                : " bg-[#ffffff66]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableSection;