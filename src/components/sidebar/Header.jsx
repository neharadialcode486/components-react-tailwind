import React from 'react'
import logo from "../../assets/images/svg/logo.svg";

const Header = () => {
    return (
        <div className='px-[120px] min-h-screen'>
            <div className="top-0 left-0 max-w-[240px] w-full z-[200] fixed min-h-screen bg-black p-5">
                <a href="/" className='w-fit mx-auto flex mt-6'><img src={logo} alt="logo" /></a>
            </div>
        </div>
    )
}

export default Header