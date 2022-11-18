import React from 'react';
import { iventItem, useCustomContext } from '../context/Context';
import style from './Slide.module.scss';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import { Navigation, Pagination } from 'swiper';

const Slide: React.FC = () => {
  const { data, year } = useCustomContext();

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={80}
        slidesPerView={3}
        className={style.mySwiper}
      >
        {data[year - 1].events.map((e: iventItem) => (
          <SwiperSlide className={style.swiperslide} key={e.year}>
            <p className={style.year}>{e.year}</p>
            <p className={style.content}>{e.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
