import React, { useState } from 'react';
import women from "../../assets/images/webp/women-img.png";

const TabsAccordion = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Néophyte", "Rentable", "Expérimenté", "Malin", "Indépendant"];

    return (
        <div className='bg-black py-16'>
            <div className="container my-2.5">
                <div className="w-fit mx-auto bg-linear-green p-px rounded-full">
                    <p className='text-white py-3 px-4 font-medium rounded-full font-inter text-sm bg-deep-gray'>Nos formations</p>
                </div>
                <div className="overflow-x-scroll md:overflow-x-visible w-full mt-5">
                    <div className="max-w-[779px] relative z-10 w-full mx-auto flex justify-center items-center gap-4 py-1">
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                className={`px-6 py-[18px] font-bold text-lg relative after:[''] after:rounded-lg rounded-lg after:absolute after:h-[103%] after:w-[102%] after:-left-px after:-top-px after:-z-10 ${activeTab === idx ? "after:bg-linear-green bg-deep-gray" : "after:bg-transparent"}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                <span className={activeTab === idx ? "text-transparent bg-linear-green bg-clip-text font-inter" : "text-white font-inter"}> {tab}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex gap-4">
                    <div className="max-w-[500px]">
                        <img src={women} alt="women" className='w-full' />
                    </div>
                    <div className="max-w-[764px] w-full p-8">
                        <h2 className='font-bold text-3xl text-white'>Investisseur néophyte</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsAccordion;