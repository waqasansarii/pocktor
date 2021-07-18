import React from "react";
import ImgAnime from "./ImgAnime";


const IntroSection = () => {

  return (
    <div className="intro_container">
      <div className="intro_md">
        <div className="intro_sd">
          <div className="intro_left">
            <h1>
              beyond <br /> just <br /> software{" "}
            </h1>
            <p>
              From bold ideas to successful digital products via creating
              future-ready apps, websites and digital solutions.
            </p>
            <div className="animate_btn_div">
              <a href="#contact">
              <button className="cus_btn"  >let's talk business</button>
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
