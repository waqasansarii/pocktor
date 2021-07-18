import React from "react";
import { projects } from "../Pages/data";

const Project = () => {
  return (
    <div className="project_container">
      <div className="project_md">
        <div className="project_sd">
          <p>Explore our</p>
          <h1>Projects</h1>
          <div className=" row projects_section">
            {projects.map((val, id) => (
              <div className="col-12 col-sm-6 projects-col" key={id}>
                <div
                  className="box-item project-box-item dark fade-in-bottom"
                  style={{ background: `${val.bg}`, color: `${val.color}` }}
                >
                  <a href="/projects/blocks">
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
