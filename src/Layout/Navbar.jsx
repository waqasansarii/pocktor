import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);
  let [mobMenu, setMobMenu] = useState(false);
  const toggleMenu = () => {
    setMobMenu(!mobMenu);
  };
  if (width > 992) {
    mobMenu = false;
  }
  return (
    <div className="nav-container " id="header">
      <div className="container-xl">
        <div className="col-12 col-xl-12 offset-xl-0 col-lg-10 offset-lg-1">
          <nav>
            <a className="logo" href="/">
              <img src="/assets/icons/logo.svg" alt="logo" />
            </a>
            <div className="nav-navigation">
              <ul className="menu-toggle">
                <li className="non-hidden">
                  <button className="btn menu" onClick={toggleMenu}>
                    <div
                      className={
                        mobMenu ? " burger-menu open" : "burger-menu close"
                      }
                      id="burger-menu"
                    >
                      <div className="bar" />
                      <div className="bar" />
                      <div className="bar" />
                    </div>
                  </button>
                </li>
              </ul>
              <ul
                className={mobMenu ? "mobMenu" : "menu-wrapper"}
                id="mobile-menu"
              >
                <li className="non-hidden logo">
                  <div className="logo">
                    <a className="logo" href="/">
                      <img src="/assets/icons/logo.svg" alt="logo" />
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#projects" title="Projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#services" title="Services">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#partner" title="Team">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#about" title="Careers">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" title="Blog">
                    Contact
                  </a>
                </li>
                {/* <li>
                  <button
                    className="non-mobile btn magnet backlight-button non-border cta"
                    id="headerCta"
                    onclick="scrollPageTo('footer', 0);"
                  >
                    go digital
                  </button>
                  <button
                    className="only-mobile btn magnet backlight-button non-border cta"
                    id="headerCta"
                    onclick="scrollPageTo('footer', 0); toggleMenu()"
                  >
                    go digital
                  </button>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
