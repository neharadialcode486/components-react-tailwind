import React from 'react'
import SigmaLogo from '../assets/image/svg/sigma-logo.svg'
import FooterThreeFb from '../assets/image/svg/footer-3-fb.svg'
import FooterThreeTwitter from '../assets/image/svg/footer-3-twitter.svg'
import FooterThreeLinkedin from '../assets/image/svg/footer-3-linkedin.svg'
import FooterThreeInsta from '../assets/image/svg/footer-3-insta.svg'
const FooterThird = () => {
  return (
    <footer class="footer-bg-3 max-xl:bg-cover min-h-screen max-w-[1920px] mx-auto bg-black flex items-center justify-center flex-col">
            <div class="max-w-[1140px] w-full px-3 mx-auto">
                <div class="flex flex-wrap">
                    <div class="lg:w-5/12 w-full lg:text-left text-center lg:mt-0 mt-10">
                        <a href="/"><img class="mb-4 lg:mx-0 mx-auto" src={SigmaLogo} alt="sigma logo" /></a>
                        <h5 class="text-2xl font-semibold mb-4">Quam tincidunt tellus pellentesque</h5>
                        <p class="text-[#444949] max-w-[430px] lg:mx-0 mx-auto mb-4 ">Lorem ipsum dolor sit amet consectetur. Quam tincidunt tellus
                            pellentesque vitae augue pellentesque tellus. dolor sit amet consectetur Quam tincidunt.</p>
                        <div class="flex space-x-2 mb-5 lg:mx-0 mx-auto max-w-[174px] gap-4">
                            <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.facebook.com/" target="_blank"><img class="" src={FooterThreeFb} alt="fb" /></a>
                            <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.twitter.com/" target="_blank"><img class="" src={FooterThreeTwitter} alt="twitter" /></a>
                            <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.linkedin.com/" target="_blank"><img class="" src={FooterThreeLinkedin} alt="linkedin" /></a>
                            <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.instagram.com/" target="_blank"><img class="" src={FooterThreeInsta} alt="insta" /></a>
                        </div>
                    </div>
                    <div class="lg:w-2/12 w-6/12 lg:text-left text-center lg:mt-0 mt-10">
                        <h5 class="text-xl font-semibold mb-5">Support</h5>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">Getting Started</p>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">Help centre</p>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">Server status</p>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">Report a bug</p>
                    </div>
                    <div class="lg:w-2/12 w-6/12 lg:text-left text-center lg:mt-0 mt-10">
                        <h5 class="text-xl font-semibold mb-5">Quick Links</h5>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">Home</p>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">Insurance </p>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">About Us</p>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">Solution</p>
                        <p class="text-[#444949] mb-2.5 common-hover-3 cursor-pointer transition-all duration-300">Learn</p>
                    </div>
                    <div class="lg:w-3/12 w-full lg:text-left text-center lg:mt-0 mt-10">
                        <h5 class="text-xl font-semibold mb-5">Contact Info</h5>
                        <div class="flex items-center gap-3 mb-4 lg:mx-0 mx-auto max-w-[380px]">
                            <svg width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                                    fill="#38ADB5" />
                            </svg>
                            <a href="/" class="muted-gray about-text ">78 SW 7th Street Miami, FL 33130, USA</a>
                        </div>
                        <div class="flex items-center mb-4 gap-3 lg:mx-0 mx-auto max-w-[380px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                                    fill="#38ADB5" />
                            </svg>
                            <a href="tel:+123 456 7890" target="_blank" class="muted-gray about-text ">+123 456 7890</a>
                        </div>
                        <div class="flex items-center mb-4 gap-3 lg:mx-0 mx-auto max-w-[380px] ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
                                    fill="#38ADB5" />
                            </svg>
                            <a href="mailto:webmaster@example.com" target="_blank"
                                class="muted-gray about-text  max-w-[96px]">Support@sigmahealth caresolutions.com</a>
                        </div>
                    </div>
                </div>
                <div class="w-full h-[1px] bg-[#CADBDC] mb-4"></div>
                <p class="mb-0 muted-gray text-center">© 2024 Sigma Healthcare Solutions. All rights Reserved</p>
            </div>
        </footer>
  )
}

export default FooterThird