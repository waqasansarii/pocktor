import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
// assets
import dotnet from "../Assets/dotnet.png";
import python from "../Assets/python.png";
import rails from "../Assets/rails.png";
import reactLogo from "../Assets/reactlogo.png";
import node from "../Assets/node.png";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function ImgAnime() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img className="anim_img" src={reactLogo} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img className="anim_img2" src={node} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img className="anim_img2" src={rails} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img className="anim_img" src={python} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img className="anim_img2" src={dotnet} alt="..." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
