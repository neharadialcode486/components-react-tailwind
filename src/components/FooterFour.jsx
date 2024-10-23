import React from 'react'
import RightSideLayer from '../assets/image/svg/right-side-layer.svg'
import GamingLogo from '../assets/image/svg/gaming-logo.svg'
import LeftSidelayer from '../assets/image/svg/left-side-layer.svg'
import EllipsLeft from '../assets/image/svg/ellips-left.svg'
import EllipsRight from '../assets/image/svg/ellips-right.svg'
import FooterFourInsta from '../assets/image/svg/footer-4-insta.svg'
import FooterFourFb from '../assets/image/svg/footer-4-fb.svg'
import FooterFourTwitter from '../assets/image/svg/footer-4-twitter.svg'
import FooterFourYoutube from '../assets/image/svg/footer-4-youtube.svg'
const FooterFour = () => {
  return (
    <footer class="relative bg-cover max-w-[1920px] mx-auto min-h-screen bg-black flex items-center justify-center flex-col">
    <div class="left-side-layer ">
        <img class="pointer-events-none absolute hidden sm:block top-[25%] left-0 rounded-l-[40px]" src={RightSideLayer} alt="layer"/>
        <img class="pointer-events-none absolute bottom-[25%] right-0 rounded-r-[40px]" src={LeftSidelayer} alt="layer"/>
        <img class="pointer-events-none absolute top-[30%] left-[5%]" src={EllipsLeft} alt="layer"/>
        <img class="pointer-events-none absolute hidden sm:block top-[45%] right-[15%]" src={EllipsRight} alt="layer"/>
    </div>
    <div class="container flex items-center justify-center flex-col mx-auto">
        <a href="/"><img class="mb-[29px]" src={GamingLogo} alt="gaming"/></a>
        <div class="flex flex-col md:flex-row gap-4 text-center md:text-left mb-7">
            <div class="flex gap-4">
                <p class=" text-[#B3B3B3] common-hover transition-all duration-300 cursor-pointer">Home</p>
                <p class=" text-[#B3B3B3] common-hover transition-all duration-300 cursor-pointer">About Us</p>
                <p class=" text-[#B3B3B3] common-hover transition-all duration-300 cursor-pointer">Tokenomics</p>
            </div>
            <div class="flex gap-4 md:mx-0 mx-auto">
                <p class=" text-[#B3B3B3] common-hover transition-all duration-300 cursor-pointer">Utility</p>
                <p class=" text-[#B3B3B3] common-hover transition-all duration-300 cursor-pointer">Ecosystem</p>
            </div>
        </div>
        <div class="flex gap-3">
            <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.instagram.com/"><img src={FooterFourInsta} alt="insta"/></a>
            <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.twitter.com/" target="_blank"><img src={FooterFourTwitter} alt="twitter"/></a>
            <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.facebook.com/" target="_blank"><img src={FooterFourFb} alt="fb"/></a>
            <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.youtube.com/" target="_blank"><img src={FooterFourYoutube} alt="youtube"/></a>
        </div>
        <div class="w-full h-[1px] bg-[#4B4B4B] mb-9 mt-14"></div>
        <a href="/" class=" text-[#B3B3B3] ">Copyright Gaming Kirby</a>
    </div>
</footer>
  )
}

export default FooterFour