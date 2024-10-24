import React from 'react';
import HeroCube from '../assets/images/svg/hero-8-cube.svg'
import HeroCubeShadow from '../assets/images/svg/hero-8-cube-shadow.svg'

const HeroSection = () => {
  return (
    <div className="overflow-hidden relative min-h-screen flex justify-center items-center bg-[#0A0A08]">
      <div className="max-w-[1140px] flex items-center justify-center px-4 w-full mx-auto">
        <div className="hero-content flex items-center flex-col justify-center max-w-[712px]">
          <h1 className="hero-heading text-center max-lg:text-[52px] max-md:text-5xl !leading-[120%] text-[64px] text-white font-normal">
            Build the Future. <span className="text-[#46AD47]">Deliver Today.</span>
          </h1>
          <p className="hero-text text-center leading-[150%] text-[#B5B5B5] text-sm lg:text-base mt-[18px] mb-10 max-md:mb-5 max-md:text-xs">
            Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in Houston, San Antonio, Austin, and Dallas.
          </p>
          <button className=" py-[11.5px] px-[29px] font-semibold bg-[#46AD47] text-black rounded-xl border-0 transition-all hover:shadow-[0_7px_29px_0_#46AD47]">
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
