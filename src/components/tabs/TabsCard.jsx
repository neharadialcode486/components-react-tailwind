import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { TABS_SWIPER } from "../../utils/Helper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';  
import 'swiper/css';
import 'swiper/css/pagination';  

const TabsCard = () => {
    const { tabName } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const contentRefs = useRef([]);
    useEffect(() => {
        const tabIndex = TABS_SWIPER.findIndex(tab => tab.title.toLowerCase() === tabName?.toLowerCase());
        if (tabIndex !== -1) {
            setActiveTab(tabIndex);
        } else {
            setActiveTab(0);
        }
    }, [tabName]);
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, TABS_SWIPER[activeTab].tabsContent.length);
    }, [activeTab]);

    return (
        <div className='bg-white lg:py-24 md:py-16 sm:py-14 py-10'>
            <div className="container my-2.5">
                <h2 className='font-normal md:text-4xl text-3xl lg:text-5xl text-center'>Shop By <span className='font-bold'>Category</span></h2>
                <p className='font-normal text-base opacity-70 max-w-[695px] w-full mx-auto text-center mt-4'>Explore our extensive collection of traditional Moroccan garments, each crafted with care and precision to bring you the finest in cultural fashion.</p>
                <div className="overflow-x-scroll md:overflow-x-visible w-full mt-8 p-2">
                    <div className="min-w-[551px] relative z-10 w-fit mx-auto flex md:justify-center items-center gap-2.5 border-medium-gray border rounded-full p-2.5">
                        {TABS_SWIPER.map((tab, idx) => (
                            <a href={`/${tab.title.toLowerCase()}`} key={idx}
                                className={`px-[26px] py-2.5 font-bold rounded-full text-base relative ${activeTab === idx ? "bg-light-orange text-white" : "bg-transparent"}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(idx);
                                    window.history.pushState(null, '', `/${tab.title.toLowerCase()}`);
                                }} >
                                {tab.title}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="max-w-[1140px] mx-auto mt-10 w-full">
                    <Swiper className='!pb-14'
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
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
                                slidesPerView: 3,
                            }
                        }}
                    >
                        {TABS_SWIPER[activeTab]?.tabsContent?.map((items, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="overflow-hidden w-full rounded-xl relative h-full max-h-[378px]">
                                    <img src={items.image} alt="djellabas" className='w-full h-full' />
                                    <p className='font-semibold text-3xl absolute capitalize bottom-20 -left-4 z-10 -rotate-90 text-white'>{items.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default TabsCard;