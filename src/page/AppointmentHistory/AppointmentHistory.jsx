import React, { useState } from "react";
import Hospital from "../../assets/icon/Hospital.svg";
import { FaClock, FaMoneyBillWave, FaReceipt } from "react-icons/fa";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Navbar from "../navbar/navbar"
import { Link } from 'react-router-dom';
const AppointmentHistory = () => {
  const [expandedAppointment, setExpandedAppointment] = useState(null); // State to track expanded appointment
  const appointments = [
    {
      id: 1,
      doctorName: "DR. KAVYA JAIN",
      hospital: "Ajanta General Hospital Ranchi",
      address:
        "Near Naya Bazar, Morabadi,400 water park road, Lalpur, Ranchi, Jharkhand, 834001",
      date: "19",
      month: "November",
      time: "11:00 AM - 12:00 PM",
      bookingId: "323832245",
      status: "booked",
      logo: Hospital,
      billingDetails: {
        total: 400,
        otherCharges: 50,
        discount: 100,
        payable: 300,
      },
      instructions: [
        "Arrive on time.",
        "Carry all necessary documents.",
        "Reach the designated area 10 minutes early.",
      ],
    },
    {
      id: 2,
      doctorName: "DR. KAVYA JAIN",
      hospital: "Ajanta General Hospital Ranchi",
      address:
        "Near Naya Bazar, Morabadi,400 water park road, Lalpur, Ranchi, Jharkhand, 834001",
      date: "19",
      month: "November",
      time: "11:00 AM - 12:00 PM",
      bookingId: "323832246",
      status: "cancelled",
      logo: Hospital,
      billingDetails: {
        total: 500,
        otherCharges: 60,
        discount: 150,
        payable: 350,
        walletDeduction: 12,
      },
      instructions: [
        "Arrive on time.",
        "Bring your ID proof.",
        "Prepare questions for the doctor in advance.",
      ],
    },
  ];

  const toggleViewMore = (id) => {
    setExpandedAppointment((prev) => (prev === id ? null : id)); // Toggle appointment
  };
  return (
    <>

    <div className="flex bg-gray-100 h-screen ">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
       

        {/* Appointment History */}
        <div className="p-1 space-y-4 ">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="h-auto bg-white rounded-lg mb-4 shadow"
            >
              <div className="bg-white p-6 rounded-lg shadow flex flex-row">
                {/* Logo Section */}
                <div className="flex">
                  <img
                    src={appointment.logo}
                    alt="Healthcare Logo"
                    className="w-20 h-20 rounded-full"
                  />
                </div>

                {/* Details Section */}
                <div className="flex flex-col items-start flex-grow px-4">
                  <h3 className="text-lg font-bold">
                    {appointment.doctorName}
                  </h3>
                  <p className="text-sm text-gray-500">{appointment.time}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    {appointment.hospital}
                  </p>
                  <p className="text-sm text-gray-500">{appointment.address}</p>
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-gray-700 flex">
                        Booking ID: {appointment.bookingId}
                      </p>
                      <p className="text-sm flex items-center font-medium mt-2 justify-start ">
                        <span
                          className={`flex items-center gap-2 px-2 py-1 rounded-2xl ${
                            appointment.status === "booked"
                              ? "text-green-600 bg-green-100"
                              : "text-red-600 bg-red-100"
                          }`}
                        >
                          {appointment.status === "booked" ? (
                            <>
                              <span className="w-4 h-4 bg-green-600 text-white rounded-full flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="w-4 h-4"
                                >
                                  <path d="M9 19.4l-5.7-5.7L5.6 12l3.4 3.4L18.4 5.8l2.1 2.1L9 19.4z" />
                                </svg>
                              </span>
                              Appointment Booked!
                            </>
                          ) : (
                            <>
                              <span className="w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  className="w-5 h-5"
                                >
                                  <path d="M6.2 6.2l11.6 11.6-1.4 1.4L4.8 7.6l1.4-1.4zM4.8 18l11.6-11.6 1.4 1.4L6.2 19.4 4.8 18z" />
                                </svg>
                              </span>
                              Appointment Cancelled!
                            </>
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-center space-x-2 mt-2 ml-96">
                      <button className="inline-flex items-center text-sm py-1 px-4 rounded border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 12H8m4-4l4 4-4 4"
                          ></path>
                        </svg>
                        Get Direction
                      </button>
                      <button className="inline-flex items-center bg-black text-white text-sm py-1 px-4 rounded">
                        Book Again
                      </button>
                    </div>
                  </div>
                </div>

                {/* Date Section (Moved to the end) */}
                <div className="flex justify-center items-center h-24">
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gray-200 p-2 rounded w-">
                      {appointment.date}
                    </p>
                    <p className="text-sm bg-gray-200 rounded mt-2 p-2">
                      {appointment.month}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="w-full border-t-2 border-gray-300" />

              {/* Feedback Section */}
              <div className="flex flex-row">
                <div className="flex flex-col ml-2">
                  <p className="mt-1 text-sm text-gray-500 flex ">
                    How’s your experience?
                  </p>
                  <p className="text-sm text-gray-500 ">
                    Your feedback helps thousand others
                  </p>
                </div>
                <div className="flex space-x-1 mt-2 flex-grow">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-gray-200 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex flex-col justify-end p-3">
                  <button
                    onClick={() => toggleViewMore(appointment.id)}
                    className="text-blue-500 text-sm mt-2 w-full text-center"
                  >
                    {/* View More Section */}

                    {expandedAppointment === appointment.id
                      ? "View Less"
                      : "View More"}
                  </button>
                </div>
              </div>
              {expandedAppointment === appointment.id && (
                <div className="flex p-2 border-gray-500  flex-row">
                  <div className="w-3/4">
                    <div className="w-3/4 flex flex-row justify-between text-left">
                      <div className="space-y-2">
                        <p className="p-2">
                          <span className="text-gray-500 text-sm">
                            Patient Name
                          </span>
                          <br />
                          <span className="font-medium">Kumar Shashi</span>
                        </p>
                        <p className="p-2">
                          <span className="text-gray-500 text-sm">
                            Consultation Date:
                          </span>
                          <br />
                          <span className="font-medium">
                            22 September 2023 (11:00 AM - 12:00 PM)
                          </span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="p-2">
                          <span className="text-gray-500 text-sm">
                            Mobile No
                          </span>
                          <br />
                          <span className="font-medium">+91 799127226</span>
                        </p>
                        <p className="p-2">
                          <span className="text-gray-500 text-sm">
                            Age & Gender:
                          </span>
                          <br />
                          <span className="font-medium">26 Yrs Male</span>
                        </p>
                      </div>
                    </div>

                    <hr className="w-full border-t-2 border-gray-300" />
                    <div className="mt-4 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold flex">
                        Instructions to Follow
                      </h4>
                      <div className="flex flex-row justify-start">
                        <div className="w-full">
                          <ul className="list-none pl-0 text-gray-700 mt-2 text-left">
                            {appointment.instructions.map(
                              (instruction, index) => (
                                <li key={index} className="flex items-center">
                                  <CheckCircleIcon className="text-green-500 mr-2" />
                                  {instruction}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="w-full">
                          <ul className="list-none pl-0 text-gray-700 mt-2 text-left">
                            {appointment.instructions.map(
                              (instruction, index) => (
                                <li key={index} className="flex items-center">
                                  <CheckCircleIcon className="text-green-500 mr-2" />
                                  {instruction}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-sm ml-auto bg-white shadow-lg rounded-lg p-6 border">
                    <h4 className="text-sm font-bold text-gray-700">
                      Billing Details:
                    </h4>
                    <hr className="w-full border-t-2 border-gray-300 my-2" />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Total:</span>
                        <span className="font-medium">
                          ₹{appointment.billingDetails.total}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Other Charges:</span>
                        <span className="font-medium">
                          ₹{appointment.billingDetails.otherCharges}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Discount:</span>
                        <span className="font-medium text-red-500">
                          -₹{appointment.billingDetails.discount}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Deduction from Wallet:</span>
                        <span className="font-medium text-red-500">
                          -₹{appointment.billingDetails.walletDeduction}
                        </span>
                      </div>
                    </div>

                    <hr className="w-full border-t-2 border-gray-300 my-2" />

                    <div className="flex justify-between text-sm font-semibold text-gray-700">
                      <span>Payable Amount:</span>
                      <span className="text-black font-bold">
                        ₹{appointment.billingDetails.payable}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </main>
    </div>
    </>
  );
};

export default AppointmentHistory;
