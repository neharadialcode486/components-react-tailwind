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
                            const isProfit = item.text === "GAINED IN PROFIT";
                            const end = parseInt(item.number.replace(/[^0-9]/g, ''));
                            const intermediateValue = 50000;
                            const threshold = isProfit ? 50 : Math.floor(end * 0.8);
                            const increment = 1;
                            const duration = 2000;
                            const stepTime = Math.abs(Math.floor(duration / (threshold - start)));
                            const timer = setInterval(() => {
                                start += increment;
                                setPercentages((prevPercentages) => {
                                    const newPercentages = [...prevPercentages];
                                    newPercentages[index] = start;
                                    return newPercentages;
                                });
                                if (start >= threshold) {
                                    clearInterval(timer);
                                    if (isProfit) {
                                        setTimeout(() => {
                                            setPercentages((prevPercentages) => {
                                                const newPercentages = [...prevPercentages];
                                                newPercentages[index] = intermediateValue;
                                                return newPercentages;
                                            });
                                            setTimeout(() => {
                                                setPercentages((prevPercentages) => {
                                                    const newPercentages = [...prevPercentages];
                                                    newPercentages[index] = end;
                                                    return newPercentages;
                                                });
                                            }, 500);
                                        }, 300);
                                    }
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
                <h2 className='text-center md:text-4xl max-w-[662px] w-full mx-auto text-3xl lg:text-[40px] font-bold'>
                    Clients trust us with their <span className='text-medium-orange'>Amazon strategy for a reason.</span>
                </h2>
                <div className="lg:mt-14 pt-3 md:pt-1 max-w-[1086px] w-full flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between mx-auto lg:gap-4">
                    {CLIENTS_DATA.map((item, idx) => (
                        <div key={idx} className={`flex px-3 mt-6 lg:mt-0 w-full md:w-1/2 lg:w-full lg:px-0 ${idx === 0 ? "lg:max-w-[308px]" : idx === 1 ? "lg:max-w-[322px]" : "lg:max-w-[356px]"}`}>
                            <div className={`border border-lighter-orange duration-300 ease-linear hover:border-medium-orange bg-white rounded-md min-h-[140px] gap-5 p-5 relative w-full flex items-center justify-center `}>
                                <img src={item.img} alt="icon" className='max-w-[70px] w-full' />
                                <div className="flex flex-col">
                                    <p className='font-inter text-[40px] font-bold'>
                                        {idx === 2 ? "$" : ""}{percentages[idx]}{idx === 0 || idx === 2 ? "+" : ""}
                                    </p>
                                    <p className='mt-1 uppercase font-bold text-base'>{item.text}</p>
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