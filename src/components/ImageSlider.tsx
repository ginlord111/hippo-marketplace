"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Media } from "@/payload-types";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { url } from "inspector";
interface ImageSliderProps {
  urls: Media[];
}
const ImageSlider = ({ urls }: ImageSliderProps) => {
  const [slide, setSlide] = useState<SwiperType | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState();
  const [sliderConfig, setSliderConfig] = useState({
    isBegin: true,
    isEnd: index === (urls.length ?? 0) - 1,
  });
  useEffect(() => {
    slide?.on("slideChange", ({ activeIndex }) => setIndex(activeIndex));
    setSliderConfig({
      isBegin: index === 0,
      isEnd: index === urls.length - 1,
    });
  }, [slide, urls, index]);
  const activeStyle =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";
  const hiddenIcon = "hidden text-gray-400";
  return (
    <div className="group relative bg-zinc-100 aspect-video overflow-hidden rounded-xl">
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={(e) => {
            e.preventDefault;
            slide?.slideNext();
          }}
          className={cn(
            activeStyle,
            "right-3 transition",
            sliderConfig.isEnd && hiddenIcon
          )}
        >
          <ChevronRight />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault;
            slide?.slidePrev();
          }}
          className={cn(
            activeStyle,
            "transition",
            sliderConfig.isBegin && hiddenIcon
          )}
        >
          <ChevronLeft />
        </button>
      </div>
      <Swiper
        onSwiper={(swiper) => setSlide(swiper)}
        modules={[Pagination]}
        className="h-full w-full"
        slidesPerView={1}
        spaceBetween={50}
      >
        {urls.map((image) => {
          if (typeof image.url !== "string") {
            return;
          }
          return (
            <SwiperSlide className="-z-10 relative h-full w-full">
              <Image
                key={image.id}
                src={image?.url}
                fill
                loading="lazy"
                className="object-cover -z-10 object-center"
                alt="Product Image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
