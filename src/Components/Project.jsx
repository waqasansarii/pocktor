import React, { useEffect } from "react";
import { projects } from "../Pages/data";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="project_container" id="projects">
      <div className="project_md">
        <div className="project_sd">
          <p>Explore our</p>
          <h1>Projects</h1>
          <hr
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="cus_hr"
          />
          <p className="project_dc_p">
            We have developed applications in different industries and for
            different use cases. Please check some of the projects we have
            worked on.
          </p>
          <div className=" row projects_section">
            {projects.map((val, id) => (
              <div className="col-12 col-sm-6 projects-col" key={id}>
                <div
                  className="box-item project-box-item dark fade-in-bottom"
                  style={{ background: `${val.bg}`, color: `${val.color}` }}
                >
                  <a href={val.link} target="_blank">
                    <h3 className="box-item-small-title">{val.title}</h3>
                    <p className="box-item-subtitle">{val.subTitle}</p>
                    <div className="box-item-image-block">
                      <img
                        src={val.img}
                        alt="“Blocks”. MVP for Australian startup"
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
