import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="flex hero-3-bg-img items-center justify-center min-h-screen bg-cover bg-center"
    >
      <div className="container flex flex-col items-center w-full">
        <h1 className="font-bold mb-4 text-center text-4xl">
          Lorem ipsum Lorem ipsum
        </h1>
        <div className="max-w-[777px] mb-8 max-md:mb-4 mx-auto">
          <p className="text-center font-normal">
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
