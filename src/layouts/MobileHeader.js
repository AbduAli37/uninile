import { useState } from "react";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="devman_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="img/hero/logo.png" alt="" />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li>
              <a href="#home">الرئيسيه</a>
            </li>
            <li>
              <a href="#about">عن الشركه</a>
            </li>
            <li>
              <a href="#portfolio">الشخصيه</a>
            </li>
            <li>
              <a href="#service">خدماتنا</a>
            </li>
            <li>
              <a href="#contact">تواصل معنا</a>
            </li>
            <li>
              <a href="#blog">بعض منتجاتنا</a>
            </li>
            {/* <li className="download_cv">
              <a href="img/cv/1.jpg" download>
                Download CV
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;