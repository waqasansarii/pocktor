import React from "react";
import up from "../Assets/up.png";
import down from "../Assets/down.png";

const About = () => {
  return (
    <div className="about_container" id='about'>
      <div className="about_md">
        <div className="about_sd">
          <h1>About Us</h1>
          <div className="lt_scrol_md">
            <div className="lt_up">
              <img src={up} alt="..." />
            </div>
            <div className="lt_bg">
              <div>
                <p>
                  Hi, welcome to Pocktor. Thank you so much for checking in.
                </p>
                <p>
                  I am John Chimbani, the founder of Pocktor. I have spent most
                  of my professional career as an information engineer. But I
                  always wanted to develop software, so I founded Pocktor in
                  2018.
                </p>
                <p>
                  I have worked at some of Sweden's largest engineering
                  companies and learnt a couple of things from them. Most
                  important being that they are very expensive. Not because they
                  want to, but because they have to! A large team of developers
                  is expensive and so are flashy offices in the middle of town.
                </p>
                <p>
                  Our mission at Pocktor is to save our customers money by
                  developing world class cost effective applications.
                </p>
                <p>
                  We do this by trimming the fat. You may have heard of LEAN
                  organisations? Well, the truth is many organisations talk the
                  talk but don't walk it. At Pocktor, we walk it in the
                  following ways:
                </p>
                <ul className="about_ul">
                  <li>• No flashy offices</li>
                  <li>• No employees</li>
                  <li>• Clearly understanding your business objective</li>
                  <li>• A vast network of experienced and skilled partners</li>
                </ul>
                <p style={{ marginTop: "10px" }}>
                  So unlike the large companies, we offer very competitive
                  rates. Without compromising on the quality.
                </p>
                <p>
                  Let us save you money by developing your application for you!
                </p>
                <p>
                  We will deliver your project on time and on budget, but you
                  probably know that already. Thanks again for passing by
                  Pocktor.
                </p>
              </div>
            </div>
            <div className="lt_down">
              <img src={down} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
