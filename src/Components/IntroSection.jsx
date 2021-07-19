import React from "react";
import ImgAnime from "./ImgAnime";

const IntroSection = () => {
  return (
    <div className="intro_container">
      <div className="intro_md">
        <div className="intro_sd">
          <div className="intro_left">
            <h1>
              more than <br /> just <br /> a developer{" "}
            </h1>
            <p>
              No project is too small or too big. We don't just develop, we make
              sure our solutions add value to your business.
            </p>
            <div className="animate_btn_div">
              <a href="#contact">
                <button className="cus_btn">Get in touch</button>
              </a>
            </div>
          </div>
          <div className="intro_right">
            <ImgAnime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
