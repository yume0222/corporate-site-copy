"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { Works } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  images: Works[];
};

export default function Slider({ images }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      autoplay={{ delay: 4000 }}
      speed={500}
      loop
      effect="fade"
      pagination={{ clickable: true }}
      navigation
      className={`${styles.swiper} ${styles.wrapper}`}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={image.thumbnail.url}
              alt=""
              width={image.thumbnail.width}
              height={image.thumbnail.height}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
