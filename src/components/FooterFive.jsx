import React from 'react'
import FooterFivelogo from '../assets/image/svg/cointips-logo.svg'
import FooterFiveYoutube from '../assets/image/svg/footer-5-youtube.svg'
import FooterFiveTwitter from '../assets/image/svg/footer-5-twitter.svg'
const FooterFive = () => {
  return (
    <footer className="min-h-screen max-w-[1920px] mx-auto flex items-center justify-center flex-col bg-cover">
    <div className="bg-[#151619] rounded-2xl w-full">
        <div className="container mx-auto px-3 py-5 max-w-7xl">
            <div className="flex flex-wrap">
                <div className="xl:w-4/12 lg:w-6/12  mx-auto">
                    <a href="/"><img className="mb-2" src={FooterFivelogo} alt="logo"/></a>
                    <p className="text-[#A0A6B0] max-sm:text-center">© 2024 Cointips LLC. Tous droits réservés.</p>
                </div>
                <div className="xl:w-6/12 lg:w-6/12 md:w-8/12 w-full flex items-center max-lg:mt-10">
                    <div className="flex flex-wrap gap-8 mx-auto">
                        <p className="text-[#A0A6B0] max-md:text-center common-hover-5 cursor-pointer transition-all duration-300">CGV</p>
                        <p className="text-[#A0A6B0] max-md:text-center common-hover-5 cursor-pointer transition-all duration-300">Politique de confidentialité</p>
                        <p className="text-[#A0A6B0] max-md:text-center common-hover-5 cursor-pointer transition-all duration-300">Mentions légales</p>
                    </div>
                </div>
                <div className="xl:w-2/12 lg:w-full md:w-4/12 w-full flex items-center max-lg:mt-10">
                    <div className="flex mx-auto max-w-[200px]">
                        <a className='hover:scale-[1.2] transition-all duration-300' href="https://www.youtube.com/"target="_blank">
                            <img src={FooterFiveYoutube} alt="YouTube" className="pr-4"/>
                        </a>
                        <a className='hover:scale-[1.2] transition-all duration-300' href="https://x.com/home?lang=en"target="_blank">
                            <img src={FooterFiveTwitter} alt="Twitter"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default FooterFive