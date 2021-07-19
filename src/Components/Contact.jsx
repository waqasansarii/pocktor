import React from "react";
import fb from "../Assets/facebook.svg";
import linkdin from "../Assets/linkedin.svg";
import insta from "../Assets/instagram.svg";

const Contact = () => {
  return (
    <div className="contact_container" id="contact">
      <div className="contact_md">
        <div className="contact_sd">
          <div className="contact_info">
            <div className="c_num">
              <p className="grn_clr">Contact us</p>
              <div>
                <span>Email Address:</span>
                <a href="mailto:"> info@pocktor.se</a>
              </div>
              <div>
                <span>Telephone Number:</span>
                <a href="tel:+">0706622233</a>
              </div>
              <div>
                <span>Organizationn Number:</span>
                <a href="tel:+"> 559237-4333</a>
              </div>
            </div>
            <div className="visit">
              <p className="grn_clr">Visit us</p>
              <h2>Address:</h2>
              <h6>Råsundavägen 160</h6>
              <h6>F-skatt</h6>
            </div>
            <div className="follow">
              <p className="grn_clr">Follow us</p>
              <ul>
                <li>
                  <a
                    className="social-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img src={fb} alt="..." />
                  </a>
                </li>
                <li>
                  <a
                    className="social-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkdin} alt="..." />
                  </a>
                </li>
                <li>
                  <a
                    className="social-link"
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
