import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import react from "../Assets/1.React.svg";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function ImgAnime() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        //   centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img
          className='anim_img'
            src="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          className='anim_img2'
            src="https://www.pngkit.com/png/full/66-667065_js-club-new-balance-png-logo-node-js.png"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
      {/* <img src={react} alt="" /> */}
    </div>
  );
}
