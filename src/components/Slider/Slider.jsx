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
import slider2 from '../../assets/chatapp.png'
import slider3 from '../../assets/gamershop.png'
import slider4 from '../../assets/coinview.png'
import slider5 from '../../assets/tiagopzk.png'
import slider1mobile from '../../assets/bzmobile.png'
import slider2mobile from '../../assets/chatappmobile.png'
import slider3mobile from '../../assets/gamershopmobile.png'
import slider4mobile from '../../assets/coinviewmobile.png'
import slider5mobile from '../../assets/tiagopzkmobile.png'

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
            <picture>
              <source media="(min-width: 768px)" srcSet={slider1} />
              <img src={slider1mobile} alt="image of my project basketzone" />
            </picture>
            <span>01</span>
            <Link to='project/1'>Ver info</Link>
        </SwiperSlide>

        <SwiperSlide>
            <picture>
              <source media="(min-width: 768px)" srcSet={slider2} />
              <img src={slider2mobile} alt="image of my project chat app" />
            </picture>
            <span>02</span>
            <Link to='project/5'>Ver info</Link>
        </SwiperSlide>

        <SwiperSlide>
            <picture>
              <source media="(min-width: 768px)" srcSet={slider3} />
              <img src={slider3mobile} alt="image of my project gamershop" />
            </picture>
            <span>03</span>
            <Link to='project/2'>Ver info</Link>
        </SwiperSlide>

        <SwiperSlide>
            <picture>
              <source media="(min-width: 768px)" srcSet={slider4} />
              <img src={slider4mobile} alt="image of my project coinview" />
            </picture>
            <span>04</span>
            <Link to='project/3'>Ver info</Link>
        </SwiperSlide>

        <SwiperSlide>
            <picture>
              <source media="(min-width: 768px)" srcSet={slider5} />
              <img src={slider5mobile} alt="image of my project tiagopzk" />
            </picture>
            <span>05</span>
            <Link to='project/4'>Ver info</Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider