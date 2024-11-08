import React from 'react';

const HeroSection = () => {
  return (
    <div  className='flex items-center hero-3-bg-img justify-center min-h-screen bg-cover bg-center waves-bg-img'>
    <div className='container max-sm:px-5 flex flex-col items-center w-full'>
        <h1 className='font-bold mb-4 text-center leading-[120%] max-sm:text-[38px] max-lg:text-[42px] max-md:text-[38px] text-[58px]'>Lorem ipsum Lorem ipsum</h1>
        <div className='text-info max-w-[777px] max-lg:px-3 mx-auto'>
            <p className='text-center mb-[21px] text-[#4A4A4B] max-lg:text-sm max-sm:text-xs max-md:text-sm max-md:max-w-[744px] max-w-[771px] mx-auto font-normal'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna
                adipiscing diam.</p>
        </div>
        <button
            className='hover:white max-md:py-[9px] max-lg:text-[14px] max-md:px-[50px] leading-150 max-md:text-smtext-white px-14 py-[11px] hover:bg-white rounded-xl text-white bg-indigo-900 hover:text-indigo-900 border border-indigo-900 transition duration-300 font-semibold'>
            Button
        </button>
    </div>
</div>
  );
};

export default HeroSection;
