import React from 'react'
import Header from './Header'
import plus from "../../assets/images/webp/plus-iocns.png";

const SideBar = () => {
    return (
        <div className='flex justify-between'>
            <Header />
            <div className="bg-off-yellow w-full absolute top-0 flex justify-end left-0 h-[240px]">
                <img src={plus} alt="plus" className='max-w-[200px] w-full' />
            </div>
            <div className="p-8 relative z-20 w-full">
                <div className="flex mt-2">
                    <h2 className='font-bold text-4xl'>Welcome back, Zareh 👋🏻</h2>
                </div>
            </div>
        </div>
    )
}

export default SideBar