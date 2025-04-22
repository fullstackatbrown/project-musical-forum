"use client";

import { images } from "@/app/page";
import Image from "next/image";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-gray-200 w-full h-[400px]">
      <div className="relative w-full h-full">
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="h-[400px] w-full relative">
              <Image
                src={src}
                alt={`Slide ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </Slider>
        <style jsx global>{`
          .slick-dots {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
          }

          .slick-dots li button:before {
            font-size: 10px;
            color: white;
            opacity: 1 !important;
          }

          .slick-dots li.slick-active button:before {
            font-size: 16px;
            color: white;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Carousel;
