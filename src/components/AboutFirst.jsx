import React from 'react';

export const AboutFirst = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='bg-img-1 w-full py-[124px] bg-cover bg-no-repeat'>
            <div className='container mx-auto px-3 sm:px-5'>
                <h3 className='text-center lg:text-5xl sm:text-4xl text-[28px] font-semibold mb-4 lg:mb-[21.5px]'>Lorem ipsum</h3>
                <p className='mx-auto max-w-[817px] lg:px-0 sm:px-4 text-[#474747] text-center'>Lorem ipsum dolor sit amet consectetur. Semper
                    vitae nullam
                    eget
                    consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna
                    adipiscing diam. Dis velit nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem vitae
                    sed.
                </p>
                <div className='text-center mt-8'>
                    <button className='mx-auto transition-all duration-[0.4s] font-semibold cursor-pointer front py-2.5 px-[55px] bg-[#3C278D]  rounded-xl block text-white border-2 border-transparent hover:border-[#231754] hover:bg-white hover:text-[#231754]'>
                        Button
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}