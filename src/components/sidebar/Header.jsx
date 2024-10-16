import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import logo from "../../assets/images/svg/logo.svg";
import { TABS_SWIPER } from "../../utils/Helper";
import Icon from '../common/Icons';

const Header = () => {
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
        <div className='px-[120px] min-h-screen'>
            <div className="top-0 left-0 max-w-[240px] w-full z-[200] fixed min-h-screen bg-black p-5">
                <a href="/" className='w-fit mx-auto flex mt-6'><img src={logo} alt="logo" /></a>
                <div className="flex flex-col mt-16 gap-8">
                    {TABS_SWIPER.map((tab, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <span className={`w-1.5 h-1.5 flex rounded-full ${activeTab === idx ? "bg-off-yellow" : "bg-black"}`}></span>
                            <a href={`/${tab.title.toLowerCase()}`}
                                className={`text-base flex items-center gap-4 font-normal ${activeTab === idx ? "text-off-yellow" : "text-white"}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveTab(idx);
                                    window.history.pushState(null, '', `/${tab.title.toLowerCase()}`);
                                }} >
                                <Icon svgClass={activeTab === idx ? "fill-off-yellow" : "fill-white"} iconName={tab.icon} />
                                {tab.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header