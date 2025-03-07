import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentHistory from "./AppointmentHistory";
import Wallet from "../Wallet/Wallet";
import Navbar from "../navbar/navbar";

const SidebarLayout = () => {
  const [selectedPage, setSelectedPage] = useState("appointmentHistory");

  const renderContent = () => {
    switch (selectedPage) {
      case "appointmentHistory":
        return <AppointmentHistory />;
      case "wallet":
        return <Wallet />;
      default:
        return <AppointmentHistory />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white border-r border-gray-200">
          <h1 className="text-xl font-bold text-gray-800 p-6">My Drive</h1>
          <nav className="space-y-4 px-6">
            <button
              className={`block text-left px-4 py-2 rounded ${
                selectedPage === "appointmentHistory"
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => setSelectedPage("appointmentHistory")}
            >
              Appointment history
            </button>
            <button
              className={`block text-left px-4 py-2 rounded ${
                selectedPage === "wallet"
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => setSelectedPage("wallet")}
            >
              Your wallet
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header Section */}
          <header className="bg-white p-4 flex items-center justify-between shadow-sm rounded-lg mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              {selectedPage === "appointmentHistory" ? "Appointment History" : "Your Wallet"}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-gray-700 font-medium">Rupeesh Kumar Sah</p>
                <p className="text-sm text-gray-500">+91 9988776655</p>
              </div>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </div>
          </header>

          {renderContent()}
        </main>
      </div>
    </>
  );
};

export default SidebarLayout;
