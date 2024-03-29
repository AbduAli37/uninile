import Head from "next/head";
import Counter from "./Counter";

const homeData = {
  firstName: "UniNile",
  lastName: "",
  designation: "لتنفيذ المشاريع الصناعية",
  address: "",
  img: "img/hero/minban1.jpg",
  bio: "",
  numberOfProject: 800,
  numberofyear: 12,
};

const Home = () => {
  return (
    <>
      <Head>
        معدات | خطوط إنتاج خطوط انتاج | خطوط إنتاج حديد وصلب | خط إنتاج ارز | خط إنتاج دقيق | خط إنتاج سكر | خط إنتاج السكر | خط إنتاج تعبئة التمور | خط إنتاج تمور | خط إنتاج التمر
      </Head>
      <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/banner.jpg" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">مرحبا بكم فى</h3>
                <h3 className="name">
                  {homeData.firstName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {homeData.designation}  {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                {/* <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Get a Quote
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div> */}
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              <div className="image">
                <img src="img/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={homeData.img} />
                <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                  <img src="img/hero/1.jpg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Home;
