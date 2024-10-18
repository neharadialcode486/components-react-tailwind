import React from 'react';
import HeroTwoTopLeftFirstImg from '../assets/images/png/hero-2-top-left-first-img.png'
import HeroTwoTopLeftSecImg from '../assets/images/png/hero-2-top-left-sec-img.png'
import HeroTwoTopRightFirstImg from '../assets/images/png/hero-2-top-right-first-img.png'
import HeroTwoTopRightSecImg from '../assets/images/png/hero-2-top-right-sec-img.png'
import HeroTwoBottomLeftFirstImg from '../assets/images/png/hero-2-bottom-left-first-img.png'
import HeroTwoBottomLeftSecImg from '../assets/images/png/hero-2-bottom-left-sec-img.png'
import HeroTwoBottomRightFirstImg from '../assets/images/png/hero-2-bottom-right-first-img.png'
import HeroTwoBottomRightSecImg from '../assets/images/png/hero-2-bottom-right-sec-img.png'

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center min-h-screen">
   
      <div className="absolute top-0 left-0">
        <div className="relative">
          <img src={HeroTwoTopLeftFirstImg} alt="hero-2-top-first-img" className="max-md:w-1/2" />
          <img src={HeroTwoTopLeftSecImg} alt="hero-2-top-sec-img" className="absolute left-[37%] max-md:w-1/2 top-[54%]" />
        </div>
      </div>

      <div className="absolute top-0 right-0 max-md:right-[-19%] max-sm:right-[-33%]">
        <div className="relative">
          <img src={HeroTwoTopRightFirstImg} alt="hero-2-top-first-img" className="max-md:w-1/2" />
          <img src={HeroTwoTopRightSecImg} alt="hero-2-top-sec-img" className="absolute max-md:w-1/2 right-[37%] max-md:right-[67%] top-[54%]" />
        </div>
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center mx-auto w-full max-w-[538px] p-6">
        <p className="text-center font-normal text-black text-[32px] leading-[150%] mb-0">A nice headline</p>
        <h1 className="font-semibold text-center text-[64px] leading-[150%] mb-2">Goes here</h1>
        <p className="text-center text-[#4D4D4D] text-[16px] leading-[150%]">
          Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec. Feugiat nibh ullamcorper egestas lectus risus ornare ullamcorper fames. Cursus libero nec facilisis risus malesuada arcu cum.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mt-[30px]">
          <button className="py-[11px] px-[56px] bg-white font-semibold text-[#3C278D] border border-[#3C278D] rounded-[12px] hover:bg-[#3C278D] hover:text-white transition-all duration-300">Button</button>
          <button className="py-[11px] px-[56px] bg-white font-semibold text-[#3C278D] border border-[#3C278D] rounded-[12px] hover:bg-[#3C278D] hover:text-white transition-all duration-300">Button</button>
        </div>
      </div>

      <div className="absolute bottom-[6px] left-0">
        <div className="relative">
          <img src={HeroTwoBottomLeftFirstImg} alt="hero-2-top-first-img" className="max-md:w-1/2" />
          <img src={HeroTwoBottomLeftSecImg} alt="hero-2-top-sec-img" className="absolute left-[37%] max-md:w-1/2 bottom-[54%]" />
        </div>
      </div>

      <div className="absolute bottom-0 max-md:right-[-16%] max-sm:right-[-32%] right-[34px]">
        <div className="relative">
          <img src={HeroTwoBottomRightSecImg} alt="hero-2-top-first-img" className="max-md:w-1/2" />
          <img src={HeroTwoBottomRightFirstImg} alt="hero-2-top-sec-img" className="absolute right-[37%] max-md:right-[70%] max-md:w-1/2 bottom-[54%]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
