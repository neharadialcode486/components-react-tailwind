import React from 'react';
import HeroCube from '../assets/images/svg/hero-8-cube.svg'
import HeroCubeShadow from '../assets/images/svg/hero-8-cube-shadow.svg'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-[#0A0A08] overflow-hidden">
      <div className="max-w-[1140px] px-4 mx-auto flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[712px] text-center">
          <h1 className="text-5xl lg:text-[64px] leading-[120%] text-white font-normal">
            Build the Future. <span className="text-[#46AD47]">Deliver Today.</span>
          </h1>
          <p className="text-sm lg:text-base text-[#B5B5B5] mt-4 mb-10 leading-[150%]">
            Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in Houston, San Antonio, Austin, and Dallas.
          </p>
          <button className="py-[11.5px] px-[29px] font-semibold bg-[#46AD47] text-black rounded-xl transition-all hover:shadow-[0_7px_29px_0_#46AD47]">
            Start Your Project
          </button>
        </div>
      </div>
      <img src={HeroCube} alt="cube" className="absolute blur-lg bottom-[5%] right-[5%] pointer-events-none" />
      <img src={HeroCubeShadow} alt="cube shadow" className="absolute blur-lg bottom-[-35%] right-[-20%] pointer-events-none" />
      <img src={HeroCube} alt="cube" className="absolute blur-lg top-[5%] left-[5%] pointer-events-none" />
      <img src={HeroCubeShadow} alt="cube shadow" className="absolute blur-lg top-[-35%] left-[-20%] pointer-events-none" />
    </div>
  );
};

export default HeroSection;
