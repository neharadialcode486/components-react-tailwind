import React from 'react'
import Icon from '../common/Icons'

const DataSwiper = () => {
    return (
        <div className='mt-7 w-full'>
            <div className="flex w-full justify-between mb-6">
                <h2 className='font-bold text-2xl'>Recommended for you</h2>
                <div className="flex items-center gap-2">
                    <Icon className='hover:scale-95 w-8 h-8 cursor-pointer justify-center items-center flex hover:bg-dark-gray duration-300 ease-linear hover:border-off-yellow rounded-full border border-[#BBBAB6]' iconName='rightArrowIcon' />
                    <Icon className='hover:scale-95 rotate-180 cursor-pointer w-8 h-8 justify-center items-center flex hover:bg-dark-gray duration-300 ease-linear hover:border-off-yellow rounded-full border border-[#BBBAB6]' iconName='rightArrowIcon' />
                </div>
            </div>
            <div className="">
                
            </div>
        </div>
    )
}

export default DataSwiper