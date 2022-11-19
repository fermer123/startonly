import React, { useRef } from 'react';
import { iventItem, useCustomContext } from '../context/Context';
import style from './Slide.module.scss';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import { Navigation, Pagination } from 'swiper';

const Slide: React.FC = () => {
  const { data, year } = useCustomContext();
  const matchMedia = window.matchMedia('(max-width: 500px)').matches;
  const swiperRef = useRef(null);
  return (
    <div className={style.swiper_container}>
      {!matchMedia ? (
        <button
          className={style.prev_btn}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          &lt;
        </button>
      ) : null}

      <Swiper
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={80}
        slidesPerView={3}
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true,
          enabled: matchMedia,
          renderBullet: (index, className) => {
            return '<span class="' + className + '">' + '</span>';
          },
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className={style.mySwiper}
      >
        {data[year - 1].events.map((e: iventItem) => (
          <SwiperSlide className={style.swiperslide} key={e.year}>
            <p className={style.slide_year}>{e.year}</p>
            <p className={style.slide_content}>{e.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      {matchMedia && <div className={style['my-custom-pagination-div']} />}
      {!matchMedia ? (
        <button
          className={style.next_btn}
          onClick={() => swiperRef.current?.slideNext()}
        >
          &gt;
        </button>
      ) : null}
    </div>
  );
};

export default Slide;
