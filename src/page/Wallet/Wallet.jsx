import React from "react";
import { FaClock, FaMoneyBillWave, FaReceipt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Wallet = () => {
  const walletData = {
    appointmentBalance: 200,
    refundInProcess: 64,
    totalBalance: 1234.67,
    transactions: [
      {
        id: 1,
        description: "Appointment has been booked",
        amount: -600,
        date: "12 September 2023 at 9:29 PM",
        icon: <FaReceipt className="w-6 h-6 text-gray-500" />,
      },
      {
        id: 2,
        description: "Appointment has been booked",
        amount: -600,
        date: "12 September 2023 at 9:29 PM",
        icon: <FaReceipt className="w-6 h-6 text-gray-500" />,
      },
      {
        id: 3,
        description: "Refund processed",
        amount: 200,
        date: "13 September 2023 at 10:15 AM",
        icon: <FaMoneyBillWave className="w-6 h-6 text-green-500" />,
      },
    ],
  };

  return (
    <>
   
    <div className="bg-gray-100 min-h-screen flex   p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md">
        {/* Wallet Summary */}
        <div className="p-6 bg-teal-100 rounded-t-lg flex items-center justify-between">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2 bg-red-500 text-white p-4 rounded-lg">
              <FaClock className="w-6 h-6" />
              <div>
                <p className="text-lg font-bold">₹{walletData.appointmentBalance}.00</p>
                <p className="text-sm">Expires within 6 weeks</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500 text-white p-4 rounded-lg">
              <FaClock className="w-6 h-6" />
              <div>
                <p className="text-lg font-bold">₹{walletData.refundInProcess}.00</p>
                <p className="text-sm">Applicable after 10 days</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium text-gray-600">Your balance</p>
            <p className="text-4xl font-bold text-green-500">₹{walletData.totalBalance}</p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Transaction history</h2>
          <div>
            {walletData.transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between bg-gray-50 p-4 mb-2 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 p-2 rounded-full">
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <p
                  className={`font-bold ${
                    transaction.amount < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {transaction.amount < 0
                    ? `- ₹${Math.abs(transaction.amount)}`
                    : `+ ₹${transaction.amount}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Wallet;
