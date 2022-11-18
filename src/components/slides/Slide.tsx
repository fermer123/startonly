import React from 'react';
import { iventItem, useCustomContext } from '../context/Context';
import style from './Slide.module.scss';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const Slide: React.FC = () => {
  const { data, year } = useCustomContext();

  return (
    <Swiper
      className={style.mySwiper}
      modules={[Navigation]}
      navigation
      spaceBetween={80}
      slidesPerView={3}
    >
      {data[year - 1].events.map((e: iventItem) => (
        <SwiperSlide className={style.swiperslide} key={e.year}>
          <p className={style.year}>{e.year}</p>
          <p className={style.content}>{e.content}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
