import React from "react";
import Slider from "react-slick";
import CatImageIcon from "../../component/CatImageIcon";
import Profile1 from "../../assets/profileimage/Ellipse 92.svg";
import Profile2 from "../../assets/profileimage/Ellipse 92.svg";
import Profile3 from "../../assets/profileimage/Ellipse 92.svg";
import Profile4 from "../../assets/profileimage/Ellipse 92.svg";
import Profile5 from "../../assets/profileimage/Ellipse 92.svg";
import Profile6 from "../../assets/profileimage/Ellipse 92.svg"; // Add more profile images as needed
import NextArrowImg from "../../assets/icon/rightArrow.svg"; // Import your custom arrow images
import PrevArrowImg from "../../assets/icon/chevron_left.svg";

const Category = () => {
  const profiles = [
    { value: Profile1, badgevalue: "200+", title: "Dematologist" },
    { value: Profile2, badgevalue: "150+", title: "Dematologist" },
    { value: Profile3, badgevalue: "300+", title: "Dematologist" },
    { value: Profile4, badgevalue: "100+", title: "Dematologist" },
    { value: Profile5, badgevalue: "250+", title: "Dematologist" },
    { value: Profile6, badgevalue: "350+", title: "Dematologist" },
    // Add more profile objects as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {profiles.map((profile, index) => (
        <CatImageIcon
          key={index}
          value={profile.value}
          badgevalue={profile.badgevalue}
          title={profile.title}
        />
      ))}
    </Slider>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${NextArrowImg})`,
        backgroundSize: "cover",
        width: "30px",
        height: "30px",
        right: "-35px", // adjust the position as needed
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url(${PrevArrowImg})`,
        backgroundSize: "cover",
        width: "30px",
        height: "30px",
        left: "-35px", // adjust the position as needed
      }}
      onClick={onClick}
    />
  );
};

export default Category;
