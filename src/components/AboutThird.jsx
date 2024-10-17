import React from 'react';
import UnionImg from '../assets/image/webp/union-img.webp'
export const AboutThird = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container lg:max-w-[1320px] mx-auto max-lg:px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 flex flex-col justify-center px-3">
            <h2 className="text-[#6C6354] lg:text-5xl sm:text-4xl text-3xl max-w-[530px] font-semibold mb-3 leading-[120%] max-xl:mt-20">Submit a Request, We Start Immediately</h2>
            <p className="mb-8 max-w-[545px] text-[#989287] leading-[150%]">For recurring projects, you’re able to simply start a request, and we’ll start right away. For larger projects, we’ll be able to chat ahead of time to make sure we’re ready to start designing. All brand guidelines are kept on file for an even faster experience.</p>
            <button className="bg-gradient border-2  border-white hover:bg-white hover:border-[#4F7566] rounded-lg text-white py-5 max-w-[165px] text-center cursor-pointer  max-lg:mb-10">Contact Us</button>
          </div>
          <div className="w-full lg:w-6/12 px-3">
            <img className='sec-img max-w-[545px] mx-auto md:mx-0 max-h-[506.88px] cursor-pointer max-sm:w-full' src={UnionImg} alt="multi color img" />
          </div>
        </div>
      </div>
    </section>
  );
}