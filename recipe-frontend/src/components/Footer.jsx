import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full md:px-30 px-auto flex items-center py-2 box-border shadow-2xl bg-pink-200 relative">
        <div className="md:p-3 w-[100%] flex-col justify-between py-4">
          <div className="flex items-center">
            <h3 className="text-pink-600 font-bold text-xl ">
              Recipe Generator
            </h3><br></br>
          </div>
          <div className="text-sm text-gray-700">
            Welcome to Recipe Generator,<br></br> your ultimate destination for<br></br> transforming everyday <br></br>ingredients into mouth-<br></br>watering meals.<br></br><br></br>@2025, All rights reserved
          </div>
        </div>
        <div className="md:p-3 w-[100%] flex-col justify-between py-4">
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
        <div className="md:p-3 w-[100%] flex-col justify-between py-4">
          <div className="flex gap-0 items-center">
            <h3 className="text-pink-600 ">
              Legal
            </h3>
        </div>
        <div className="text-sm text-gray-700">Privacy Policy<br></br>Terms of Use<br></br>SiteMap</div>
        </div>
        <div className="md:p-3 w-[100%] flex-col justify-between py-4">
          <div className="flex gap-0 items-center">
            <h3 className="text-pink-600 ">
              Contact Us
            </h3>
        </div>
        <div className="text-sm text-gray-700"><img src=""></img><br></br>Terms of Use<br></br>SiteMap</div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
