import React, { useState, useRef, useEffect } from 'react';
import { ACCORDION_DATA } from '../../utils/Helper';
import Icon from '../common/Icons';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, ACCORDION_DATA.length);
    }, []);

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
        <div className='z-[1] relative py-16'>
            <div className="container mt-1.5 mb-16">
                <h2 className='font-lato text-center font-bold text-5xl'>FAQ </h2>
                <p className='text-center font-inter max-w-[788px] w-full mx-auto opacity-70 font-normal text-base mt-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. </p>
                <div className="pt-1.5">
                    {ACCORDION_DATA.map((item, index) => (
                        <div key={index} className="overflow-hidden flex mx-auto max-w-[793px] mt-2.5 sm:mt-4 justify-center relative duration-300 ease-linear border border-deep-blue rounded-2xl">
                            <div className="accordion w-full">
                                <div
                                    role="button"
                                    className={`bg-white relative z-[1] flex items-center justify-between gap-1.5 cursor-pointer sm:px-6 pt-3 pb-2 px-3 sm:pt-5 ${openIndex === index ? "sm:pb-4" : "sm:pb-5"}`}
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={openIndex === index}
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleToggle(index);
                                        }
                                    }}
                                >
                                    <h3 className="font-semibold text-deep-blue font-inter text-base sm:text-xl">
                                        <span className='font-inter font-normal'>{index + 1} . </span>{item.title}
                                    </h3>
                                    <div className={`${openIndex === index ? 'rotate-180' : ''} w-3 sm:w-5 duration-300 ease-linear`}>
                                        <Icon iconName='downIcon' />
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
                                    <div className="flex flex-col px-6 pb-4">
                                        <span className='bg-black flex w-full h-px opacity-40'></span>
                                        <p className="text-black opacity-70 sm:pt-3 pt-2 text-sm sm:text-base font-normal font-inter">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;