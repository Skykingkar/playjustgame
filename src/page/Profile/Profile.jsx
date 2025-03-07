import React, { useState } from "react";
import Image5 from "../../assets/profileimage/Profile1.svg";
import thumb from "../../assets/icon/thumb_up.svg";
import buletick from "../../assets/icon/bluetick.svg";
import callus from "../../assets/icon/call.svg";
import message from "../../assets/icon/forum.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Hospital from "../../assets/icon/Hospital.svg";
import Navbar from "../navbar/navbar"
import { Link } from 'react-router-dom';
const createCustomIcon = (iconUrl) => {
  return new L.Icon({
    iconUrl: iconUrl,
    iconSize: [40, 50], // Set the size of the icon
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};
const DoctorProfile = ({
  doctorData,
  appointmentSlots,
  reviews,
  clinicInfo,
}) => {
  const [selectedDate, setSelectedDate] = useState(
    Object.keys(appointmentSlots)[0]
  );
  const clinicPosition = {
    lat: parseFloat(clinicInfo.latitude), // Make sure to replace with actual latitude
    lng: parseFloat(clinicInfo.longitude), // Make sure to replace with actual longitude
  };

  return (
    <>  
      <Navbar/>
      <div class="grid grid-cols-12 mt-2">
  <div class="col-span-8 col-start-3">
    <div className="flex flex-col lg:flex-row p-2 bg-white gap-10">

      {/* Left Section */}
      <div className="w-full lg:w-3/2 ">
        {/* Doctor Info */}
        <div className="bg-white  p-6">
          <div className="flex ">
            <img
              src={doctorData.image}
              alt={doctorData.name}
              className="w-40 h-40 rounded-xl border"
            />
            <div className="ml-4 ">
              <h1 className="text-xl font-bold text-gray-800 flex">
                {doctorData.name}
              </h1>
              <p className="text-sm text-gray-600 flex items-center">
                {doctorData.specialization}
                <img
                  src={buletick}
                  alt={doctorData.name}
                  className="w-3 h-3 ml-1"
                />
              </p>
              <p className="text-yellow-500 font-semibold mt-1 flex items-center">
                <img src={thumb} alt={doctorData.name} className="w-4 h-4" />
                <span className="ml-2 flex">
                  {doctorData.rating}% ({doctorData.patients} patients)
                </span>
              </p>
              <p className="text-sm text-gray-600 font-bold flex">
                {doctorData.degree}
              </p>
              <div className="flex flex-wrap gap-2 mt-2 flex">
                {doctorData.qualifications.map((qual, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-xs px-2 py-1 rounded"
                  >
                    {qual}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Doctor */}
        <div className="bg-white  p-6">
          <h2 className="text-lg font-bold mb-2 text-gray-800 flex">
            About Doctor
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed flex">
            {doctorData.about}
          </p>
        </div>

        {/* Degree & Achievements */}
        <div className="bg-white  p-6">
          <h2 className="text-lg font-bold mb-2 text-gray-800 flex">
            Degree & Achievements
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed flex">
            {doctorData.achievements}
          </p>
        </div>

        {/* Reviews Section */}
        <div className="bg-white  p-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800 flex">
            Review & Rating
          </h2>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Side: Graph */}

            {/* Right Side: Ratings Breakdown */}
            <div className="w-full lg:w-1/2">
              {doctorData.ratingBreakdown.map((item, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{item.label}</span>
                    <span>{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full"
                      style={{
                        width: `${(item.count / doctorData.patients) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Right Side: Overall Rating with Stars */}
            <div className="flex flex-col items-center mt-6">
              <span className="text-4xl font-bold">
                {doctorData.averageRating}
              </span>
              <div className="flex items-center mt-2">
                {/* Dynamically Render Stars */}
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={
                        starValue <= doctorData.averageRating
                          ? "green"
                          : starValue - 0.5 <= doctorData.averageRating
                          ? "url(#halfStarGradient)"
                          : "none"
                      }
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      {/* Gradient for half-filled stars */}
                      {starValue - 0.5 <= doctorData.averageRating &&
                        starValue > doctorData.averageRating && (
                          <defs>
                            <linearGradient id="halfStarGradient">
                              <stop offset="50%" stopColor="green" />
                              <stop offset="50%" stopColor="white" />
                            </linearGradient>
                          </defs>
                        )}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 2.348a.75.75 0 011.04 0l2.526 2.452a.75.75 0 00.564.219l3.499.017a.75.75 0 01.561 1.265l-2.693 2.9a.75.75 0 00-.174.658l.852 3.45a.75.75 0 01-1.133.818L12 12.654a.75.75 0 00-.78 0l-3.084 1.92a.75.75 0 01-1.133-.818l.852-3.45a.75.75 0 00-.174-.658l-2.693-2.9a.75.75 0 01.561-1.265l3.5-.017a.75.75 0 00.563-.219L11.48 2.348z"
                      />
                    </svg>
                  );
                })}
              </div>
              <p className="text-sm text-gray-600 mt-2">Overall Rating</p>
            </div>
          </div>

          {/* Individual Reviews */}
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border-t pt-4 mt-4 text-sm text-gray-700"
            >
              <p className="font-semibold text-gray-800 flex">{review.name}</p>
              <p className="mt-1 flex">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/2  bg-white ">
        {/* Appointment Slots */}

        <div className="bg-white  p-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800 flex">
            Appointment Slots
          </h2>
          <div className="flex gap-4 mb-6 overflow-x-auto">
            {Object.keys(appointmentSlots).map((date) => (
              <button
                key={date}
                className={`flex flex-col items-center justify-center w-12 h-20 rounded-3xl border-2 ${
                  selectedDate === date
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-black"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <span className="text-sm font-semibold">
                  {new Date(date).toLocaleString("en-US", { month: "short" })}
                </span>
                <span className="text-xl font-bold">
                  {new Date(date).getDate()}
                </span>
                <span className="text-xs">{new Date(date).getFullYear()}</span>
              </button>
            ))}
          </div>
          <h4 className="text-sm  mb-4 text-gray-800 flex">
            Available timing slot
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {appointmentSlots[selectedDate]?.map((slot, index) => (
              <button
                key={index}
                className="bg-gray-200 text-sm px-2 py-1 rounded text-center hover:bg-black hover:text-white"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center w-full mb-2">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-300 font-medium">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex p-2 space-x-2">
          {" "}
          {/* Adjusted space-x-4 to space-x-2 */}
          {/* Call Us Button */}
          <button className="w-full flex items-center justify-center bg-white text-black py-2 mt-1 rounded hover:bg-black hover:text-white border border-black transition-colors duration-200">
            <img src={callus} alt="Call Icon" className="w-5 h-5 mr-2" />
            Call us for appointment
          </button>
          {/* Message Button */}
          <button className="w-full flex items-center justify-center bg-white text-black py-2 mt-1 rounded hover:bg-black hover:text-white border border-black transition-colors duration-200">
            <img src={message} alt="Message Icon" className="w-5 h-5 mr-2" />
            Message for inquiries
          </button>
        </div>

        {/* Billing Information */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800 flex">
            Billing Information
          </h2>
          <div className="text-sm space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Appointment Fee:</span>
              <span>₹{doctorData.fee}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span>₹{doctorData.discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Service charge/tax:</span>
              <span>₹{doctorData.serviceTax}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total amount:</span>
              <span>₹{doctorData.totalFee}</span>
            </div>
          </div>
          <div className="flex justify-end mt-4">
          <Link to="/SidebarLayout">
            <button className="flex items-center bg-black text-white py-2 px-4 rounded hover:bg-blue-600 text-sm">
              Book Now
              <svg
                xmlns="http://www.w3.org/1000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            </Link>
          </div>
        </div>

        {/* Clinic Information */}
        <div className="bg-white p-6 mt-0">
          {/* Adjusted margin-top to mt-0 */}
          <h2 className="text-lg font-bold mb-4 text-gray-800 flex">
            Clinic Information
          </h2>
          <div className="mt-4">
            {/* Map using react-leaflet */}
            <MapContainer
              center={clinicPosition}
              zoom={15}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "300px", borderRadius: "8px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={clinicPosition}
                icon={createCustomIcon(clinicInfo.icon)}
              >
                <Popup>{clinicInfo.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
          <p className="text-xl text-gray-700 flex mt-2 font-bold">
            {clinicInfo.name}
          </p>
          <p className="text-sm text-gray-700 flex mt-2">{clinicInfo.name}</p>
          <p className="text-sm text-gray-700 mt-1 flex">
            {clinicInfo.address}
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

const sampleData = {
  doctorData: {
    image: Image5,
    name: "Dr. Kavita Jain",
    specialization: "General Physician",
    degree: "MBBS, MD ",
    rating: 99,
    patients: 232,
    qualifications: [
      "Dermatology",
      "Venereology & Leprosy",
      "DNB Dermatology",
      "Hair Transplant Surgeon",
      "Dermatologist",
      "Cosmetologist",
    ],
    about:
      "Dr K C Dharam Kumar is a leading dermatologist, cosmetologist and hair transplant surgeon from Bangalore. He has more than 9 years of experience . He Completed His Mbbs From the Prestigious Kasturaba Medical College, Mangaluru. Because of His Dynamism, People Friendly Nature and Leadership Skills, He Was Elected as the Student Council President in 2011, His Compassion Earned the Praise of All.",
    achievements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    averageRating: 4.5,
    ratingBreakdown: [
      { label: "Excellent", count: 24 },
      { label: "Good", count: 12 },
      { label: "Average", count: 4 },
    ],
    fee: 300,
    discount: 100,
    serviceTax: 50,
    totalFee: 250,
  },
  appointmentSlots: {
    "2025-01-09": [
      "10:00 AM - 10:30 AM",
      "10:30 AM - 11:00 AM",
      "1:00 PM - 1:30 PM",
      "1:30 PM - 2:00 PM",
      "1:00 PM - 1:30 PM",
      "1:30 PM - 2:00 PM",
      "1:00 PM - 1:30 PM",
      "1:30 PM - 2:00 PM",
    ],
    "2025-01-10": ["11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM"],
    "2025-01-11": ["1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"],
    "2025-01-12": ["2:00 PM - 2:30 PM", "2:30 PM - 3:00 PM"],
    "2025-01-13": ["10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM"],
    "2025-01-14": ["11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM"],
    "2025-01-15": ["1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"],
  },
  reviews: [
    {
      name: "Rishabh Kumar",
      comment: "She was very attentive and helpful in resolving my concerns.",
    },
    {
      name: "Archana Singh",
      comment: "The consultation was excellent. Highly recommend!",
    },
  ],
  clinicInfo: {
    name: "Ajanta General Hospital",
    address: "Munda Rd, Lalpur, Ranchi, Jharkhand, 830001",
    mapImage: "https://via.placeholder.com/300",
    latitude: "23.3441", // Example latitude
    longitude: "85.3096", // Example longitude
    icon: Hospital,
  },
};

const App = () => <DoctorProfile {...sampleData} />;

export default App;
