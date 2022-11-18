import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { iventItem, useCustomContext } from '../context/Context';
import style from './Slide.module.scss';

const Slide: React.FC = () => {
  const { data, year } = useCustomContext();
  return (
    
    // <Swiper spaceBetween={50} slidesPerView={3}>
    //   {data[year].events.map((e: iventItem) => (
    //     <SwiperSlide className={style.years_container} key={Math.random()}>
    //       <p className={style.year}>{e.year}</p>
    //       <p className={style.content}>{e.content}</p>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
};

export default Slide;
