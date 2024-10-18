import React from 'react'
import HeroFirstImg from '../assets/images/png/hero-image.png'

const HeroFirst = () => {
  return (
    <div className="min-h-screen flex overflow-hidden items-center py-4 lg:py-3">
    <div className="max-w-[1140px] mx-auto px-3">
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <div className="flex w-full lg:w-6/12 flex-col">
          {/* Simplified text classes */}
          <p className="text-3xl max-lg:text-2xl max-sm:text-xl font-normal text-black leading-150 mb-0">A nice headline</p>
          <h1 className="text-6xl max-md:text-5xl max-sm:text-4xl font-semibold text-black leading-150">Goes here</h1>
          <p className="text-base max-md:text-sm text-gray-700 leading-150 mt-4">
            Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec. Feugiat nibh ullamcorper egestas lectus risus iornare ullamcorper fames. Cursus libero nec facilisis risus malesuada arcu cum.
          </p>
          <p className="text-base max-md:text-sm text-gray-700 leading-150 mt-3">
            Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec.
          </p>
          <div className="flex gap-5 max-md:gap-4 flex-wrap mt-8">
            <button className="bg-white text-indigo-900 border border-indigo-900 rounded-lg px-14 py-[11px] font-semibold transition duration-300 hover:bg-indigo-900 hover:text-white max-md:text-sm">
              Button
            </button>
            <button className="bg-white text-indigo-900 border border-indigo-900 rounded-lg px-14 py-[11px] font-semibold transition duration-300 hover:bg-indigo-900 hover:text-white max-md:text-sm">
              Button
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <img src={HeroFirstImg}alt="hero" className="w-full lg:min-w-[976px]" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroFirst