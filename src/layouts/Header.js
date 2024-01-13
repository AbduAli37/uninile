import { useEffect } from "react";
import { scrollSection, stickyNav } from "../utilits";
import Head from "next/head";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <>
    <Head>
        معدات | خطوط إنتاج خطوط انتاج | خطوط إنتاج حديد وصلب | خط إنتاج ارز | خط إنتاج دقيق | خط إنتاج سكر | خط إنتاج السكر | خط إنتاج تعبئة التمور | خط إنتاج تمور | خط إنتاج التمر
      </Head>
      <div className="devman_tm_header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="#">
              <img src="img/hero/logo.png" alt="" />
            </a>
            <a className="dark" href="#">
              <img style={{height:'50px',width:'100px'}} src="img/hero/logo.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">الرئيسيه</a>
              </li>
              <li>
                <a href="#about">عن الشركه</a>
              </li>
              <li>
                <a href="#portfolio">الشخصيه</a>
              </li>
              <li>
                <a href="#service">الخدمات</a>
              </li>
              <li>
                <a href="#contact">تواصل معنا</a>
              </li>
              <li>
                <a href="#blog">بعض منتجاتنا</a>
              </li>
              {/* <li className="download_cv">
                <a style={{color:'white'}} href="img/cv/1.jpg" download>
                  contact us
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Header;
