import React from 'react';
import Flower from '../assets/images/png/hero-5-flower-img.png'
import HeroFifthImg from '../assets/images/png/hero-5-2nd-img.png'
const HeroSection = () => {
    return (
        <div className="flex py-3 justify-center items-center min-h-screen">
        <div className="container max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-5/12 w-full px-3">
              <h1 className="font-bold text-4xl lg:text-[58px] leading-tight text-[#4D4D4D] max-w-[388px]">
                Lorem ipsum dolor sit
              </h1>
              <p className="mt-4 text-[#4D4D4D] leading-loose">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. Dis velit nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem vitae sed.
              </p>
              <button className="mt-8 px-14 py-[9px]  bg-white text-[#3C278D] border border-[#3C278D] rounded-lg hover:bg-[#3C278D] hover:text-white transition-all">
                Button
              </button>
            </div>
            <div className="lg:w-7/12 w-full flex justify-center items-center min-h-[527px] px-3">
              <div className="relative translate-x-8 min-h-[527px] max-w-[665px] w-full">
                <img src={Flower} alt="flower" className="w-full max-w-[427px] pointer-events-none" />
                <img src={HeroFifthImg} className="absolute right-[7%] bottom-0 w-full max-w-[427px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;
