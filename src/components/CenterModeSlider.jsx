import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../components/assets/images/slider-img-1.webp";
import img2 from "../components/assets/images/slider-img-2.webp";
import img3 from "../components/assets/images/slider-img-3.webp";
import img4 from "../components/assets/images/slider-img-4.webp";
import img5 from "../components/assets/images/slider-img-5.webp";

export default function CenterModeSlider() {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
      infinite: true,
    arrow :false,
  };
  var mySlider = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
      infinite: true,
    arrow:true,
  };
  return (
    <section className="flex items-center min-h-screen pt-11">
      <div className="px-3 mx-auto max-w-6xl">
        <Slider {...settings}>
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
        <div className="pt-11">
                  <Slider {...mySlider}>
                      <div>
                          <img src={img1} alt="img1" className="max-w-[182px]"/>
                      </div>
                      <div>
                          <img src={img2} alt="img2" className="max-w-[182px]"/>
                      </div>
                      <div>
                          <img src={img3} alt="img3" className="max-w-[182px]"/>
                      </div>
                      <div>
                          <img src={img4} alt="img4" className="max-w-[182px]"/>
                      </div>
                      <div>
                          <img src={img5} alt="img5" className="max-w-[182px]"/>
                      </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
