import React from 'react';
import EllipseImg from '../assets/images/svg/ellipse.svg'
import EllpiseShadow from '../assets/images/svg/hero-7-shadow.svg'
import Vehical from  '../assets/images/png/vehical-img.png'

const HeroSection = () => {
  return (
    <div className="relative py-4 overflow-hidden min-h-screen flex justify-center items-center bg-[#0B0B09]">
    <div className="mx-auto w-full max-w-[1140px]">
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="xl:w-1/2 max-lg:px-4 lg:pl-3 w-full flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-white max-lg:text-center max-lg:text-[52px] max-md:text-5xl text-[64px] font-normal !leading-[120%]">
            Build the Future. <span className="text-[#46AD47]">Deliver Today.</span>
          </h1>
          <p className="leading-[150%] text-[#B5B5B5] max-md:text-xs max-lg:text-center text-sm lg:text-base mt-[18px] max-sm:mb-5 max-sm:mt-2 mb-10">
            Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects
            in Houston, San Antonio, Austin, and Dallas.
          </p>
          <button className="py-[11.5px] px-[29px] font-semibold bg-[#46AD47] max-md:text-sm text-black rounded-xl border-0 transition-all hover:shadow-[0_7px_29px_0_#46AD47]">
            Start Your Project
          </button>
        </div>
        <div className="xl:w-1/2 px-3 w-full">
          <img
            src={Vehical}
            alt="Vehical"
            className="max-xl:w-full pointer-events-none xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-0"
          />
        </div>
      </div>
    </div>
    <img
      src={EllipseImg}
      alt="ellipse"
      className="absolute bottom-[2%] blur-md left-[2%] pointer-events-none"
    />
    <img
      src={EllpiseShadow}
      alt="shadow"
      className="absolute bottom-0 left-0 pointer-events-none"
    />
  </div>
  );
};

export default HeroSection;
