import { Swiper, SwiperSlide } from "swiper/react";
import SingleCourse from "./../SingleCourse/SingleCourse";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';

const LastCourseSlider = () => {
  return (
    <Swiper
    modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={4}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
      <SwiperSlide>
        <SingleCourse slider={true} />
      </SwiperSlide>
    </Swiper>
  );
};

export default LastCourseSlider;
