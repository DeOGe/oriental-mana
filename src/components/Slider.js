import React, { useState, useEffect, useRef }from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import '../styles/Carousel.css'

const featuredProducts = [
  "/images/hero_1.png",
  "/images/hero_2.jpg"
]

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slideRef = useRef();

  let count = 0;
  let slideInterval;
  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
        clearInterval(slideInterval);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  return (
    <div className="max-w-screen-xl my-10 mx-20">
      <div className="w-full relative select-none">
        <div ref={slideRef} className="aspect-w-5 aspect-h-2">
          <img  src={featuredProducts[currentIndex]} alt="" /> 
        </div>
        <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3  flex justify-between items-cetner'>
          <button 
            onClick={handleOnPrevClick}
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          >
            <AiOutlineVerticalRight size={35} />
          </button>
          <button 
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
            >
              <AiOutlineVerticalLeft size={35} />
          </button>
        </div>
        
        
      </div>
    </div>

    // <div class="w-full bg-gray-400 select-none relative"> 
    //   <div className="bg-blue-100">
    //     <div className="aspect-w-18 aspect-h-9">
    //       <img className='max-h-64 w-full object-contain rounded-2xl' src={featuredProducts[0]} alt="" />
    //     </div>
    //     <div className='absolute bg-red-400 w-full top-1/2 transform -translate-y-1/2 px-3  flex justify-between items-cetner'>
    //       <button>Previous</button>
    //       <button>Next</button>
    //     </div>
    //   </div>
    // </div>  
  )
}
