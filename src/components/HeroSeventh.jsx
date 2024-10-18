import React from 'react';
import EllipseImg from '../assets/images/svg/ellipse.svg'
import EllpiseShadow from '../assets/images/svg/hero-7-shadow.svg'
import Vehical from  '../assets/images/png/vehical-img.png'

const HeroSection = () => {
  return (
    <div className="relative py-4 overflow-hidden min-h-screen flex justify-center items-center bg-[#0B0B09]">
    <div className="mx-auto max-w-[1140px]">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 px-4 w-full flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-white text-[48px] lg:text-[64px] font-normal leading-tight text-center lg:text-left">
            Build the Future. <span className="text-[#46AD47]">Deliver Today.</span>
          </h1>
          <p className="leading-[150%] text-[#B5B5B5] text-sm lg:text-base mt-4 mb-10 text-center lg:text-left">
            Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects
            in Houston, San Antonio, Austin, and Dallas.
          </p>
          <button className="py-3.5 px-6 font-semibold bg-[#46AD47] text-sm md:text-base text-black rounded-lg transition-all hover:shadow-[0_7px_29px_0_#46AD47]">
            Start Your Project
          </button>
        </div>
        <div className="lg:w-1/2 w-full relative">
          <img
            src={Vehical}
            alt="Vehical"
            className="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 pointer-events-none"
          />
        </div>
      </div>
    </div>
    <img
      src={EllipseImg}
      alt="ellipse"
      className="absolute bottom-[2%] left-[2%] pointer-events-none"
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
