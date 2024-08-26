'use client'
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Button from "./Button";

const CategoriesBanner = ({showDate, showArrows, showSideButton, endDate, catHeader, catDescription, scrollLeft, scrollRight  }) => {
    const calculateTimeLeft = () => {
      const difference = new Date(endDate) - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    });
    return (
      <div className="flex flex-col gap-6">
        <div className="w-fit flex justify-between items-center gap-3">
          <div className="bg-[#DB4444] w-5 h-10 rounded"> </div>
          <div className="text-[#DB4444] font-bold">{catHeader}</div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-20 gap-y-10 rounded-lg">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">{catDescription}</h1>
          </div>
          {showDate && (
            <div className="flex items-center space-x-4 text-center mr-auto">
              <div>
                <div className="text-sm text-gray-500">Days</div>
                <div className="text-2xl font-bold">{timeLeft.days}</div>
              </div>
              <span className="text-[#E07575] text-xl">:</span>
              <div>
                <div className="text-sm text-gray-500">Hours</div>
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
              </div>
              <span className="text-[#E07575] text-xl">:</span>
              <div>
                <div className="text-sm text-gray-500">Minutes</div>
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              </div>
              <span className="text-[#E07575] text-xl">:</span>
              <div>
                <div className="text-sm text-gray-500">Seconds</div>
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              </div>
            </div>
          )}

          {showArrows && (
            <div className="flex space-x-2">
              <button
                className="p-2 bg-[#F5F5F5] rounded-full"
                onClick={scrollLeft}
              >
                <ArrowLeft size="24" color="#000000" />
              </button>
              <button
                className="p-2 bg-[#F5F5F5] rounded-full"
                onClick={scrollRight}
              >
                <ArrowRight size="24" color="#000000" />
              </button>
            </div>
          )}
          {showSideButton &&  (
            <Button text="View All" path="/" />
          )}
        </div>
      </div>
    );
}

export default CategoriesBanner