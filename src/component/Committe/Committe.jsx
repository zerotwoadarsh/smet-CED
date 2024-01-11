import React from "react";
import banner from "../../assets/images/banner.jpg";

const Committe = ({ data }) => {
  return (
    <>
      <div className="min-h-screenl">
        <div>
          {/* Image Div */}
          <div className="flex items-center justify-center ">
            <img src={banner} alt="" className="w-full h-auto" />
          </div>
          <div>
            <h1 className="m-10">{data.name}</h1>
          </div>
        </div>
        <div className="px-4 py-12 mt-auto flex items-end justify-center text-white">
          <ul className="text-lg list-disc list_style">
            {data.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="site-footer">
        <p>SMET © 2024 All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Committe;
