import React from 'react';
import MultiColoredImg from '../assets/image/webp/multi-colored.webp'

export const AboutSecond = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='max-w-[1280px] w-full mx-auto px-3 xl:px-0'>
                <div className='flex flex-wrap items-center'>
                    <div className='w-full xl:w-1/2 flex items-center justify-center px-0 xl:px-3 xl:mt-0 mt-6'>
                        <div className='overflow-hidden max-w-[558px] rounded-xl mx-auto xl:mx-0 mt-10 xl:mt-0'>
                            <img
                                className='rounded-xl xl:max-w-[558px] max-xl:w-full cursor-pointer transition-all duration-300 hover:scale-[1.1]'
                                src={MultiColoredImg} alt='multi color img' />
                        </div>
                    </div>
                    <div className='w-full xl:w-1/2 px-0 xl:px-3 mb-12 xl:mb-0'>
                        <h3 className='lg:text-5xl text-[#1E1E1E] md:text-4xl text-[28px] xl:text-left text-center font-semibold mb-4 xl:mb-[21px] mt-9 xl:mt-0 leading-[120%]'>Lorem
                            ipsum</h3>
                        <p className='text-[#464646] max-w-[496px] mb-4 mx-auto xl:mx-0'>Lorem ipsum dolor sit amet consectetur. Semper vitae
                            nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit
                            urna adipiscing diam. Dis velit nam vitae hendrerit at egestas.</p>
                        <p className='text-gray-700 max-w-[496px] mx-auto xl:mx-0'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                            eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna
                            adipiscing diam.</p>
                        <div className='mt-4 mb-4 text-center flex items-center justify-center xl:justify-start xl:text-left'>
                            <button
                                className='transition-all duration-300 front py-2.5 px-[54.5px] bg-[#3C278D] font-semibold rounded-xl block text-white border-2 border-transparent hover:border-[#231754] hover:bg-white hover:text-[#231754]'>
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}