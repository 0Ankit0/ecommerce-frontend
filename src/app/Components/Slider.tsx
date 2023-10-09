"use client";

import { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

//npm install react-icons --save

function Slider() {
  const slides = useContext(ProductContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide =
      currentIndex === 0; /*get the index of the first element of the array*/
    const newIndex = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1; /*don't reduce if first else  reduce*/
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide =
      currentIndex ===
      slides.length - 1; /*get the index of the last element of the array*/
    const newIndex = isLastSlide
      ? 0
      : currentIndex + 1; /*reduce if not last and don't if it is last*/
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    /*function used to change slide when clicking on the dot*/
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" h-[450px] w-full relative group rounded-lg">
      {/*use group to group the left and right buttons together to implement sth
      with both on them*/}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full  bg-center bg-cover duration-500 flex place-items-center rounded-xl"
      >
        <div className="text-gray-100 text-[4rem] ml-24">
          <p>{slides[currentIndex].title}</p>
          <p>{slides[currentIndex].description}</p>
          <p>{slides[currentIndex].price}</p>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        {/*only show if hovered on the grouped main parent else remain hidden*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          onClick={prevSlide}
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        {/*same as the left arrow*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          onClick={nextSlide}
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex top-4 justify-center">
        {slides.map(
          (
            slide,
            slideIndex //Use () if you want to render sth on the screen
          ) => (
            <div
              key={slideIndex} //using key to know which dot was clicked
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-3 my-2 text-slate-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Slider;
