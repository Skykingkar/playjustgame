import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./page/login/login";
import Otp from "./page/login/otp";
import Category from "./page/Category/Newcategory";
import Mainhome from "./page/Home/mainhome";
import Footer from "./page/Footer/Footer";
import Header from "./page/Header/Header";
import ProfileCard from "./component/ProfileCard";
import AppointmentHistory from "./page/AppointmentHistory/AppointmentHistory";
import Wallet from "./page/Wallet/Wallet";
import ClinicListingPage from "./page/ListPage/ClinicListingPage";
import Profile from "./page/Profile/Profile";
import NotFound from "./page/NotFound"; // 404 Page
import Navbar from "./page/navbar/navbar"
import SidebarLayout from "./page/AppointmentHistory/SidebarLayout";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainhome />} />
      <Route path="/login" element={<Login />} /> {/* Login Page */}
      <Route path="/Search" element={<ClinicListingPage />} /> {/* Login Page */}
      <Route path="/Profile" element={<Profile />} /> {/* Profile Page */}
      <Route path="/AppointmentHistory" element={<AppointmentHistory />} /> {/* AppointmentHistory Page */}
      <Route path="/Wallet" element={<Wallet />} /> {/* AppointmentHistory Page */}
      <Route path="/SidebarLayout" element={<SidebarLayout />} />
      <Route path="/Otp" element={<Otp />} />
    </Routes>
  );
};

export default AppRoutes;
