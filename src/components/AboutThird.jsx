import React from 'react';
import UnionImg from '../assets/image/webp/union-img.webp'
export const AboutThird = () => {
  return (
    <div className='min-h-screen flex items-center'>
      <div className='container lg:max-w-[1140px] mx-auto max-xl:px-5'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-6/12 flex flex-col justify-center xl:px-3 lg:mt-0 mt-12'>
            <h2
              className='text-[#6C6354] lg:text-5xl sm:text-4xl text-[28px] max-sm:leading-[120%] max-w-[530px] font-semibold mb-4 text-center lg:text-start lg:mx-0 mx-auto leading-[150%]'>
              Submit a Request, We Start Immediately</h2>
            <p
              className='max-w-[540px] text-[#989287] leading-[150%] mb-10 text-center lg:text-start lg:mx-0 mx-auto'>
              For recurring projects, you’re able to simply start a request, and we’ll start right away. For
              larger projects, we’ll be able to chat ahead of time to make sure we’re ready to start
              designing. All brand guidelines are kept on file for an even faster experience.</p>
            <button
              className='text-center max-w-[134px] border-2 border-white hover:border-[#4F7566] hover:!bg-white hover:bg-none hover:text-[#4F7566]  px-4 lg:mx-0 transition-all duration-[400ms] mx-auto contact-button-2 rounded-lg text-white  py-3 cursor-pointer max-lg:mb-10'>Contact
              Us</button>
          </div>
          <div className='w-full lg:w-6/12 xl:px-3  flex items-center lg:justify-end justify-center'>
            <img className='sec-img md:max-w-[455px] mb-12 lg:mb-0 max-md:w-full mx-auto md:mx-0'
              src={UnionImg} alt='union image' />
          </div>
        </div>
      </div>
    </div>
  );
}