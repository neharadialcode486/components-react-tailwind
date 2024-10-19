import React from 'react'
import FooterLogo from '../assets/image/svg/footer-2-logo.svg'
import FacebookIconSecond from '../assets/image/svg/facebook-2-icon.svg'
import FooterSecondTwitter from '../assets/image/svg/footer-2-twitter-icon.svg'
import FooterSecondLinkedin from '../assets/image/svg/footer-2-linkedin-icon.svg'
import FacebookIconSecond from '../assets/image/svg/facebook-2-icon.svg'
import InstaIconSecond from '../assets/image/svg/footer-2-insta-icon.svg'
import EmailIcon from '../assets/image/svg/email-icon.svg'

export const FooterSecond = () => {
  return (
    <footer class="min-h-screen bg-[#1E1E1E] flex items-center justify-center flex-col py-10">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
            <div class="xl:w-5/12 md:w-6/12 w-full text-center md:text-left">
                <div class="mb-4 max-w-[308px] md:mx-0 mx-auto">
                    <a href="/"><img src={FooterLogo} alt="footer-logo"/></a>
                </div>
                <p class=" flex text-gray-400 mb-6 max-w-[380px] md:mx-0 mx-auto">Lorem ipsum dolor sit amet
                    consectetur. Interdum
                    est
                    donec lacus vitae
                    elit dictum eros cras sagittis. Ac in sem mi ipsum urna</p>
                <div class="flex justify-center md:justify-start gap-[18px]">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={FacebookIconSecond} alt="facebook-icon"/>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                        <img src={FooterSecondTwitter} alt="twitter-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <img src={FooterSecondLinkedin} alt="linkedin-icon"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={InstaIconSecond} alt="instagram-icon"/>
                    </a>
                </div>
            </div>
            <div class="xl:w-3/12 sm:w-4/12 w-full text-center md:text-left mt-10 md:mt-0">
                <p class="text-white text-lg font-semibold mb-4">Service</p>
                <div>
                    <p class="hover:text-[#F7B103] text-[#BBBBBB] cursor-pointer mb-2">Hero</p>
                    <p class="hover:text-[#F7B103] text-[#BBBBBB] cursor-pointer mb-2">Why DatingStars</p>
                    <p class="hover:text-[#F7B103] text-[#BBBBBB] cursor-pointer mb-2">Meet DatingStars Talk</p>
                    <p class="hover:text-[#F7B103] text-[#BBBBBB] cursor-pointer mb-2">Contact Us</p>
                    <p class="hover:text-[#F7B103] text-[#BBBBBB] cursor-pointer mb-2">Testimonial</p>
                </div>
            </div>
            <div class="xl:w-4/12 md:w-full sm:w-6/12 w-full text-center xl:text-left mt-10 xl:mt-0">
                <p class="text-white text-lg font-semibold mb-4">Join a Newsletter</p>
                <p class="hover:text-[#F7B103] text-[#BBBBBB] cursor-pointer mb-6 ">Your Email</p>
                <div class="flex flex-col md:flex-row items-center max-w-[365px] xl:mx-0 mx-auto">
                    <form class="w-full">
                        <input type="email" placeholder="Enter Your Email"
                            class="w-full px-3.5 pt-3.5 placeholder:text-[#77808B] pb-2.5 bg-[#FEF7E6] rounded-md mb-4 md:mb-0 outline-none "/>
                    </form>
                    <button
                        class="py-2.5  px-5 bg-[#F7B103]  hover:bg-white hover:text-[#F7B103] border-2 border-transparent hover:border-[#F7B103] transition-all duration-300 rounded-xl ml-0 md:-ml-4 transitions font-semibold">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full h-px bg-[#4B4B4B] my-8"></div>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 text-center xl:text-left">
            <p class="text-gray-400">© 2024 DatingStars. All rights Reserved</p>
            <div class="text-gray-400 flex justify-center items-center xl:justify-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
                        fill="#F7B103" />
                </svg>
                <a href="/" class="hover:text-yellow-400">8819 Ohio St. South Gate</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:support@datingstars.com"
                    class="text-gray-400 -ml-10 hover:text-yellow-400 flex items-center justify-center xl:justify-start">
                    <img src={EmailIcon} alt="email"/>
                    support@datingstars.com
                </a>
                <a href="tel:+1 386-688-3295"
                    class="text-gray-400 hover:text-yellow-400 flex max-xl:justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4.5C3.67 3 3 3.67 3 4.5C3 12.61 10.39 20 18.5 20C19.33 20 20 19.33 20 18.5V15.5C20 14.67 19.33 14 18.5 14C17.57 14 16.68 13.84 15.86 13.54C15.28 13.31 14.6 13.45 14.14 13.91L12.71 15.34C10.19 14.13 8.19 12.13 6.98 9.61L8.41 8.18C8.87 7.72 9.01 7.04 8.79 6.46C8.49 5.65 8.33 4.77 8.33 3.83C8.33 3.37 7.96 3 7.5 3Z"
                            fill="#F7B103" />
                    </svg>
                    +1 386-688-3295
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}
