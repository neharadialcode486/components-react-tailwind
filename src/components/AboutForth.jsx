import React from 'react';
import SecFourSideImg from '../assets/image/webp/sec-4-side-img.webp';

export const AboutForth = () => {
  return (
    <section class="min-h-screen flex items-center justify-center">
    <div class="bg-[#0E0F13] w-full">
        <div class="bg-sec4-img w-full bg-no-repeat bg-cover">
            <div class="container max-w-[1320px] mx-auto px-3">
                <div class="flex flex-wrap  py-40 ">
                    <div class="flex lg:w-1/2 w-full flex-col justify-center text-center lg:text-left px-3">
                        <h2 class="text-white text-4xl xl:text-[40px] font-semibold leading-[120%] max-w-[550px] mx-auto xl:mx-0 mb-4">
                            Ready to make your <span class="text-[#FF8C00]">income a lot more passive?</span>
                        </h2>
                        <p class="text-[#BEBBB8] mb-3 xl:mb-12">
                            Book a service or consultation to get started today.
                        </p>
                        <div class="flex justify-center lg:justify-start items-center gap-4">
                            <button class="bg-[#FFF0CC] border-2 border-[#FFF0CC] px-6 py-3 font-bold rounded-md transition-all duration-300 hover:bg-transparent hover:text-[#FFF0CC]">
                                Services
                            </button>
                            <button class="bg-[#FFF0CC] border-2 border-[#FFF0CC] px-3 sm:px-6 py-3 font-bold rounded-md transition-all duration-300 hover:bg-transparent hover:text-[#FFF0CC]">
                                Book A Call
                            </button>
                        </div>
                    </div>
                    <div class="flex lg:w-1/2 w-full flex-col justify-center xl:justify-end text-center lg:text-left relative px-3">
                        <img className="sec-img max-lg:!static absolute top-[-120%] max-lg:mt-10 max-lg:mx-auto max-sm:w-full" src={SecFourSideImg} alt="side img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};
