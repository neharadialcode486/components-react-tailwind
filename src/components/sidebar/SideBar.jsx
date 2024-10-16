import React from 'react'
import Header from './Header'
import plus from "../../assets/images/webp/plus-iocns.png";
import Icon from '../common/Icons';

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
                        <h2 className='font-bold text-2xl mb-9'>You have 3 upcoming events</h2>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col items-center justify-center bg-black w-20 h-20 rounded-full">
                                <p className='font-black text-3xl text-white leading-7'>26</p>
                                <p className='font-light text-lg text-white leading-5'>May</p>
                            </div>
                            <div className="flex flex-col max-w-[444px] w-full">
                                <p className='font-bold text-base'>The role of LNG</p>
                                <div className="flex items-center mt-2">
                                    <Icon iconName='clockIcon' />
                                    <p className='font-normal text-xs ml-1'>14:00 - 15:00</p>
                                    <Icon className='ml-4' iconName='locationIcon' />
                                    <p className='font-normal text-xs ml-1'>Nijenborgh 6, room 1.06</p>
                                </div>
                            </div>
                            <Icon className='w-8 h-8 justify-center items-center rounded-full border border-dark-gray' iconName='rightArrowIcon' />
                        </div>
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