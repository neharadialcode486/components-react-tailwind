import React from 'react';
import HeroBottomCube from '../assets/images/svg/hero-9-bottom-cube.svg'
import HeroBottomCubeShadow from '../assets/images/svg/hero-9-bottom-cube-shadow.svg'
import HeroBottomCircle from '../assets/images/svg/hero-9-circles-bottom.svg'
import HeroBottomNineCube from '../assets/images/svg/hero-9-cube.svg'
import HeroBottomNineCubeShadow from '../assets/images/svg/hero-9-cube-shadow.svg'
import HeroBottomTopCircle from '../assets/images/svg/hero-9-top-circle.svg'
const HeroSection = () => {
  return (
    <div className="min-h-screen px-3 overflow-hidden relative bg-[#0B0D09] flex items-center justify-center">
    <div className="max-w-[1140px] px-3 relative w-full z-10 mx-auto">
      <h1 className="text-white text-left font-bold  !leading-[120%] text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl">
        Build the Future
      </h1>
      <h1 className="md:text-right  font-bold text-white  !leading-[120%] text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl">
        Deliver <span className="text-[#03D79B]">Today.</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-[58px]">
        <div className="max-w-xs">
          <p className="text-[#B6B7B5] max-lg:text-sm text-base  leading-[1.5] max-md:text-sm">
            Innovative Concrete Logistics - Revolutionizing concrete delivery for commercial and residential projects in Houston, San Antonio, Austin, and Dallas.
          </p>
        </div>
        <button className="py-[10px] px-[45px] font-semibold bg-[#46AD47] text-black rounded-[51px] max-h-[55px] max-w-[246px] border-0 transition-all hover:shadow-[0_7px_29px_0_#46AD47]">
          Start Your Project
        </button> 
      </div>
    </div>
    <img src={HeroBottomCube} alt="cube" className="absolute bottom-[46px] right-[89px] blur-lg pointer-events-none z-0" />
    <img src={HeroBottomCubeShadow} alt="cube-shadow" className="absolute bottom-0 right-0 blur-lg pointer-events-none z-0" />
    <img src={HeroBottomCircle} alt="bottom-circle" className="absolute left-1/2 bottom-0 translate-x-[-50%] pointer-events-none z-10" />
    <img src={HeroBottomNineCube} alt="cube" className="absolute top-[100px] left-0 blur-lg pointer-events-none z-0" />
    <img src={HeroBottomNineCubeShadow} alt="cube-shadow" className="absolute top-0 left-0 blur-lg pointer-events-none z-0" />
    <img src={HeroBottomTopCircle} alt="top-circle" className="absolute top-0 right-0 pointer-events-none z-10" />
  </div>
  );
};

export default HeroSection;
