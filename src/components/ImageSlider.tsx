import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Media } from "@/payload-types";
interface ImageSliderProps {
  urls: Media[];
}
const ImageSlider = ({ urls }: ImageSliderProps) => {
  return (
    <div className="group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl">
      <div className="absolute z-10 inset-0 opacity-9 group-hover:opacity-100 transition">
        <button></button>
        <button></button>
      </div>
      <Swiper className="h-full w-full">
        <SwiperSlide className="-z-10 relative h-full w-full">
          {urls.map((image) => {
            if (typeof image.url !== "string") {
              return;
            }
            return (
              <Image
                src={image?.url}
                fill
                loading="eager"
                className="object-cover -z-10 object-center"
                alt="Product Image"
              />
            );
          })}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
