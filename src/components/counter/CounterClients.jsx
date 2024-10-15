import { useEffect, useState, useRef } from 'react';
import { PLATFORM_DATA } from '../../utils/Helper';
import ellipse from "../../assets/images/webp/ellipse-white.webp";
import whiteEllipse from "../../assets/images/webp/white-ellpise.webp";

const CounterClients = () => {
    const [percentages, setPercentages] = useState(PLATFORM_DATA.map(() => 0));
    const sectionRef = useRef(null); 
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const sectionElement = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        PLATFORM_DATA.forEach((item, index) => {
                            let start = 0;
                            const end = parseInt(item.number);
                            const increment = 1;
                            const duration = 2000;
                            const stepTime = Math.abs(Math.floor(duration / (end - start)));
                            const timer = setInterval(() => {
                                start += increment;
                                setPercentages((prevPercentages) => {
                                    const newPercentages = [...prevPercentages];
                                    newPercentages[index] = start;
                                    return newPercentages;
                                });

                                if (start >= end) {
                                    clearInterval(timer);
                                }
                            }, stepTime);
                        });

                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (sectionElement) {
            observer.observe(sectionElement);
        }
        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="lg:py-24 sm:py-20 py-16 bg-off-gray relative">
            <div className="container relative z-10">
                <p className="mx-auto w-fit text-off-blue font-inter uppercase font-medium text-sm sm:text-base">Platform</p>
                <h2 className='text-center mt-1 sm:mt-2'>Through <span>Our Platform</span></h2>
                <p className='max-w-[710px] mx-auto text-center mt-1 sm:mt-4'>We’ve helped our partners and patients achieve</p>
                <div className="lg:mt-14 mt-8 sm:pt-3 md:pt-1 max-w-[861px] w-full flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-between mx-auto md:gap-4">
                    {PLATFORM_DATA.map((item, idx) => (
                        <div key={idx} className="flex justify-center px-3 mt-6 md:mt-0 w-full md:px-0">
                            <div className={`max-w-[268px] relative rounded w-full min-h-[207px] p-5 flex flex-col items-center justify-center ${idx === 0 ? "bg-light-green" : idx === 1 ? "bg-light-blue" : "bg-off-blue"}`}>
                                <p className={`font-inter text-5xl font-semibold text-white ${idx === 0 ? "lg:text-custom-4xl lg:leading-custom-4xl" : "lg:text-custom-2xl lg:leading-custom-2xl"}`}>
                                    {percentages[idx]}%
                                </p>
                                <p className={`font-inter font-normal text-white opacity-80 text-lg sm:text-xl text-center ${idx === 1 ? "max-w-[184px] mt-2" : "max-w-[150px]"} ${idx === 2 ? "mt-1" : ""}`}>
                                    {item.text}
                                </p>
                                <img src={whiteEllipse} className='w-[98px] h-[88px] absolute bottom-0 right-0' alt='ellipse' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={ellipse} className='absolute top-0 hidden sm:flex right-0' alt='ellipse' />
        </div>
    );
};

export default CounterClients;