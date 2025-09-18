'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


export default function Carousel() {
  return (
    <div className="w-full flex justify-center items-center px-4 md:px-10 py-6">
      <div className="w-full rounded-[16px] overflow-hidden shadow-lg  ">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/carousel one/carousel1.jpg"
              className="w-full  object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/carousel one/carousel2.jpg"
              className="w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}