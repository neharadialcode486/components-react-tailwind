import React from 'react'
import HeroFirstImg from '../assets/images/png/hero-image.png'

const HeroFirst = () => {
  return (
    <div className='min-h-screen flex overflow-hidden items-center py-4 lg:py-3'>
    <div className='max-w-[1140px] max-xl:px-6 px-3 mx-auto'>
      <div className='flex max-lg:flex-wrap gap-y-6'>
        <div className='flex w-6/12 justify-center flex-col max-lg:w-full'>
          <p className='mb-0 font-normal text-black max-lg:text-2xl !leading-[150%] max-sm:text-xl text-3xl'>A nice headline
          </p>
          <h1 className='font-semibold text-black text-[64px] max-lg:text-5xl !leading-[150%] max-sm:text-4xl'>
            Goes here</h1>
          <p className='mb-0 leading-6 max-lg:text-xs text-gray-700 pt-4 leading-150 text-base max-md:text-xs'>Lorem ipsum
            dolor sit amet
            consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec.
            Feugiat nibh ullamcorper egestas lectus risus io rnare ullamcorper fames. Cursus libero nec facilisis risus
            malesuada arcu cum.</p>
          <p className='mb-0 leading-6 max-lg:text-xs text-gray-700 leading-150 text-base mt-4 max-md:text-xs'>Lorem ipsum
            dolor sit amet
            consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec.</p>
          <div className='flex gap-[19px] max-md:gap-4 flex-wrap mt-8'>
            <button
              className='hover:white max-md:py-[9px] max-lg:text-[14px] leading-150 max-md:text-sm px-14 py-[11px] hover:bg-white rounded-xl text-white bg-[#3C278D] hover:text-indigo-900 border border-indigo-900 transition duration-300 font-semibold'>Button</button> 
            <button
              className='hover:white max-md:py-[9px] max-lg:text-[14px] leading-150 max-md:text-sm px-14 py-[11px] hover:bg-white rounded-xl text-white bg-[#3C278D] hover:text-indigo-900 border border-indigo-900 transition duration-300 font-semibold'>Button</button>
          </div>
        </div>
        <div className='w-6/12 px-3 max-lg:w-full'>
          <img src={HeroFirstImg} alt='hero-1-img' className='lg:min-w-[976px] w-full lg:translate-y-[70px]' />
        </div>
      </div>
    </div>
  </div> 
  )
}

export default HeroFirst