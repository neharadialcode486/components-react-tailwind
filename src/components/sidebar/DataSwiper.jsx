import React from 'react';
import Icon from '../common/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { SWIPER_DATA } from '../../utils/Helper';

const DataSwiper = () => {
    return (
        <div className='mt-7 relative w-full'>
            <div className="flex w-full justify-between mb-6">
                <h2 className='font-bold text-2xl'>Recommended for you</h2>
                <div className="flex items-center gap-2 relative">
                    <Icon className="hover:scale-95 swiper-button-next !top-auto !relative !right-auto !w-8 !h-8 cursor-pointer hover:bg-white duration-300 ease-linear hover:border-off-yellow rounded-full border border-[#BBBAB6]" iconName='rightArrowIcon' />
                    <Icon className="hover:scale-95 swiper-button-prev !top-auto !relative !left-auto rotate-180 cursor-pointer !w-8 !h-8 hover:bg-white duration-300 ease-linear hover:border-off-yellow rounded-full border border-[#BBBAB6]" iconName='rightArrowIcon' />
                </div>
            </div>
            <div className=" w-full">
                <Swiper
                    className='!pb-14'
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    {SWIPER_DATA.map((items, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative overflow-hidden rounded-lg w-full">
                                <div className="relative overflow-hidden">
                                    <img src={items.img} alt={items.img} className='w-full relative z-10 hover:scale-110 duration-300 ease-linear' />
                                </div>
                                <div className="bg-white w-full -mt-0.5 p-6">
                                    <h2 className='mt-0.5 text-base leading-4 font-bold min-h-8'>{items.title}</h2>
                                    <div className="flex items-center gap-2.5 mt-4">
                                        <Icon iconName='clockIcon' />
                                        <p className='font-normal text-xs'>Online</p>
                                    </div>
                                    <div className="flex items-center gap-2.5 mb-4 mt-2">
                                        <Icon iconName='locationIcon' />
                                        <p className='font-normal text-xs'>80000</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default DataSwiper;