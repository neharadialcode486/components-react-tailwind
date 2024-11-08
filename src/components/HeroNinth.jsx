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
            <h1 className="text-white max-xl:text-[112px] max-lg:!leading-[100%] text-left font-bold !leading-[120%] text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl">
                Build the Future
            </h1>
            <h1 className="md:text-righ max-xl:text-[112px] max-lg:!leading-[100%] text-end max-xl:text-start font-bold text-white !leading-[120%] text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl">
                Deliver <span className="text-[#03D79B]">Today.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-md:mt-[30px] mt-[58px]">
                <div className="max-w-[355px] w-full">
                    <p className="text-[#B6B7B5] max-lg:text-sm text-base leading-[1.5] max-md:text-sm">
                        Innovative Concrete Logistics - Revolutionizing concrete delivery for
                        commercial and residential
                        projects in Houston, San Antonio, Austin, and Dallas.
                    </p>
                </div>
                <button
                className="py-[15.5px] px-[45.5px] max-sm:text-[14px] z-20 relative font-semibold bg-[#46AD47] text-black rounded-[51px] max-h-[55px] max-w-[246px] border-0 transition-all hover:shadow-[0_7px_29px_0_#46AD47]">Start
                Your Project</button>
            </div>
        </div>
        <img src={HeroBottomCube} alt="cube"
            className="absolute pointer-events-none bottom-[46px] right-[89px] blur-[10px] z-0"/>
        <img src={HeroBottomCubeShadow} alt="cube-shadow"
            className="absolute pointer-events-none bottom-0 right-0 blur-[10px] z-0"/>
        <img src={HeroBottomCircle} alt="bottom-circle"
            className="absolute bottom-[-11%] left-1/2 translate-x-[-50%] pointer-events-none"/>
        <img src={HeroBottomNineCube} alt="cube"
            className="absolute top-[21%] left-0 pointer-events-none blur-[10px] z-0"/>
        <img src={HeroBottomNineCubeShadow} alt="cube-shadow"
            className="absolute top-0 left-0 pointer-events-none blur-[10px] z-0"/>
        <img src={HeroBottomTopCircle} alt="top-circle"
            className="absolute top-[-9%] right-[-8%] pointer-events-none z-10"/>
    </div>
  );
};

export default HeroSection;
