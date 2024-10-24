import React from 'react';
import HeroFourthImg from '../assets/images/png/leaves.png'

const HeroSection = () => {
  return (
    <div className="min-h-screen pt-24 max-lg:pt-16 max-md:pt-12  flex justify-center items-center">
      <div className="container flex flex-col justify-around items-center max-w-6xl mx-auto">
        <h1 className="text-black font-bold text-5xl lg:text-[58px] leading-150">
          Lorem ipsum Lorem ipsum
        </h1>
        <div className="max-w-[777px] mx-auto">
          <p className="text-gray-700 text-base mt-4 max-w-[771px] mx-auto text-center max-md:mt-2 leading-[150%]">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.
          </p>
        </div>
        <button
          className="bg-white border mt-[19px] max-md:mt-3 border-indigo-700 text-indigo-700 font-semibold rounded-xl py-[9px] px-14 transition-all duration-300 hover:bg-indigo-700 hover:text-white mb-[62px]"
        >
          Button
        </button>
        <img className="w-full max-w-[1140px]" src={HeroFourthImg} alt="Decorative leaves" />
      </div>
    </div>
  );
};

export default HeroSection;
