import React from 'react';
import MultiColoredImg from '../assets/image/webp/multi-colored.webp'

export const AboutSecond = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
            <div className="w-full xl:w-1/2 ">
                <div className="overflow-hidden rounded-lg max-w-lg mx-auto xl:mx-0 mt-10 xl:mt-0">
                   <img className='hover:scale-150 transition-all duration-500 cursor-pointer' src={MultiColoredImg} alt="multi color img"/>
                </div>
            </div>
            <div className="w-full xl:w-1/2">
                <h3 className="text-4xl xl:text-left text-center font-semibold mb-4 mt-10 xl:mt-0">Lorem ipsum</h3>
                <p className="text-gray-700 max-w-lg mb-4 mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. Dis velit nam vitae hendrerit at egestas.</p>
                <p className="text-gray-700 max-w-lg mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.</p>
                <div className="mt-8 text-center xl:text-left">
                    <button className="pushable cursor-pointer bg-[#231754] rounded-xl border-0 p-0 ">
                        <span
                            className="front py-2.5 px-[52px] bg-[#3C278D]  rounded-xl block text-white border-2 border-transparent hover:border-[#231754] hover:bg-white hover:text-[#231754]">
                            Button
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}