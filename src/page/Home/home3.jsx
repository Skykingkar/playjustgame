import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Verified icon from react-icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import arrow from "../../assets/icon/chevron_left.svg";
import arrowright from "../../assets/icon/chevron_right (1).svg";
import desgin from "../../assets/icon/format_quote.svg";

const feedbackData = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    qualification: "Software Engineer",
    comment:
      "Great service, highly recommend! I have been using this service for over a year now and can confidently say that they are the best in the business. Customer support is always on point, and their products are top-notch.",
    rating: 5.0,
    verified: true,
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    qualification: "Product Manager",
    comment:
      "Good quality products, but the delivery was late. It was a bit disappointing, as I expected my order to arrive earlier. However, after reaching out to customer service, they resolved the issue quickly and offered me a discount for the inconvenience.",
    rating: 4.5,
    verified: false,
  },
  {
    name: "Sam Wilson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    qualification: "Customer Support",
    comment:
      "Not satisfied with the customer service. My issue was not addressed in a timely manner, and I felt that I was not given the attention I deserved. The product itself is good, but the support team needs improvement.",
    rating: 2.5,
    verified: true,
  },
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    qualification: "Marketing Specialist",
    comment:
      "I love this brand! Their products are always innovative and of great quality. However, I would love to see more options for eco-friendly items. I know they’re making an effort, but I believe there is potential for even more sustainability in their product line.",
    rating: 4,
    verified: true,
  },
  {
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    qualification: "Graphic Designer",
    comment:
      "Fantastic experience! From the moment I placed my order to the time I received it, everything was seamless. The product quality exceeded my expectations, and I will definitely be ordering again in the future. Keep it up!",
    rating: 5,
    verified: false,
  },
  // Add more feedbacks as needed
];

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullComment, setShowFullComment] = useState(false);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
    setShowFullComment(false); // Reset the "Read More" state when moving to next feedback
  };

  const prevFeedback = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedbackData.length) % feedbackData.length
    );
    setShowFullComment(false); // Reset the "Read More" state when moving to previous feedback
  };

  const { name, image, qualification, comment, rating, verified } =
    feedbackData[currentIndex];

  const truncatedComment =
    comment.length > 150 ? `${comment.substring(0, 150)}...` : comment;

  return (
    <div className="relative  " style={{ backgroundColor: "#E9F2F4" }}>
      {/* Fixed Header */}
      <div className=" top-0 left-0 right-0 text-blue py-10 text-center z-10">
        <h1 className="text-4xl font-bold">What People Say About Us</h1>
      </div>

      {/* Feedback Carousel Container */}
      <div className="flex justify-center pt-32 pb-8 px-4 relative ">
        {/* Left Arrow */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
          <button onClick={prevFeedback}>
            <img src={arrow} style={{ height: 40, width: 40 }} />
          </button>
        </div>

        {/* Feedback Content Container */}
        <div className="flex flex-col w-[400px] p-8 mx-4">
          <div className="flex items-start space-x-4 mb-6">
            {/* Adjusted space between image and text */}
            <img
              src={image}
              alt={name}
              className="w-10 h-10 rounded-full object-cover" // Image size, no extra left space
            />
            <div className="flex flex-col items-start">
              {/* Align text to start */}
              <h5 className="text-sm font-semibold text-gray-800 flex items-start">
                {name}
                {verified && <FaCheckCircle className="text-green-500 ml-2" />}
              </h5>
              <p className="text-xs text-green-600">{qualification}</p>
            </div>
          </div>

          {/* Comment with Read More functionality */}
          <p className="text-s text-gray-700 ">
            {showFullComment ? comment : truncatedComment}
            {comment.length > 150 && (
              <button
                onClick={() => setShowFullComment((prev) => !prev)}
                className="text-blue-500 ml-2"
              >
                {showFullComment ? "read less" : "read more"}
              </button>
            )}
          </p>

          {/* Rating Section with Green Stars for Decimal Ratings */}
          <div className="flex items-center mt-4">
            {/* Full Stars */}
            {[...Array(Math.floor(rating))].map((_, index) => (
              <FaStar key={index} className="text-green-500 text-lg" />
            ))}

            {/* Half Star if there's a decimal part */}
            {rating % 1 !== 0 && (
              <FaStarHalfAlt className="text-green-500 text-lg" />
            )}

            {/* Empty Stars for the rest */}
            {[...Array(5 - Math.ceil(rating))].map((_, index) => (
              <FaRegStar key={index} className="text-green-500 text-lg" />
            ))}

            {/* Display the rating number */}
            <span className="text-lg text-gray-700 ml-2">{rating}</span>
          </div>
        </div>
        <div className="flex flex-col w-[200px] p-8 mx-4">
          <img
            src={desgin}
            alt={name}
            className="w-20 h-20 object-cover" // Increased image size and ensured proper aspect ratio
          />
        </div>

        {/* Right Arrow */}
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
          <button onClick={nextFeedback}>
            <img src={arrowright} style={{ height: 40, width: 40 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
