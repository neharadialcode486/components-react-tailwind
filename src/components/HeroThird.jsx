import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="flex hero-3-bg-img items-center justify-center min-h-screen bg-cover bg-center"
    >
      <div className="container flex flex-col items-center w-full">
        <h1 className="font-bold mb-4 max-md:mb-2 text-center leading-[120%] max-lg:text-[42px] max-md:text-[38px] text-[58px]">
          Lorem ipsum Lorem ipsum
        </h1>
        <div className=" max-w-[777px] mx-auto">
          <p className="text-center max-lg:px-5 max-lg:text-sm max-md:text-xs text-[#4C4C4D] mb-[31px] max-w-[771px] mx-auto font-normal">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.
          </p>
        </div>
        <button
          className="bg-white border border-indigo-700 text-indigo-700 font-semibold rounded-lg py-[11px] px-14 transition-all duration-300 hover:bg-indigo-700 hover:text-white"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
