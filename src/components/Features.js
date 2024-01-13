const features_list = [
  {
    title: "الإخلاص",
    icon: "img/hero/dedication.png",
    text: "عميلنا هو الأهم بالنسبة لنا",
  },
  {
    title: "الأمانه",
    icon: "img/hero/honesty.png",
    text: "الأمانه هى مبدأنا الدائم",
  },
  {
    title: "الإنجاز",
    icon: "img/hero/fulfillment.png",
    text: "ننجز عملنا بسرعة كبيرة",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img style={{width:'50px'}} src={feature.icon} alt="" />
                        {/* <img className="svg" src={feature.icon} alt="" /> */}
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
