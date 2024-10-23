import React from 'react'
import FooterFirstTwitter from '../assets/image/svg/twiteer-icon.svg'
import FacebookIcon from '../assets/image/svg/facebook-icon.svg'
import BeIcon from '../assets/image/svg/be-icon.svg'

export const FooterFirst = () => {
    return (
        <footer className="flex max-w-[1920px] mx-auto flex-col items-center justify-center min-h-screen">
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
                                className="email placeholder:text-black bg-none outline-none sm:mr-5 border-none focus:outline-none flex-grow bg-transparent p-2 pl-1" />
                            <button
                                className="min-w-[84px] min-h-[39px] text-white border-2 border-transparent bg-[#3C278D] rounded-xl leading-[121%] hover:bg-white hover:border-[#3C278D] hover:text-[#3C278D] transition-all duration-300">Search</button>
                        </form>
                        <a href="/" className="hover:text-[#3C278D] text-black block text-center md:text-left">Follow us now</a>
                        <div className="flex justify-center lg:justify-start gap-2 mt-4">
                            <a className=' hover:scale-[1.2] transition-all duration-300' href="https://x.com/home?lang=en" target="_blank"><svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7935 0.668079C8.35946 0.668079 0.711872 7.84739 0.711872 16.7038C0.711872 25.5601 8.35946 32.7394 17.7935 32.7394C27.2275 32.7394 34.8751 25.5601 34.8751 16.7038C34.8751 7.84739 27.2275 0.668079 17.7935 0.668079ZM24.7418 13.804C24.7489 13.9409 24.7507 14.0779 24.7507 14.2116C24.7507 18.3875 21.3682 23.1999 15.1797 23.1999C13.351 23.2027 11.5604 22.7097 10.0231 21.7801C10.2847 21.8101 10.5534 21.8218 10.8256 21.8218C12.4021 21.8218 13.8523 21.319 15.0035 20.4705C14.3019 20.4575 13.6222 20.2395 13.0589 19.8466C12.4956 19.4538 12.0769 18.9058 11.8612 18.2789C12.365 18.3689 12.884 18.35 13.379 18.2238C12.6175 18.0793 11.9327 17.6919 11.4408 17.1275C10.9488 16.563 10.6799 15.8562 10.6797 15.1269V15.0885C11.1334 15.324 11.653 15.4677 12.2046 15.4844C11.4907 15.0383 10.9854 14.353 10.7919 13.5687C10.5984 12.7844 10.7314 11.9603 11.1637 11.265C12.0088 12.2405 13.0627 13.0385 14.2572 13.6074C15.4517 14.1763 16.7601 14.5033 18.0978 14.5673C17.9277 13.8897 18.0009 13.1783 18.306 12.5437C18.611 11.9091 19.1309 11.3869 19.7847 11.0583C20.4385 10.7297 21.1897 10.6131 21.9214 10.7266C22.6531 10.8401 23.3243 11.1773 23.8308 11.6859C24.5838 11.5461 25.3058 11.2868 25.966 10.9192C25.715 11.6511 25.1896 12.2725 24.4874 12.6681C25.1543 12.5927 25.8056 12.4244 26.4197 12.1687C25.9686 12.8032 25.4004 13.357 24.7418 13.804Z" fill="#3C278D" />
                            </svg>
                            </a>
                            <a className=' hover:scale-[1.2] transition-all duration-300' href="https://www.facebook.com/" target="_blank"><img src={FacebookIcon} alt="facebook" /></a>
                            <div className="hover:scale-[1.2] transition-all duration-300 bg-[#3c278d] rounded-full w-[34px] h-[34px] flex items-center cursor-pointer justify-center">
                                <a href="/"><img src={BeIcon} alt="be-icon" /></a>
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
