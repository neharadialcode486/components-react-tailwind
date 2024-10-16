import React from 'react';
import HeroFourthImg from '../assets/images/png/leaves.png'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container flex flex-col justify-around items-center max-w-6xl mx-auto">
        <h1 className="text-black font-bold text-5xl leading-[150%]">
          Lorem ipsum Lorem ipsum
        </h1>
        <div className="max-w-[777px] mx-auto">
          <p className="text-gray-700 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.
          </p>
        </div>
        <button
          className="bg-white border border-indigo-700 text-indigo-700 font-semibold rounded-lg py-2 px-14 transition-all duration-300 hover:bg-indigo-700 hover:text-white mb-16"
        >
          Button
        </button>
        <img className="max-w-full" src={HeroFourthImg} alt="Decorative leaves" />
      </div>
    </section>
  );
};

export default HeroSection;
