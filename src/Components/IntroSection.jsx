import React from "react";
// import ImgAnime from "./ImgAnime.js";

const IntroSection = () => {
  
  return (
    <div className="intro_container">
      <div className="intro_md">
        <div className="intro_sd">
          <div className="intro_left">
            <h1>beyond <br /> just <br /> software </h1>
            <p>
              From bold ideas to successful digital products via creating
              future-ready apps, websites and digital solutions.
            </p>
            <button className="cus_btn">let's talk business</button>
          </div>
          <div className="intro_right">
            {/* <img
             className='intro_logos'
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            /> */}
            {/* <ImgAnime /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
