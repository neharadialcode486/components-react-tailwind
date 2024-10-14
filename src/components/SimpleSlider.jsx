import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../components/assets/images/elegant-djellaba.webp";
import img2 from "../components/assets/images/luxurios-caftan.webp";
import img3 from "../components/assets/images/classic-gandora.webp";

export default function SimpleSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="flex items-center min-h-screen">
      <div className="px-3 mx-auto max-w-6xl relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-5xl leading-[56px] ff-playfair">
            New <span className="font-bold">Arrivals</span>
          </h2>

          <div className="flex space-x-4">
            {/* Arrows next to heading */}
            <button
              onClick={handlePrev}
              className="prev w-10 h-10 rounded-full border border-[#DA6015] flex items-center justify-center group/btn transition-all duration-200 hover:bg-[#DA6015]"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="next w-10 h-10 rounded-full border border-[#DA6015] flex items-center justify-center group/btn transition-all duration-200 hover:bg-[#DA6015]"
            >
              Next
            </button>
          </div>
        </div>

        <p className="text-base leading-6 text-center max-w-[640px] mx-auto ff-lato pt-4 pb-10">
          Discover the latest additions to our collection, showcasing the finest
          in traditional Moroccan craftsmanship and contemporary design.
        </p>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {/* Slide Items */}
            <div>
              <div className="max-w-[364px]">
                <img src={img1} alt="Elegant Djellaba" className="w-full" />
                <div className="flex items-center justify-between pt-2">
                  <p className="font-medium ff-lato text-xl leading-7">
                    Elegant Djellaba
                  </p>
                  <p className="ff-lato font-semibold text-base leading-6 text-[#B02724]">
                    $200
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-[364px]">
                <img src={img1} alt="Elegant Djellaba" className="w-full" />
                <div className="flex items-center justify-between pt-2">
                  <p className="font-medium ff-lato text-xl leading-7">
                    Elegant Djellaba
                  </p>
                  <p className="ff-lato font-semibold text-base leading-6 text-[#B02724]">
                    $200
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-[364px]">
                <img src={img1} alt="Elegant Djellaba" className="w-full" />
                <div className="flex items-center justify-between pt-2">
                  <p className="font-medium ff-lato text-xl leading-7">
                    Elegant Djellaba
                  </p>
                  <p className="ff-lato font-semibold text-base leading-6 text-[#B02724]">
                    $200
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-[364px]">
                <img src={img1} alt="Elegant Djellaba" className="w-full" />
                <div className="flex items-center justify-between pt-2">
                  <p className="font-medium ff-lato text-xl leading-7">
                    Elegant Djellaba
                  </p>
                  <p className="ff-lato font-semibold text-base leading-6 text-[#B02724]">
                    $200
                  </p>
                </div>
              </div>
            </div>
            {/* Add more slides here */}
          </Slider>
        </div>
      </div>
    </section>
  );
}
