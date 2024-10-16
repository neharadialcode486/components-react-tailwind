import React from 'react'
import menImg from '../assets/images/webp/men-image.webp'
import rightEllipse from '../assets/images/webp/right-ellips.webp'
import leftEllipse from '../assets/images/webp/left-ellipse.webp'
import handUp from '../assets/images/svg/hand-up.svg'
import stoneImg from '../assets/images/webp/stone-image.webp'
import rocketImg from '../assets/images/webp/rocket-image.webp'

const RoadMapThird = () => {
  return (
    <div className='bg-black lg:pt-32 md:pt-20 lg:pb-36 md:pb-28 sm:pb-20 pb-16 xl:pb-[162px] sm:pt-16 pt-10 xl:pt-40 relative'>
      <img src={menImg} className='absolute  z-[1] xl:max-w-[184px] md:max-w-[130px] max-w-[80px] w-full right-[30px] top-[318px] sm:block hidden' alt="men-image" />
      <img src={leftEllipse} className='absolute left bottom-0 max-w-[550px] sm:block hidden' alt="left-ellipse" />
      <img src={stoneImg} className='absolute left-0 bottom-[160px] max-w-[889px] h-[277px] sm:block hidden' alt="stone-image" />
      <img src={rightEllipse} className='absolute top-[208px] h-[602px] right-0 max-w-[690px] w-full sm:block hidden' alt="right-ellips" />
          <div className='container'>
              <h2 className='lg:text-[56px] lg:leading-[67.77px] md:text-5xl sm:text-4xl text-3xl font-semibold text-center pb-4 text-white'>Roadmap</h2>
        <p className='text-white opacity-70 text-center'>This is not a short-term project, it's a project for life where the community will be involved and can evolve</p>
        <div className='relative max-w-[1056px] mx-auto mt-[94px] after:contents-[""] after:absolute after:top-0 after:bg-roadmap-line after:bottom-0 after:h-full after:w-[10px]'>
          <div className='relative after:absolute lg:ps-[125px] ps-24 after:contents-[""] after:top-0 lg:after:left-[-40px] after:left-0 after:bg-cover bg-center bg-no-repeat after:bg-question-one lg:after:w-[88px] after:w-14 after:h-14 after:z-10 lg:after:h-[88px]'>
             <img src={rocketImg} className='absolute lg:-left-4 lg:top-20 left-[10px] top-11 lg:w-[43px] w-8 h-28 lg:h-[134px] sm:block hidden' alt="rocket-image" />
            <h5 className='font-semibold text-3xl pb-4 sm:pb-[22px] lg:text-[40px] lg:leading-[48px] text-white'>2024</h5>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Launch our Unique NFTs</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Mint NFT’s (WL Members get early access)</p>
            </div>
          </div>
          <div className='relative lg:mt-40 md:mt-20 mt-12 after:absolute lg:ps-[125px] ps-24 after:contents-[""] after:top-0 lg:after:left-[-40px] after:left-0 after:bg-cover after:bg-question-two lg:after:w-[88px] after:w-14 after:h-14 after:z-10 lg:after:h-[88px]'>
            <h5 className='font-semibold text-3xl pb-4 sm:pb-[22px] lg:text-[40px] lg:leading-[48px] text-white'>2024</h5>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Reveal Our Unique NFT Creations</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Launch our Exclusive Option Trading Online Course. Includes 100s of Hours worth of Videos Going in Depth About Stocks, Option Trading, When to Enter / Exit and So Much More!</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70 max-w-[935px]'>Launch Our Daily Trade Watch List. See Exactly When our Experts Enter and Exitsa Trade and Which Stocks They Have Their Eyes On.</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>We will giveaway 1 ETH to 1 Lucky Holder and 0.5 ETH to 4 Members each, every month</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Purchase land in the metaverse and start development of members-only lounge</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>We will plan an exclusive party in Dubai for Holders Only! 100 holders will get hotel + flight paid for! 1 Lucky Holder will also have Chauffeur and Luxury Car included (Hold More NFTs to increase odds of winning) </p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>We will then Launch the second collection - holders will each get one free NFT and a chance to purchase before public mint.</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Donate $100,000 to a charity that will help kids learn about crypto and Web3.0 to give them a head start in life (charity name will be confirmed in coming weeks)</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Donate $100,000 to help families with children that wish to work for NASA or other space programmes (we will confirm the best way to achieve this to ensure all money is used the right way)</p>
            </div>
          </div>
          <div className='relative lg:mt-[136px] md:mt-20 mt-12 lg:pb-36 md:pb-20 pb-12 after:absolute lg:ps-[125px] ps-24 after:contents-[""] after:top-0 lg:after:left-[-40px] after:left-0 after:bg-cover after:bg-question-three lg:after:w-[88px] after:w-14 after:h-14 after:z-10 lg:after:h-[88px]'>
            <h5 className='font-semibold text-3xl pb-4 sm:pb-[22px] lg:text-[40px] lg:leading-[48px] text-white'>2024</h5>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Team up with industry experts to launch lectures for the community and free classes for children. All funded by us and free for the community!</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Send children from underprivileged households to a space camp during the summer break! (Or other camps the community may feel will benefit the children more)</p>
            </div>
            <div className='flex gap-4 items-start'>
              <img src={handUp} alt="hand-up" />
              <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Plan and design unique merch and collab with well-known designers. Holders will receive free and unique merch (with their NFTs printed on)</p>
            </div>
          </div>        
        </div>
        <div className='relative after:absolute lg:ps-[125px] ps-24 after:contents-[""] after:top-0 lg:after:left-[-40px] after:left-0 after:bg-cover after:bg-question-four lg:after:w-[88px] after:w-14 after:h-14 lg:after:h-[88px] after:z-10 max-w-[1056px] mx-auto'>
          <h5 className='font-semibold text-3xl pb-4 sm:pb-[22px] lg:text-[40px] lg:leading-[48px] text-white'>2024</h5>
          <div className='flex gap-4 items-start'>
            <img src={handUp} alt="hand-up" />
            <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Team up with Holders and the Community to Discuss what else they would like to see from us. (We are here for the community so we will have a huge influence from our amazing community)</p>
          </div>
          <div className='flex gap-4 items-start'>
            <img src={handUp} alt="hand-up" />
            <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Launch our own cryptocurrency to use in the metaverse and have many real-life benefits. NFT holders will receive free coins</p>
          </div>
          <div className='flex gap-4 items-start'>
            <img src={handUp} alt="hand-up" />
            <p className='text-base font-normal sm:pb-4 pb-3 text-white opacity-70'>Huge Christmas and NYE Party exclusively for holders only. A Vote will be held and the location will be determined by Holders!</p>
          </div>
          <a className='text-white' href="">And More</a>
        </div>
          </div>
    </div>
  )
}

export default RoadMapThird