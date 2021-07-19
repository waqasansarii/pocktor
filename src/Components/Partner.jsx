import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
// data
import { partner } from "../Pages/data";
// assets
import fb from "../Assets/fb.png";
import twtr from "../Assets/Twitter-1.png";
import web from "../Assets/web.png";
import git from "../Assets/git.png";
import partnerImg from "../Assets/Partners.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "swiper/swiper.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Partner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="partner_container" id="partner">
      <div className="partner_md">
        <div className="partner_sd">
          <div className="p_head">
            <h1>Partners</h1>
            <hr
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="cus_hr"
            />
            <p>
              Our business model at Pocktor means we don’t have employees. This
              means we can offer our customers the most competitive prices.
            </p>
          </div>
          <img className="p_main" src={partnerImg} alt="..." />
          <div className="partnr_cards">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
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
              className="mySwiper"
            >
              {partner.map((val, id) => (
                <SwiperSlide className="" key={id}>
                  <div className="partner_card">
                    <img className="member_img" src={val.img} alt="..." />
                    <div className="card_body">
                      <p>{val.work}</p>
                      <h5>{val.name}</h5>
                      <p className="bio">{val.about}</p>
                      <ul className="icon_ul">
                        <li>
                          <a
                            href={val.fb}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={fb} alt="..." />
                          </a>
                        </li>
                        <li>
                          <a href={val.twiter} target="_blank">
                            <img className="logo_wt" src={twtr} alt="..." />
                          </a>
                        </li>
                        <li>
                          <a href={val.git} target="_blank">
                            <img className="logo_wt" src={git} alt="..." />
                          </a>
                        </li>
                        <li>
                          <a href={val.web} target="_blank">
                            <img
                              style={{ width: "40px", objectFit: "contain" }}
                              src={web}
                              alt="..."
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
