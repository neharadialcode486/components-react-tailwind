import React from 'react';
import SecFourSideImg from '../assets/image/webp/sec-4-side-img.webp';

export const AboutForth = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='bg-[rgb(14,15,19)] w-full'>
            <div className='bg-img-4 w-full bg-no-repeat bg-cover'>
                <div className='container max-w-[1180px] mx-auto'>
                    <div className='flex flex-wrap xl:py-40 py-[60px]'>
                        <div className='flex xl:w-1/2 w-full flex-col justify-end text-center xl:text-left px-3'>
                            <h2 className='text-white text-[28px] sm:text-[36px] xl:text-[40px] font-semibold leading-[120%] max-w-[550px] mx-auto xl:mx-0 mb-4'>
                                Ready to make your <span className='text-[#FF8C00]'>income a lot more passive?</span>
                            </h2>
                            <p className='text-[#BEBBB8] mb-6 lg:mb-10'>
                                Book a service or consultation to get started today.
                            </p>
                            <div className='flex justify-center xl:justify-start items-center gap-6'>
                                <button className='bg-[#FFF0CC] border-2 border-[#FFF0CC] px-5 py-2.5 font-bold rounded-md transition-all duration-300 hover:bg-transparent hover:text-[#FFF0CC]'>
                                    Services
                                </button>
                                <button className='bg-[#FFF0CC] border-2 border-[#FFF0CC] px-5 py-2.5 font-bold rounded-md transition-all duration-300 hover:bg-transparent hover:text-[#FFF0CC]'>
                                    Book A Call
                                </button>
                            </div>
                        </div>
                        <div className='flex xl:w-1/2 w-full justify-end text-center xl:text-left relative px-3'>
                            <img className='sec-img max-xl:!static absolute top-[-120%] mt-6 lg:mt-10  xl:mt-0 max-xl:mx-auto max-sm:w-full' src={SecFourSideImg} alt='section image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
