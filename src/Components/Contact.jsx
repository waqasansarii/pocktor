import React from "react";
import fb from "../Assets/facebook.svg";
import linkdin from "../Assets/linkedin.svg";
import insta from "../Assets/instagram.svg";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_md">
        <div className="contact_sd">
          <div className="contact_info">
            <div className="c_num">
              <p className='grn_clr'>Contact us</p>
              <a href="mailto:">abc@gmail.com</a>
              <a href="tel:+">9923239349</a>
            </div>
            <div className="visit">
              <p className='grn_clr'>Visit us</p>
              <h2>Estonia</h2>
              <h6>Tallinn, Tuukri 19</h6>
              <h2>Estonia</h2>
              <h6>Tallinn, Tuukri 19</h6>
            </div>
            <div className="follow">
              <p className='grn_clr'>Follow us</p>
              <ul>
                <li>
                  <a className='social-link' href="http://" target="_blank" rel="noopener noreferrer">
                    {" "}
                    <img src={fb} alt="..." />
                  </a>
                </li>
                <li>
                  <a className='social-link' href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={linkdin} alt="..." />
                  </a>
                </li>
                <li>
                  <a className='social-link' href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="..." />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
