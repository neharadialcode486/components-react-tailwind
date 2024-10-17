import React from 'react'
import roadmapImg from '../assets/images/png/roadmap-third.png'
import arrowIcon from '../assets/images/svg/arrow-icon.svg'
import roadmapSmallImg from '../assets/images/svg/roadmap-third-small-img.svg'

const RoadMapThirdRoad = () => {
  return (
    <div className="bg-black pt-12 sm:pt-8">
      <h1 className="text-[40px] font-semibold text-white text-center lg:pb-12">
        Roadmap
      </h1>
      <div className="pt-28 relative max-w-[1920px] mx-auto hidden lg:block">
        <div className="max-w-[250px] xl:max-w-[280px] absolute end-[1%] top-0">
          <div className="flex items-start gap-[14px]">
            <img src={arrowIcon} alt="arrow-icon" />
            <div>
              <h2 className="text-xl xl:text-2xl font-semibold text-white">
                Facilisi vulputate
              </h2>
              <p
                className="text-sm xl:text-base text-white opacity-70 pt-3 xl:pt-5"
              >
                Te id magna at facilisi Tempus id sed orci augue venenatis
                integer.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[250px] xl:max-w-[280px] absolute end-[26%] top-[4%]">
          <div className="flex items-start gap-[14px]">
            <img src={arrowIcon} alt="arrow-icon" />
            <div>
              <h2 className="text-xl xl:text-2xl font-semibold text-white">
                Facilisi vulputate
              </h2>
              <p
                className="text-sm xl:text-base text-white opacity-70 pt-3 xl:pt-5"
              >
                Te id magna at facilisi Tempus id sed orci augue venenatis
                integer.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[250px] xl:max-w-[280px] absolute end-[50%] top-[9%]">
          <div className="flex items-start gap-[14px]">
            <img src={arrowIcon} alt="arrow-icon" />
            <div>
              <h2 className="text-xl xl:text-2xl font-semibold text-white">
                Facilisi vulputate
              </h2>
              <p
                className="text-sm xl:text-base text-white opacity-70 pt-3 xl:pt-5"
              >
                Te id magna at facilisi Tempus id sed orci augue venenatis
                integer.
              </p>
            </div>
          </div>
        </div>
        <div
          className="max-w-[250px] xl:max-w-[280px] absolute start-[11.5%] top-[31%]"
        >
          <div className="flex items-start gap-[14px]">
            <img src={arrowIcon} alt="arrow-icon" />
            <div>
              <h2 className="text-xl xl:text-2xl font-semibold text-white">
                Facilisi vulputate
              </h2>
              <p
                className="text-sm xl:text-base text-white opacity-70 pt-3 xl:pt-5"
              >
                Te id magna at facilisi Tempus id sed orci augue venenatis
                integer.
              </p>
            </div>
          </div>
        </div>
        <img src={roadmapImg} alt="roadmap-third" />
      </div>
      <div className="lg:hidden container px-5 sm:px-20 pb-12 lg:pb-[63px] flex">
        <img
          className="w-[40px] pt-10"
          src={roadmapSmallImg}
          alt="roadmap-third-small-img"
        />
        <div>
          <div className="max-w-[250px] pt-10">
            <div className="flex items-start gap-[14px]">
              <img src={arrowIcon} alt="arrow-icon" />
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Facilisi vulputate
                </h2>
                <p className="text-sm xl:text-base text-white opacity-70 pt-4">
                  Te id magna at facilisi Tempus id sed orci augue venenatis
                  integer.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[250px] pt-10">
            <div className="flex items-start gap-[14px]">
              <img src={arrowIcon} alt="arrow-icon" />
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Facilisi vulputate
                </h2>
                <p className="text-sm xl:text-base text-white opacity-70 pt-4">
                  Te id magna at facilisi Tempus id sed orci augue venenatis
                  integer.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[250px] pt-10">
            <div className="flex items-start gap-[14px]">
              <img src={arrowIcon} alt="arrow-icon" />
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Facilisi vulputate
                </h2>
                <p className="text-sm xl:text-base text-white opacity-70 pt-4">
                  Te id magna at facilisi Tempus id sed orci augue venenatis
                  integer.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[250px] pt-10">
            <div className="flex items-start gap-[14px]">
              <img src={arrowIcon} alt="arrow-icon" />
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Facilisi vulputate
                </h2>
                <p className="text-sm xl:text-base text-white opacity-70 pt-4">
                  Te id magna at facilisi Tempus id sed orci augue venenatis
                  integer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMapThirdRoad