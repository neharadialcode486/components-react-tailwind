import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';  
import women from "../../assets/images/webp/women-img.png";
import { ACCORDION_DATA } from "../../utils/Helper";
import Icon from '../common/Icons';

const TABS_DATA = [
    {
        title: "néophyte",
        image: women,
        accordionContent: ACCORDION_DATA,
    },
    {
        title: "rentable",
        image: women,
        accordionContent: ACCORDION_DATA,
    },
    {
        title: "expérimenté",
        image: women,
        accordionContent: ACCORDION_DATA,
    },
    {
        title: "Malin",
        image: women,
        accordionContent: ACCORDION_DATA,
    },
    {
        title: "Indépendant",
        image: women,
        accordionContent: ACCORDION_DATA,
    },
];

const TabsAccordion = () => {
    const { tabName } = useParams(); 
    const [activeTab, setActiveTab] = useState(0); 
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    useEffect(() => {
        const tabIndex = TABS_DATA.findIndex(tab => tab.title.toLowerCase() === tabName?.toLowerCase());
        if (tabIndex !== -1) {
            setActiveTab(tabIndex);
        } else {
            setActiveTab(0); 
        }
    }, [tabName]);
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, TABS_DATA[activeTab].accordionContent.length);
    }, [activeTab]);
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const getHeight = (index) => {
        if (contentRefs.current[index]) {
            return contentRefs.current[index].scrollHeight + 'px';
        }
        return '0px';
    };

    return (
        <div className='bg-black md:py-16 sm:py-14 py-10'>
            <div className="container my-2.5">
                <div className="w-fit mx-auto bg-linear-green p-px rounded-full">
                    <p className='text-white py-3 px-4 font-medium rounded-full font-inter text-sm bg-deep-gray'>Nos formations</p>
                </div>
                <div className="overflow-x-scroll md:overflow-x-visible w-full mt-5 p-2">
                    <div className="max-w-[779px] relative z-10 w-full mx-auto flex md:justify-center items-center gap-4">
                        {TABS_DATA.map((tab, idx) => (
                            <a
                                href={`/${tab.title.toLowerCase()}`} 
                                key={idx}
                                className={`px-6 py-[18px] font-bold text-lg relative after:[''] after:rounded-lg rounded-lg after:absolute after:h-[103%] after:w-[102%] after:-left-px after:-top-px after:-z-10 ${activeTab === idx ? "after:bg-linear-green bg-deep-gray" : "after:bg-transparent"}`}
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    setActiveTab(idx); 
                                    window.history.pushState(null, '', `/${tab.title.toLowerCase()}`); 
                                }}
                            >
                                <span className={activeTab === idx ? "text-transparent bg-linear-green bg-clip-text font-inter" : "text-white font-inter"}>
                                    {tab.title}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={`mt-10 flex lg:flex-row items-center lg:items-start justify-center gap-4`}>
                    <div className="max-w-[500px]">
                        <img src={TABS_DATA[activeTab].image} alt={TABS_DATA[activeTab].title} className='w-full' />
                    </div>
                    <div className="max-w-[764px] w-full sm:p-8">
                        <h2 className='font-bold text-3xl text-center lg:text-left text-white'>Investisseur {TABS_DATA[activeTab].title}</h2>
                        {
                            TABS_DATA[activeTab].accordionContent.map((item, index) => (
                                <div key={index} className={`overflow-hidden flex mt-2.5 sm:mt-6 justify-center relative duration-300 ease-linear border rounded-2xl ${openIndex === index ? "border-off-green" : "border-light-gray"}`} >
                                    <div className="accordion w-full">
                                        <div
                                            role="button"
                                            className={`relative z-[1] flex items-center justify-between gap-1.5 cursor-pointer sm:px-6 pt-3 pb-2 px-3 sm:py-6 overflow-hidden ${openIndex === index ? "!p-0 max-h-0" : "sm:pb-5"}`}
                                            onClick={() => handleToggle(index)}
                                            aria-expanded={openIndex === index}
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    handleToggle(index);
                                                }
                                            }}
                                        >
                                            <h3 className="font-medium text-off-white font-inter text-base sm:text-lg" >
                                                <span className='font-inter font-normal'>{index + 1} .</span>{item.title}
                                            </h3>
                                            <div className={`${openIndex === index ? 'rotate-180' : ''} w-3 sm:w-5 duration-300 ease-linear`}>
                                                <Icon iconName='plusIcon' />
                                            </div>
                                        </div>
                                        <div
                                            ref={(el) => {
                                                contentRefs.current[index] = el;
                                            }}
                                            className={`accordion-content max-h-0 overflow-hidden duration-300 ease-linear ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                            style={{
                                                maxHeight: openIndex === index ? getHeight(index) : '0px',
                                            }}
                                        >
                                            <div className="flex flex-col p-6">
                                                <p className="text-dark-gray text-sm sm:text-base font-medium font-inter">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsAccordion;