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
    <section class="relative overflow-hidden flex max-sm:px-4 items-center justify-center min-h-screen">
        <div class="absolute top-0 left-0">
          <div class="relative">
            <img src={HeroTwoTopLeftFirstImg} alt="hero-2-top-first-img" class="max-[769px]:w-[57%]"/>
            <img src={HeroTwoTopLeftSecImg} alt="hero-2-top-sec-img" class="absolute left-[37%] lg:min-w-[247px] max-[769px]:w-[57%] top-[54%]"/>
          </div>
        </div>
        <div class="absolute top-0 right-0 max-[769px]:right-[-19%] max-sm:right-[-33%]">
          <div class="relative">
            <img src={HeroTwoTopRightFirstImg} alt="hero-2-top-first-img" class="max-[769px]:w-1/2"/>
            <img src={HeroTwoTopRightSecImg} alt="hero-2-top-sec-img" class="absolute right-[37%] top-[54%] max-[769px]:w-[50%] max-[769px]:right-[70%]"/>
          </div>
        </div>
        <div class="relative z-30 flex flex-col items-center justify-center mx-auto w-full md:px-4 lg:px-0 max-w-[538px]">
          <p class="text-center font-normal text-black text-[32px] max-sm:text-xl max-[769px]:text-2xl !leading-[150%] mb-0">A nice headline</p>
          <h1 class="font-semibold text-center text-[64px] max-[769px]:text-[52px] max-sm:text-[48px] leading-[150%] mb-2">Goes here</h1>
          <p class="text-center text-[#4D4D4D] max-w-[538px] mx-auto text-[16px] max-sm:text-xs max-[769px]:text-sm !leading-[150%]">Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec. Feugiat nibh ullamcorper egestas lectus risus ornare ullamcorper fames. Cursus libero nec facilisis risus malesuada arcu cum.</p>
          <div class="flex gap-6 max-sm:gap-4 justify-center flex-wrap mt-[30px]">
            <button
            class="hover:white max-lg:text-[14px] leading-150 max-md:text-smtext-white px-14 py-[11px] hover:bg-white rounded-xl text-white bg-indigo-900 hover:text-indigo-900 border border-indigo-900 transition duration-300 font-semibold">
            Button
        </button>
        <button
                class="hover:white max-lg:text-[14px] leading-150 max-md:text-smtext-white px-14 py-[11px] hover:bg-white rounded-xl text-white bg-indigo-900 hover:text-indigo-900 border border-indigo-900 transition duration-300 font-semibold">
                Button
            </button>
                </div>
        </div>
        <div class="absolute bottom-[6px] left-0">
          <div class="relative">
            <img src={HeroTwoBottomLeftFirstImg} alt="hero-2-top-first-img" class="max-[769px]:w-[57%]"/>
            <img src={HeroTwoBottomLeftSecImg} alt="hero-2-top-sec-img" class="absolute left-[37%] lg:min-w-[313px] max-[769px]:w-[57%] bottom-[54%]"/>
          </div>
        </div>
        <div class="absolute bottom-0 max-[769px]:right-[-4%] max-sm:right-[-27%] right-[34px]">
          <div class="relative">
            <img src={HeroTwoBottomRightSecImg} alt="hero-2-top-first-img" class="max-[769px]:w-[70%] max-sm:w-[49%]"/>
            <img src={HeroTwoBottomRightFirstImg} alt="hero-2-top-sec-img" class="absolute right-[37%] max-[769px]:right-[70%] max-sm:right-[80%] max-[769px]:w-[54%] max-sm:w-[49%] bottom-[54%]"/>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
