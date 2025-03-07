import React from "react";
import Card from "../../component/CardHome1";
import calender from "../../assets/icon/calendar_month.svg";
import Emergency from "../../assets/icon/e911_emergency.svg";
import Ecg from "../../assets/icon/ecg.svg";

const Home1 = () => {
  const cardData = [
    {
      icon: calender,
      title: "Book Appointment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      eram: "Book now",
      extra: "",
    },
    {
      icon: Emergency,
      title: "Emergency Case",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      eram: "Contact now",
      extra: "+91 8877669955",
    },
    {
      icon: Ecg,
      title: "Our Doctors",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      eram: "See doctors",
      extra: "",
    },
  ];

  return (
    <div className=" flex flex-col items-center py-8 px-4 bg-white" style={{ backgroundColor: "#E9F2F4" }}>
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Why to choose us?</h1>
        <p className="text-gray-600 mt-2">
          Discover the benefits and reasons why this solution is perfect for
          your needs.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((data, index) => (
          <Card
            key={index}
            icon={data.icon}
            title={data.title}
            description={data.description}
            eram={data.eram}
            extra={data.extra}
          />
        ))}
      </div>
    </div>
  );
};

export default Home1;
