import React from 'react';
import Flower from '../assets/images/png/hero-5-flower-img.png'
import HeroFifthImg from '../assets/images/png/hero-5-2nd-img.png'
const HeroSection = () => {
    return (
        <div className="flex py-3 justify-center items-center min-h-screen">
        <div className="container max-w-[1140px]">
          <div className="row gap-6 flex flex-col lg:flex-row">
            <div className="lg:w-5/12 px-3 w-full">
              <h1 className="font-bold max-lg:text-[38px] text-[58px] leading-[120%] text-[#4D4D4D] max-w-[388px]">
                Lorem ipsum dolor sit
              </h1>
              <p className="mt-10 max-lg:mt-2.5 text-[#4D4D4D] max-lg:text-sm max-md:text-xs leading-[150%]">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. Dis velit nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem vitae sed.
              </p>
              <button className="mt-8 max-md:mt-5 px-14 font-semibold py-[9px] bg-white text-[#3C278D] border border-[#3C278D] rounded-xl hover:bg-[#3C278D] hover:text-white transition-all">
                Button
              </button>
            </div>
            <div className="lg:w-7/12 px-3 w-full flex md:justify-center md:items-center min-h-[527px]">
              <div className="relative min-h-[527px] sm:translate-x-8 max-w-[665px]  w-full">
                <img src={Flower} alt="flower" className="w-full max-w-[427px] pointer-events-none" />
                <img src={HeroFifthImg} className="absolute max-md:right-0 right-[7%] pointer-events-none bottom-0 w-full max-w-[427px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;
