import React from 'react'
import TwiteerIcon from '../assets/image/svg/twiteer-icon.svg'
import FacebookIcon from '../assets/image/svg/facebook-icon.svg'
import BeIcon from '../assets/image/svg/be-icon.svg'

export const FooterFirst = () => {
  return (
    <footer className="flex flex-col items-center justify-center min-h-screen">
    <div className="container mx-auto px-6 max-w-[1140px]">
        <div className="flex flex-wrap -mx-3 justify-between">
            <div className="lg:w-3/12 md:w-6/12 w-full md:mt-0 mt-10">
                <div
                    className="bg-logo bg-[#C5C2C2] w-[87px] h-[48px] cursor-pointer flex items-center justify-center mx-auto md:mx-0 mb-6">
                    <p className="font-medium text-xl text-[#3C278D]">Logo</p>
                </div>
                <p className="text-gray-500 max-w-[221px]  mx-auto md:mx-0 md:text-left text-center">Discover Stellar
                    blockchain's unrivaled
                    speed, security, & scalability with Volag. Revolutionize finance.</p>
            </div>
            <div className="lg:w-2/12 w-6/12 md:text-left text-center max-lg:mt-10">
                <p className="font-medium mb-4 ">Quick Links</p>
                <ul className="flex flex-col gap-[13.5px] text-gray-700  ">
                    <li><a href="/" className="hover:text-[#3C278D]">Home</a></li>
                    <li><a href="/" className="hover:text-[#3C278D]">About</a></li>
                    <li><a href="/" className="hover:text-[#3C278D]">Community</a></li>
                    <li><a href="/" className="hover:text-[#3C278D]">RoadMap</a></li>
                    <li><a href="/" className="hover:text-[#3C278D]">Faqs</a></li>
                </ul>
            </div>
            <div className="lg:w-2/12 w-6/12 max-lg:mt-10 md:text-left text-center">
                <p className="font-medium mb-4 ">Links</p>
                <ul className="flex flex-col gap-[13.5px] text-gray-700 ">
                    <li><a href="/" className="hover:text-[#3C278D]">Terms & Conditions</a></li>
                    <li><a href="/" className="hover:text-[#3C278D]">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="lg:w-4/12 md:w-6/12 w-full max-lg:mt-10">
                <p className="font-medium mb-4 text-center md:text-left">Get in Touch</p>
                <form
                    className="mail bg-[#EAE7F2] rounded-xl flex justify-between items-center p-2 mb-4 max-w-[326px] md:ml-0 mx-auto ">
                    <input type="email" placeholder="Type Your Mail"
                        className="email placeholder:text-black bg-none outline-none sm:mr-5 border-none focus:outline-none flex-grow bg-transparent p-2 pl-1"/>
                    <button
                        className="min-w-[84px] min-h-[39px] text-white border-2 border-transparent bg-[#3C278D] rounded-xl leading-[121%] hover:bg-white hover:border-[#3C278D] hover:text-[#3C278D] transition-all duration-300">Search</button>
                </form>
                <a href="/" className="hover:text-[#3C278D] text-black block text-center md:text-left">Follow us now</a>
                <div className="flex justify-center lg:justify-start gap-2 mt-4">
                    <a href="https://x.com/home?lang=en" target="_blank"><img src={TwiteerIcon} alt="twitter"/></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src={FacebookIcon} alt="facebook"/></a>
                    <div className="bg-[#3c278d] rounded-full w-[34px] h-[34px] flex items-center cursor-pointer justify-center">
                        <a href="/"><img src={BeIcon} alt="be-icon"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="h-[1px] bg-[#3C278D] w-full my-6"></div>
    <p className="text-gray-500 text-center cursor-pointer mb-10">© 2023 Copyright company name. All Rights Reserved.
    </p>
</footer>
  )
}
