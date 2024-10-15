import React, { useEffect, useState } from 'react';
import navLogo from '../../assets/images/webp/nav-logo.webp';

const HeaderSecond = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = isMenuOpen ? "hidden" : "";
            } else {
                document.body.style.overflow = "";
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <div className="flex w-full mx-auto items-center sm:py-[26px] py-5 relative z-20 bg-white">
            <div className='container'>
                <div className='flex lg:justify-center items-center justify-between'>
                    <a href=""><img src={navLogo} alt="nav-logo" className='md:max-w-[87px] max-w-[45px] lg:hidden block' /></a>
                    <div
                        onClick={toggleMenu}
                        className='menuIcon relative max-sm:w-6 max-sm:h-[18px] max-md:w-8 max-md:h-6 max-lg:w-[38px] max-lg:h-[28px] z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="h-[4px] absolute top-3 w-full bg-[#3c278d] transform rotate-45 transition duration-300"></span>
                                <span className="h-[4px] absolute top-3 w-full bg-[#3c278d] transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[4px] w-full bg-[#3c278d]"></span>
                                <span className="h-[4px] w-full bg-[#3c278d]"></span>
                                <span className="h-[4px] w-full bg-[#3c278d]"></span>
                            </>
                        )}
                    </div>
                    <div className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-10 gap-11 max-lg:gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-white max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
                        <ul className='flex flex-col lg:flex-row gap-[55px] max-lg:gap-8 items-center lg:items-center z-10'>
                            <li onClick={toggleMenu}><a target='blank' className='font-inter font-normal text-base  text-black relative after:absolute hover:after:bg-black hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#about">TAB NAME</a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-inter font-normal text-base  text-black relative after:absolute hover:after:bg-black hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#news">TAB NAME</a></li>
                            <li className='lg:block hidden'><a href=""><img src={navLogo} alt="nav-logo" className='md:max-w-[87px] max-w-[45px]' /></a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-inter font-normal text-base  text-black relative after:absolute hover:after:bg-black hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#home">TAB NAME</a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-inter font-normal text-base  text-black relative after:absolute hover:after:bg-black hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#faq">TAB NAME</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSecond;