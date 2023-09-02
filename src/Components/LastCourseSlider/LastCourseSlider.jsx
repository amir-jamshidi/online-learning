import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingleCourse from "./../SingleCourse/SingleCourse";
import { BiTimeFive } from "react-icons/bi";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";

const LastCourseSlider = () => {
  return (
    <Swiper spaceBetween={24} slidesPerView={4} loop={true}>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
      <SwiperSlide><SingleCourse slider={true} /></SwiperSlide>
    </Swiper>
  );
};

export default LastCourseSlider;
