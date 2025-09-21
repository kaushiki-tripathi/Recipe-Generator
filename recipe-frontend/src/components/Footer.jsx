import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start py-2 box-border shadow-2xl bg-pink-200 relative">
        <div className="md:p-3 w-full flex flex-col justify-between py-4 items-center md:items-start">
          <div className="flex items-center">
            <h3 className="text-pink-600 font-bold text-xl ">
              Recipe Generator
            </h3><br></br>
          </div>
          <div classNace="text-sm text-gray-700">
            Welcome to Recipe Generator,<br></br> your ultimate destination for<br></br> transforming everyday <br></br>ingredients into mouth-<br></br>watering meals.<br></br><br></br>@2025, All rights reserved
          </div>
        </div>
  <div className="md:p-3 w-full flex flex-col justify-between py-4 items-center md:items-start">
          <div className="flex gap-0 items-center">
            <h3 className="text-pink-600 ">
              Technologies
            </h3>
        </div>
        <div className="text-sm text-gray-700">
            HTML
            <br></br>CSS<br></br>JavaScipt<br></br>React
          </div>
        </div>
  <div className="md:p-3 w-full flex flex-col justify-between py-4 items-center md:items-start">
          <div className="flex gap-0 items-center">
            <h3 className="text-pink-600 ">
              Legal
            </h3>
        </div>
        <div className="text-sm text-gray-700">Privacy Policy<br></br>Terms of Use<br></br>SiteMap</div>
        </div>
  <div className="md:p-3 w-full flex flex-col justify-between py-4 items-center md:items-start">
          <div className="flex gap-0 items-center">
            <h3 className="text-pink-600 ">
              Contact Us
            </h3>
        </div>
        <div className="text-sm text-gray-700">Pranveer Singh Institute of Technology<br></br>Github<br></br>LinkedIn</div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
