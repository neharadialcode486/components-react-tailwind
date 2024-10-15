import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import women from "../../assets/images/webp/women-img.webp";

const CountDown = () => {
    const calculateTimeLeft = () => {
        const targetTime = new Date().setHours(24, 0, 0, 0);
        const currentTime = new Date();
        const difference = targetTime - currentTime;
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const variants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -50, opacity: 0 },
    };
    const getTensAndUnits = (num) => ({
        tens: Math.floor(num / 10),
        units: num % 10,
    });
    const { tens: hoursTens, units: hoursUnits } = getTensAndUnits(timeLeft.hours || 0);
    const { tens: minutesTens, units: minutesUnits } = getTensAndUnits(timeLeft.minutes || 0);
    const { tens: secondsTens, units: secondsUnits } = getTensAndUnits(timeLeft.seconds || 0);

    return (
        <div className='bg-off-pink lg:py-20 md:py-16 py-14 relative'>
            <div className="container min-h-[598px] flex items-center">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="max-w-[456px] w-full">
                        <h2 className="font-normal text-center lg:text-left text-3xl sm:text-4xl md:text-5xl">Sale Of <span className="font-bold">The Day</span></h2>
                        <p className="font-normal text-center lg:text-left opacity-70 text-base mt-4">
                            Don't miss out on our exclusive daily deals! Enjoy significant discounts on select traditional Moroccan garments.
                        </p>
                        <div className="mt-7 flex mx-auto lg:mx-0 gap-2.5 w-fit">
                            <div className="relative w-[50px] sm:w-[60px] md:w-[72px] text-center">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={hoursTens}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="absolute -left-2.5 sm:-left-3 md:-left-5 w-full font-medium text-3xl sm:text-4xl md:text-[55px] text-center"
                                    >
                                        {hoursTens}
                                    </motion.p>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={hoursUnits}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="absolute w-full -right-2.5 sm:-right-3 md:-right-5 font-medium text-3xl sm:text-4xl md:text-[55px] text-center"
                                    >
                                        {hoursUnits}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                            <p className="font-medium text-3xl sm:text-4xl md:text-[55px]">:</p>
                            <div className="relative w-[50px] sm:w-[60px] md:w-[72px] text-center">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={minutesTens}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="absolute -left-2.5 sm:-left-3 md:-left-5 w-full font-medium text-3xl sm:text-4xl md:text-[55px] text-center"
                                    >
                                        {minutesTens}
                                    </motion.p>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={minutesUnits}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="absolute w-full -right-2.5 sm:-right-3 md:-right-5 font-medium text-3xl sm:text-4xl md:text-[55px] text-center"
                                    >
                                        {minutesUnits}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                            <p className="font-medium text-3xl sm:text-4xl md:text-[55px]">:</p>
                            <div className="relative w-[50px] sm:w-[60px] md:w-[72px] text-center">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={secondsTens}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="absolute -left-2.5 sm:-left-3 md:-left-5 w-full font-medium text-3xl sm:text-4xl md:text-[55px] text-center"
                                    >
                                        {secondsTens}
                                    </motion.p>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={secondsUnits}
                                        variants={variants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="absolute -right-2.5 sm:-right-3 md:-right-5 w-full font-medium text-3xl sm:text-4xl md:text-[55px] text-center"
                                    >
                                        {secondsUnits}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="flex sm:mt-4 lg:mt-7 items-center mx-auto lg:mx-0 w-fit">
                            <p className="font-semibold text-lg ml-3">Hours</p>
                            <p className="font-semibold text-lg mx-4 sm:ml-9 sm:mr-6">Minutes</p>
                            <p className="font-semibold text-lg">Seconds</p>
                        </div>
                        <button className='mt-10 mx-auto lg:mx-0 block font-bold text-sm sm:text-base text-white px-3 sm:px-6 py-2 sm:py-3.5 bg-off-red rounded-lg duration-300 ease-linear hover:bg-white hover:text-off-red'>Shop Now</button>
                    </div>
                    <img src={women} alt="women" className="lg:top-1/2 mt-6 lg:mt-0 lg:-translate-y-1/2 lg:right-0 lg:absolute w-full lg:w-1/2" />
                </div>
            </div>
        </div>
    );
};

export default CountDown;