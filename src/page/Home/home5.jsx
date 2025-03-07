import React from "react";
import heart_check from "../../assets/icon/heart_check.svg"; // Ensure the path is correct
import heart_check_black from "../../assets/icon/heart_check_black.svg"; // Ensure the path is correct
import video from "../../assets/profileimage/video.svg";
const Home5 = () => {
  return (
    <div className="flex flex-col items-center py-8 px-4 bg-white" style={{ backgroundColor: "#E9F2F4" }}>
      {/* Page Heading */}
      <h1 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h1>

      {/* FAQ Section */}
      <div className="flex flex-row justify-center items-start  ">
        {/* Left Section: Questions */}
        <div className="flex flex-col gap-6 p-6 ">
          {/* Single Question */}
          <div className="flex items-center gap-4 rounded-sm bg-black p-3">
            <span
              className="rounded-full p-3 items-center justify-center"
              style={{ backgroundColor: "#DC8A5E" }}
            >
              <img
                src={heart_check}
                alt="Heart Check Icon"
                className="w-5 h-5"
              />
            </span>
            <span className="text-thin font-medium text-white">
              How often should I test my eyes?
            </span>
          </div>

          {/* Repeat Questions */}
          <div className="flex items-center gap-4 rounded-sm bg-white p-3">
            <span className="rounded-full bg-gray-200 p-3 items-center justify-center">
              <img
                src={heart_check_black}
                alt="Heart Check Icon"
                className="w-5 h-5"
              />
            </span>
            <span className="text-thin font-medium">
              Can screen time affect my vision?
            </span>
          </div>

          <div className="flex items-center gap-4 rounded-sm bg-white p-3">
            <span className="rounded-full bg-gray-200 p-3 items-center justify-center">
              <img
                src={heart_check_black}
                alt="Heart Check Icon"
                className="w-5 h-5"
              />
            </span>
            <span className="text-thin  font-medium">
              What are common signs of eye strain?
            </span>
          </div>

          <div className="flex items-center gap-4 rounded-sm bg-white p-3">
            <span className="rounded-full bg-gray-200 p-3">
              <img
                src={heart_check_black}
                alt="Heart Check Icon"
                className="w-5 h-5"
              />
            </span>
            <span className="text-thin font-medium">
              Are regular eye exams necessary?
            </span>
          </div>
        </div>

        {/* Right Section: Placeholder Content */}
        <div className="p-6">
          <img src={video} alt="Heart Check Icon" className="w-96  " />
          <p className="text-gray-400 w-96 mt-2">
            As per the American Optometric Association adults who wear glasses
            or contact lenses and adults who are over 60 years should visit
            their eye care specialist every year or as suggested by the doctor.
            If the person doesn’t require any vision correction, then a person
            between 18 and 60 years should visit the doctor twice a year.
            <br /> This is a condition that results when the visual image is
            focused behind the retina rather than on the retina. It may be
            caused due to a small eyeball having a weak focusing power being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home5;
