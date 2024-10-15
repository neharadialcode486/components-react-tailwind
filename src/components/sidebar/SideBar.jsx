import React from 'react'
import Header from './Header'
import plus from "../../assets/images/webp/plus-iocns.png";

const SideBar = () => {
    return (
        <div className='flex justify-between bg-dark-gray'>
            <Header />
            <div className="bg-off-yellow w-full absolute top-0 flex justify-end left-0 h-[240px]">
                <img src={plus} alt="plus" className='max-w-[200px] w-full' />
            </div>
            <div className="p-8 relative z-20 w-full">
                <h2 className='font-bold text-4xl mt-2'>Welcome back, Zareh 👋🏻</h2>
                <p className='mt-5 font-normal text-base'>Below you find your upcoming events, enrolled programmes and progress</p>
                <div className="mt-12 flex justify-between gap-4">
                    <div className="rounded-lg w-[58.7%] bg-white p-8">
                        <h2 className='font-bold text-2xl'>You have 3 upcoming events</h2>
                    </div>
                    <div className="rounded-lg w-[41.3%] bg-white p-8">
                        <h2 className='font-bold text-2xl'>Your programmes</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar