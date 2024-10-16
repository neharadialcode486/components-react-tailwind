import React from 'react'
import Header from './Header'
import plus from "../../assets/images/webp/plus-iocns.webp";
import Icon from '../common/Icons';
import { EVENTS_DATA } from '../../utils/Helper';
import DataSwiper from './DataSwiper';

const SideBar = () => {
    const Data = ['Requirements', 'Events', 'Career event', 'Activities', 'Masterclasses']
    return (
        <div className='flex justify-between bg-dark-gray'>
            <Header />
            <div className="bg-off-yellow w-full fixed max-w-[1920px] top-0 flex justify-end left-1/2 -translate-x-1/2 h-[240px]">
                <img src={plus} alt="plus" className='max-w-[200px] w-full lg:opacity-100 opacity-30' />
            </div>
            <div className="lg:p-8 p-3 relative z-20 w-full sm:w-[83.3%] overflow-hidden">
                <h2 className='font-bold text-3xl md:text-4xl mt-7 sm:mt-2'>Welcome back, Zareh 👋🏻</h2>
                <p className='mt-5 font-normal text-base'>Below you find your upcoming events, enrolled programmes and progress</p>
                <div className="mt-12 xl:flex-row flex-col flex justify-between gap-4">
                    <div className="rounded-lg w-full xl:w-[58.7%] bg-white p-3 lg:p-8">
                        <h2 className='font-bold text-2xl mb-4 lg:mb-9'>You have 3 upcoming events</h2>
                        {EVENTS_DATA.map((items, idx) => (
                            <div key={idx} className="flex justify-between items-center mt-4 w-full">
                                <div className="flex flex-col items-center justify-center bg-black md:w-20 md:h-20 sm:h-16 w-14 h-14 sm:w-16 rounded-full">
                                    <p className='font-black text-lg sm:text-xl md:text-3xl text-white md:leading-7'>{items.date}</p>
                                    <p className='font-light text-xs sm:text-sm md:text-lg text-white md:leading-5 capitalize'>{items.months}</p>
                                </div>
                                <div className="flex flex-col max-w-[444px] w-8/12 lg:w-full">
                                    <p className='font-bold text-sm md:text-base'>{items.title}</p>
                                    <div className="flex items-center mt-2">
                                        <Icon iconName='clockIcon' />
                                        <p className='font-normal text-xs ml-1'>{items.time}</p>
                                        <Icon className=' ml-2 sm:ml-4' iconName='locationIcon' />
                                        <p className='font-normal text-xs ml-1'>{items.location}</p>
                                    </div>
                                </div>
                                <a href="/" className='w-8 h-8 justify-center items-center flex hover:bg-dark-gray duration-300 ease-linear hover:border-off-yellow group rounded-full border border-dark-gray'><Icon className='duration-300 ease-linear group-hover:scale-90' iconName='rightArrowIcon' /></a>
                            </div>
                        ))}
                        <a href="/" className='flex items-center gap-2 font-semibold text-sm duration-300 ease-linear group hover:scale-105 mt-12 w-fit mb-5 md:mb-14'>More events <Icon className='duration-300 ease-linear group-hover:scale-90' iconName='rightArrowIcon' /></a>
                    </div>
                    <div className="rounded-lg w-full xl:w-[41.3%] bg-white p-3 lg:p-8">
                        <h2 className='font-bold text-2xl mb-4 lg:mb-9'>Your programmes</h2>
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="border border-dark-gray rounded-lg py-8 px-6 mt-4 relative overflow-hidden">
                                <h2 className='font-bold text-lg mb-4'>The role of LNG</h2>
                                {[...Array(5)]
                                    .slice(0, index === 0 ? 5 : 2)
                                    .map((_, idx) => (
                                        <div key={idx} className="mt-3 max-w-[256px] w-full">
                                            <p className="font-normal text-xs">{Data[idx]}</p>
                                            <div className="flex gap-2 mt-0.5">
                                                {idx === 2 ? null : <span className="w-1/2 flex bg-black rounded-3xl h-2"></span>}
                                                {Array.from({ length: idx === 1 || idx === 3 ? 4 : 1 }).map((_, spanIdx) => (
                                                    <span
                                                        key={spanIdx}
                                                        className={`flex bg-dark-gray rounded-3xl h-2 ${idx === 2 ? "w-full" : "w-1/2"}`}
                                                    ></span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                <span className='flex bg-off-yellow w-[120px] h-[120px] absolute rounded-full -top-11 -right-11'></span>
                                <Icon className='absolute top-4 right-4' iconName={index === 0 ? "lngIcon" : "hydrogenIcon"} />
                            </div>
                        ))}
                        <a href="/" className='flex items-center gap-2 font-semibold text-sm duration-300 ease-linear group hover:scale-105 mt-12 w-fit mb-1'>More programmes <Icon className='duration-300 ease-linear group-hover:scale-90' iconName='rightArrowIcon' /></a>
                    </div>
                </div>
                <DataSwiper />
            </div>
        </div>
    )
}

export default SideBar