import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// assets
import fb from "../Assets/fb.png";
import twtr from "../Assets/Twitter-1.png";
import partner from "../Assets/partner.jpeg";
// import "swiper/swiper.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Partner = () => {
  return (
    <div className="partner_container" id="partner">
      <div className="partner_md">
        <div className="partner_sd">
          <div className="p_head">
            <h1>Partners</h1>
            <p>
              Our business model at Pocktor means we don’t have employees. This
              means we can offer our customers the most competitive prices.
            </p>
          </div>
          <img className="p_main" src={partner} alt="..." />
          <div className="partnr_cards">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              //   centeredSlides={true}
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
              <SwiperSlide className="">
                <div className="partner_card">
                  <img
                    className="member_img"
                    src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                    alt="..."
                  />
                  <div className="card_body">
                    <p>CEO</p>
                    <h5>Member One</h5>
                    <p className="bio">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Alias at placeat quasi necessitatibus provident
                      consequatur, explicabo nisi tempore deserunt! Nisi itaque
                      quaerat ducimus deserunt et quis reiciendis ipsam commodi
                      laboriosam.
                    </p>
                    <ul className="icon_ul">
                      <li>
                        <img src={fb} alt="..." />
                      </li>
                      <li>
                        <img className="logo_wt" src={twtr} alt="..." />
                      </li>
                      <li>
                        <img className="logo_wt" src={twtr} alt="..." />
                      </li>
                      <li>
                        <img src={fb} alt="..." />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner_card">
                  <img
                    className="member_img"
                    src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                    alt="..."
                  />
                  <div className="card_body">
                    <p>CEO</p>
                    <h5>Member One</h5>
                    <p className="bio">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Alias at placeat quasi necessitatibus provident
                      consequatur, explicabo nisi tempore deserunt! Nisi itaque
                      quaerat ducimus deserunt et quis reiciendis ipsam commodi
                      laboriosam.
                    </p>
                    <ul className="icon_ul">
                      <li>
                        <img src={fb} alt="..." />
                      </li>
                      <li>
                        <img className="logo_wt" src={twtr} alt="..." />
                      </li>
                      <li>
                        <img className="logo_wt" src={twtr} alt="..." />
                      </li>
                      <li>
                        <img src={fb} alt="..." />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner_card">
                  <img
                    className="member_img"
                    src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                    alt="..."
                  />
                  <div className="card_body">
                    <p>CEO</p>
                    <h5>Member One</h5>
                    <p className="bio">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Alias at placeat quasi necessitatibus provident
                      consequatur, explicabo nisi tempore deserunt! Nisi itaque
                      quaerat ducimus deserunt et quis reiciendis ipsam commodi
                      laboriosam.
                    </p>
                    <ul className="icon_ul">
                      <li>
                        <img src={fb} alt="..." />
                      </li>
                      <li>
                        <img className="logo_wt" src={twtr} alt="..." />
                      </li>
                      <li>
                        <img className="logo_wt" src={twtr} alt="..." />
                      </li>
                      <li>
                        <img src={fb} alt="..." />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner_card">
                  <img
                    className="member_img"
                    src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
                    alt="..."
                  />
                  <div className="card_body">
                    <p>CEO</p>
                    <h5>Member One</h5>
                    <p className="bio">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Alias at placeat quasi necessitatibus provident
                      consequatur, explicabo nisi tempore deserunt! Nisi itaque
                      quaerat ducimus deserunt et quis reiciendis ipsam commodi
                      laboriosam.
                    </p>
                    <ul className="icon_ul">
                      <li>
                        <img src={fb} alt="..." />
                      </li>
                      <li>
                        <img className="logo_wt" src={twtr} alt="..." />
                      </li>
                      <li>
                        <img className="logo_wt" src={twtr} alt="..." />
                      </li>
                      <li>
                        <img src={fb} alt="..." />
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
