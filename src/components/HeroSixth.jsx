import React from 'react';

const HeroSection = () => {
  return (
    <div
    className="hero-6-bg-img hero-section min-h-screen flex justify-center items-center bg-cover bg-no-repeat"
  >
    <div className="max-w-[1140px] px-4 w-full mx-auto">
      <div className="max-w-[711px]">
        <h1 className="max-md:text-5xl max-lg:text-[52px] !leading-[120%] text-[64px] text-white font-normal">
          Build the Future. <span className="text-[#46AD47]">Deliver Today.</span>
        </h1>
        <p className="max-md:text-xs !leading-[150%] text-[#B5B5B5] text-sm lg:text-base mt-[18px] max-md:mb-5 mb-10">
          Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in
          Houston, San Antonio, Austin, and Dallas.
        </p>
        <button className="py-[11.5px] px-[29px] font-semibold bg-[#46AD47] text-black rounded-xl border-0 transition-all hover:shadow-[0_7px_29px_0_#46AD47]">
          Start Your Project
        </button>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
