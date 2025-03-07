import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-950    py-8 px-4">
      <div className="flex flex-row justify-between items-start text-white p-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <div className="font-thin flex">About us</div>
          <div className="font-thin flex">care@jeevni.com</div>
          <div className="font-thin flex">+91 9988776655</div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <div className="font-thin flex">Healthcare</div>
          <div className="font-thin flex">Contacts</div>
          <div className="font-thin flex">Careers</div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <div className="font-thin">Terms & Conditions</div>
          <div className="font-thin flex">Privacy & Policies</div>
          <div className="font-thin flex">FAQs</div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2 items-end">
          <div className="font-semibold">© 2024 JEEVNI PVT. LTD.</div>
          <div className="font-semibold">INDIA</div>
          <div className="flex gap-4 mt-2">
            <FaYoutube className="text-white w-6 h-6" />
            <FaTwitter className="text-white w-6 h-6 hover:text-blue-400" />
            <FaLinkedin className="text-white w-6 h-6 hover:text-blue-600" />
            <FaInstagram className="text-white w-6 h-6 hover:text-pink-500" />
            <FaFacebook className="text-white w-6 h-6 hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
