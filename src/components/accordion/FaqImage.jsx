import React, { useState, useRef, useEffect } from 'react';
import { ACCORDION_DATA } from '../../utils/Helper';
import Icon from '../common/Icons';
import owl1 from "../../assets/images/webp/owl-bird.webp";
import owl2 from "../../assets/images/webp/owl-bird2.webp";
import owl3 from "../../assets/images/webp/owl-bird3.webp";
import owl4 from "../../assets/images/webp/owl-bird4.webp";

const FaqImage = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const owlImages = [owl1, owl2, owl3, owl4];
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
        <div className='z-[1] relative lg:py-24 md:py-20 sm:py-16 py-14 xl:py-28'>
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-10 items-center justify-center">
                    <div className="pt-1.5 xl:max-w-[529px] w-full">
                        <h2 className='font-lato xl:text-left text-center font-bold text-5xl'>FAQ </h2>
                        <p className='font-inter xl:text-left text-center opacity-70 font-normal text-base mt-4'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. </p>
                        {ACCORDION_DATA.slice(0, 4).map((item, index) => (
                            <div key={index} className={`overflow-hidden flex mt-2.5 justify-center relative duration-300 ease-linear border border-deep-blue rounded-2xl ${index === 0 ? "sm:mt-6" : "sm:mt-4"}`}>
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
                                                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero porttitor quam sed aliquet. Sodales vulputate elementum arcu donec. Feugiat nibh ullamcorper egestas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="max-w-[576px] w-full max-h-[349px] md:max-h-[594px] flex overflow-hidden">
                        <img src={openIndex !== null ? owlImages[openIndex] : owl1} alt="owl-bird" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqImage;