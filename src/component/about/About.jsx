import React from "react";
import banner from "../../assets/images/banner.jpg";

const About = ({ data }) => {
  return (
    <>
      <div className="min-h-screenl">
        <div>
          {/* Image Div */}
          <div className="flex items-center justify-center flex-col ">
            <img src={banner} alt="" className="w-full h-auto" />
            <h1 className="text-4xl my-5">{data.name}</h1>
          </div>
          {/* paragraph div */}
          <div className="px-4 py-5 mt-auto flex items-end justify-center text-white">
            <p className="text-lg">{data.desc}</p>
          </div>
        </div>
        {/* <div className=" bg-gray-800 text-white text-center py-40 "> */}

        {/* </div> */}
      </div>
      <footer className="site-footer">
        <p>SMET © 2024 All Rights Reserved</p>
      </footer>
    </>
  );
};

export default About;
