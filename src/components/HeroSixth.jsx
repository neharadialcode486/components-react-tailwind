import React from 'react';

const HeroSection = () => {
  return (
    <div
    className="min-h-screen flex hero-6-bg-img justify-center items-center bg-cover bg-no-repeat"
    
  >
    <div className="max-w-[1140px] px-4 w-full mx-auto">
      <div className="max-w-[711px]">
        <h1 className="text-5xl lg:text-[64px] leading-[120%] text-white font-normal">
          Build the Future. <span className="text-[#46AD47]">Deliver Today.</span>
        </h1>
        <p className="text-[#B5B5B5] text-sm lg:text-base leading-[150%] mt-4 mb-10">
          Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in
          Houston, San Antonio, Austin, and Dallas.
        </p>
        <button className="py-[11.5px] px-[29px] font-semibold bg-[#46AD47] text-black rounded-xl transition-all hover:shadow-[0_7px_29px_0_#46AD47]">
          Start Your Project
        </button>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
