import React, { useEffect } from "react";
import { serviceData } from "../Pages/data";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="sc_container" id="services">
      <div className="sc_md">
        <div className="sc_sd">
          <div className="sc_sbtitle">Offered</div>
          <h1>Services</h1>
          <hr
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="cus_hr"
          />
          <p>
            We are fully focused to solve your business challenges. No matter
            the technology or architecture, we will find the most optimal
            solution and deliver a ready-to-operate product.
          </p>
          <div className="row service_row">
            {serviceData.map((val, id) => (
              <div
                className="col-12 col-md-6 service-col fade-in-bottom"
                key={id}
              >
                <div className="box-item service-box-item with-icon">
                  <div className="box-item-icon">
                    <img src={val.icon} alt="Solution Design" />
                  </div>
                  <h3 className="box-item-title">{val.title}</h3>
                  <div className="box-item-text">
                    <p>{val.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
