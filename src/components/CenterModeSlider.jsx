import React, { useState, useRef } from "react";
import Slider from "react-slick";
import img1 from "../components/assets/images/slider-img-1.webp";
import img2 from "../components/assets/images/slider-img-2.webp";
import img3 from "../components/assets/images/slider-img-3.webp";
import img4 from "../components/assets/images/slider-img-4.webp";
import img5 from "../components/assets/images/slider-img-5.webp";

export default function CenterModeSlider() {
  const sliderRef = useRef(null);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section className=" sec-2 flex items-center min-h-screen pt-11">
      <div className="px-3 mx-auto max-w-6xl">
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          arrows={false}
        >
          <div>
            <div className="flex items-center gap-12">
              <div>
                <img
                  src={img1}
                  alt="img1"
                  className="min-w-[531px] h-[387px]"
                />
              </div>
              <div>
                <h2 className="ff-lato font-semibold text-5xl leading-[57px]">
                  Lorem ipsum
                </h2>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] py-4">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas.
                </p>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] pb-8">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed. Proin urna ornare dolor mauris
                  convallis varius nunc.
                </p>
                <button className="ff-inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-200 hover:bg-[#25089b] ">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-12">
              <div>
                <img
                  src={img2}
                  alt="img2"
                  className="min-w-[531px] h-[387px]"
                />
              </div>
              <div>
                <h2 className="ff-lato font-semibold text-5xl leading-[57px]">
                  Lorem ipsum
                </h2>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] py-4">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas.
                </p>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] pb-8">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed. Proin urna ornare dolor mauris
                  convallis varius nunc.
                </p>
                <button className="ff-inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-200 hover:bg-[#25089b] ">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-12">
              <div>
                <img
                  src={img3}
                  alt="img3"
                  className="min-w-[531px] h-[387px]"
                />
              </div>
              <div>
                <h2 className="ff-lato font-semibold text-5xl leading-[57px]">
                  Lorem ipsum
                </h2>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] py-4">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas.
                </p>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] pb-8">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed. Proin urna ornare dolor mauris
                  convallis varius nunc.
                </p>
                <button className="ff-inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-200 hover:bg-[#25089b] ">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-12">
              <div>
                <img
                  src={img4}
                  alt="img4"
                  className="min-w-[531px] h-[387px]"
                />
              </div>
              <div>
                <h2 className="ff-lato font-semibold text-5xl leading-[57px]">
                  Lorem ipsum
                </h2>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] py-4">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas.
                </p>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] pb-8">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed. Proin urna ornare dolor mauris
                  convallis varius nunc.
                </p>
                <button className="ff-inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-200 hover:bg-[#25089b] ">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-12">
              <div>
                <img
                  src={img5}
                  alt="img5"
                  className="min-w-[531px] h-[387px]"
                />
              </div>
              <div>
                <h2 className="ff-lato font-semibold text-5xl leading-[57px]">
                  Lorem ipsum
                </h2>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] py-4">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas.
                </p>
                <p className="ff-inter text-base leading-6 text-opacity-[70%] pb-8">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed. Proin urna ornare dolor mauris
                  convallis varius nunc.
                </p>
                <button className="ff-inter font-semibold text-base text-white py-4 px-14 rounded-xl bg-[#3C278D] transition-all duration-200 hover:bg-[#25089b] ">
                  Button
                </button>
              </div>
            </div>
          </div>
        </Slider>
        <div className="pt-11 max-w-5xl mx-auto relative">
          <Slider
            ref={sliderRef}
            asNavFor={nav1}
            slidesToShow={5}
            focusOnSelect={true}
            slidesToScroll={1}
            arrows={false}
          >
            <div>
              <img src={img1} alt="img1" className="max-w-[182px] mx-auto" />
            </div>
            <div>
              <img src={img2} alt="img2" className="max-w-[182px] mx-auto" />
            </div>
            <div>
              <img src={img3} alt="img3" className="max-w-[182px] mx-auto" />
            </div>
            <div>
              <img src={img4} alt="img4" className="max-w-[182px] mx-auto" />
            </div>
            <div>
              <img src={img5} alt="img5" className="max-w-[182px] mx-auto" />
            </div>
          </Slider>
          <div className="flex space-x-4 absolute justify-between w-full top-1/2">
            <button
              onClick={handlePrev}
              className="prev w-10 h-10 rounded-full border border-[#DA6015] flex items-center justify-center group/btn transition-all duration-200 hover:bg-[#DA6015] absolute -left-16"
            >
              <svg
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-200 group-hover/btn:fill-white"
                  d="M10.5794 18.1038C10.8487 17.85 11 17.5059 11 17.1471C11 16.7882 10.8487 16.4441 10.5794 16.1903L3.46782 9.49183L10.5794 2.79334C10.8411 2.53811 10.9859 2.19628 10.9826 1.84147C10.9793 1.48666 10.8282 1.14725 10.5619 0.89635C10.2955 0.645452 9.93515 0.503135 9.55846 0.500051C9.18177 0.496969 8.81886 0.633367 8.5479 0.879869L0.420638 8.5351C0.151303 8.78887 -4.09444e-07 9.133 -3.9376e-07 9.49183C-3.78075e-07 9.85066 0.151303 10.1948 0.420638 10.4486L8.5479 18.1038C8.81732 18.3575 9.18268 18.5 9.56363 18.5C9.94459 18.5 10.3099 18.3575 10.5794 18.1038Z"
                  fill="#DA6015"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="next w-10 h-10 rounded-full border border-[#DA6015] flex items-center justify-center group/btn transition-all duration-200 hover:bg-[#DA6015] absolute -right-14"
            >
              <svg
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="transition-all duration-200 group-hover/btn:fill-white"
                  d="M0.420638 18.1038C0.151303 17.85 -9.1022e-07 17.5059 -8.94535e-07 17.1471C-8.7885e-07 16.7882 0.151303 16.4441 0.420638 16.1903L7.53218 9.49183L0.420639 2.79334C0.158937 2.53811 0.0141284 2.19628 0.0174015 1.84147C0.0206754 1.48666 0.171768 1.14725 0.43814 0.89635C0.704511 0.645452 1.06485 0.503135 1.44154 0.500051C1.81823 0.496969 2.18114 0.633367 2.4521 0.879869L10.5794 8.5351C10.8487 8.78887 11 9.133 11 9.49183C11 9.85066 10.8487 10.1948 10.5794 10.4486L2.4521 18.1038C2.18268 18.3575 1.81732 18.5 1.43637 18.5C1.05541 18.5 0.690054 18.3575 0.420638 18.1038Z"
                  fill="#DA6015"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
