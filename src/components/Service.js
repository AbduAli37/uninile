import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "مشروعات المشروبات والعصائر والسوائل.",
    icon: "img/service/serv1.png",
    img: "img/service/1.jpg",
    description: [
      ".خطوط انتاج المياه المعدنيه",
      "خطوط انتاج المياه الغازيه",
      "خطوط انتاج العصائر, تتراباك.",
      "كافه خطوط تعبئه السوائل, زيت,سمن,خل,مربات",
      "خطوط انتاج العبوات البالستيكيه ,حقن , نفخ, سحب."
    ],
  },
  {
    name: "خطوط انتاج الأغذيه.",
    icon: "img/service/serv1.png",
    img: "img/service/2.jpg",
    description: [
      "خط أنتاج األرز.",
      "خط أنتاج المكرونه.",
      "خط أنتاج االسناكس.",
      "خط أنتاج البطاطس الشيبسى.",
      "خط أنتاجالبطاطس نصف مقليه",
      "خط أنتاج األندومى.",
      "خط أنتاجدراىفوود الخاص بالكالب والقطط.",
      ".كافه خطوط أنتاج البسكويت",
    ],
  },
  {
    name: "الخطوط الصناعيه",
    icon: "img/service/serv1.png",
    img: "img/service/3.jpg",
    description: [
      "خط انتاج أعاده التدوير, بالستيك, ورق وكرتون, اطارات",
      "خط أنتاج الحديد",
    ],
  },
  // {
  //   name: "Game Development",
  //   icon: "img/svg/star.svg",
  //   img: "img/service/4.jpg",
  //   description: [
  //     "Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //     "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  // },
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img style={{ width:'30px' }} src={service.icon} alt="" />
                      {/* <img className="svg" src={service.icon} alt="" /> */}
                      <h3 className="title">{service.name}</h3>
                      {/* <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p> */}
                      {
                        service.description.map((item,index)=>{
                          return(
                            <p style={{ color:'white' }} key={index}>{item}</p>
                          )
                        })
                      }
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
