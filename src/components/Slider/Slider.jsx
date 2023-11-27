import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.scss'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Images for slider
import slider1 from '../../assets/bz.png'
import slider2 from '../../assets/gamershop.png'
import slider3 from '../../assets/coinview.png'
import slider4 from '../../assets/tiagopzk.png'
import slider5 from '../../assets/sneakers.png'

function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <span>01</span>
            <Link to='project/1'>Ver info</Link>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slider2} alt="" />
            <span>02</span>
            <Link to='project/2'>Ver info</Link>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slider3} alt="" />
            <span>03</span>
            <Link to='project/3'>Ver info</Link>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slider4} alt="" />
            <span>04</span>
            <Link to='project/4'>Ver info</Link>
        </SwiperSlide>

        <SwiperSlide>
            <img src={slider5} alt="" />
            <span>05</span>
            <Link to='project/5'>Ver info</Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider