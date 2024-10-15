import { useEffect, useState, useRef } from 'react';
import { CLIENTS_DATA } from '../../utils/Helper';

const CounterClients = () => {
    const [percentages, setPercentages] = useState(CLIENTS_DATA.map(() => 0));
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    useEffect(() => {
        const sectionElement = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        CLIENTS_DATA.forEach((item, index) => {
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
        <div ref={sectionRef} className="lg:py-24 sm:py-20 py-16 relative">
            <div className="container relative z-10">
                <h2 className='text-center md:text-4xl max-w-[662px] w-full mx-auto text-3xl lg:text-[40px] font-bold'>Clients trust us with their <span className='text-medium-orange'>Amazon strategy for a reason.</span></h2>
                <div className="lg:mt-14 sm:mt-8 pt-3 md:pt-1 max-w-[1086px] w-full flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-between mx-auto md:gap-4">
                    {CLIENTS_DATA.map((item, idx) => (
                        <div key={idx} className={`flex px-3 mt-6 md:mt-0 w-full md:px-0 ${idx === 0 ? "justify-start" : idx === 1 ? "justify-center" : "justify-end"}`}>
                            <div className='max-w-[308px] border border-lighter-orange duration-300 ease-linear hover:border-medium-orange bg-white rounded-md min-h-[140px] gap-5 p-3 relative w-full flex items-center justify-center'>
                                <img src={item.img} alt="icon" className='max-w-[70px] w-full' />
                                <div className="flex flex-col">
                                    <p className='font-inter text-[40px] font-bold'>
                                        {percentages[idx]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterClients;