import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from "../../assets/images/svg/logo.svg";
import { TABS_DATA } from "../../utils/Helper";
import Icon from '../common/Icons';
import user from "../../assets/images/svg/user-icon.svg";

const Header = () => {
    const { tabName } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1920);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const tabIndex = TABS_DATA.findIndex(tab => tab.title.toLowerCase() === tabName?.toLowerCase());
        setActiveTab(tabIndex !== -1 ? tabIndex : 0);
    }, [tabName]);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1920);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open && window.innerWidth < 640);
    }, [open]);

    const handleClick = (idx, title) => {
        setActiveTab(idx);
        window.history.pushState(null, '', `/${title.toLowerCase()}`);
        setOpen(false);
    };

    return (
        <div className={`md:px-[120px] absolute sm:relative z-[200] duration-300 ease-linear sm:px-24 min-h-screen ${open ? "left-0" : "-left-full"}`}>
            <div className="top-0 sm:max-w-[192px] md:max-w-[240px] max-w-[240px] w-full flex flex-col justify-between sm:fixed min-h-screen bg-black sm:p-2 p-5 md:p-5"
                style={{ left: isLargeScreen ? 'calc((100vw - 1920px) / 2)' : '0%' }}>
                <div className="flex flex-col">
                    <a href="/" className="w-fit mx-auto mt-6"><img src={logo} alt="logo" /></a>
                    <div className="flex flex-col mt-16 gap-8">
                        {TABS_DATA.map((tab, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? "bg-off-yellow" : "bg-black"}`} />
                                <a href={`/${tab.title.toLowerCase()}`}
                                    className={`text-base flex items-center gap-4 font-normal ${activeTab === idx ? "text-off-yellow" : "text-white"}`}
                                    onClick={(e) => { e.preventDefault(); handleClick(idx, tab.title); }}>
                                    <Icon svgClass={activeTab === idx ? "fill-off-yellow" : "fill-white"} iconName={tab.icon} />
                                    {tab.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:p-5 sm:p-0 p-5 flex flex-col">
                    {["Help", "Contact us", "Log out"].map((text, idx) => (
                        <a key={idx} href="/" className="w-fit text-white opacity-50 mt-4 hover:scale-95 text-sm">{text}</a>
                    ))}
                    <a href="/" className="flex items-center gap-3.5 text-white mt-11">
                        <img src={user} alt="user" /> Zareh Geertjes
                    </a>
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className="fixed w-16 h-10 bg-white top-0 left-0 sm:hidden z-[150] grid place-items-center border-light-gray">
                {open ? "Close" : "Menu"}
            </div>
        </div>
    );
};

export default Header;