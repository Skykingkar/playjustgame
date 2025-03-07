import React from "react";
import mobile from "../../assets/icon/Group 236.svg";
import check from "../../assets/icon/check.svg";
import AppStore from "../../assets/icon/Appstore.svg";
import PlayStore from "../../assets/icon/PlayStore.svg";

const Home4 = () => {
  return (
    <div className="flex flex-row justify-center items-center p-24">
      {/* Row 1: Image */}
      <div className="w-48 flex justify-center self-center p-1">
        <img src={mobile} alt="Placeholder" />
      </div>

      {/* Row 2: Content */}
      <div className="bg-white flex-col pl-10">
        <h1 className="text-4xl font-bold">Download the Jeevni app</h1>
        <h3 className="text-xl flex pt-2">
          Receive ₹<span className="text-green-600">251</span> on app wallet 🎉
        </h3>
        <h3 className="flex pt-6 font-thin">
          <img src={check} className="w-6 h-6" alt="Check" />
          Free unlimited questions
        </h3>
        <h3 className="flex font-thin">
          <img src={check} className="w-6 h-6" alt="Check" />
          Exclusive health packages
        </h3>
        <h3 className="flex font-thin">
          <img src={check} className="w-6 h-6" alt="Check" />
          Deals on appointment booking
        </h3>

        <h3 className="text-lg flex font-bold pt-10 pb-2">
          Get the app download link
        </h3>
        <div className="flex">
          <span className="p-3 bg-gray-200">
            +91 <span className="ml-4">|</span>
          </span>
          <input
            type="tel"
            placeholder="Phone number"
            className="w-64 p-3 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200"
          />
          <button className="rounded-sm bg-black text-cyan-50 p-2 font-thin text-sm">
            Share link
          </button>
        </div>
        <div className="flex gap-4 pt-6">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PlayStore} className="w-40" alt="Play Store" />
          </a>
          <a
            href="https://play.google.com/store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={AppStore} className="w-40" alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home4;
