
import React from "react";
import banner from "../../assets/images/banner.jpg";

const About = ({ styles, data }) => {
  return (
    <>
      <div className=" h-screen bg-white text-black">
        <div>
          {/* Image Div */}
          <div className="flex items-center justify-center text-justify flex-col">
            <img src={banner} alt="" className="w-full h-auto" />
          </div>
          <div>
            <h1 className="text-4xl font-bold flex justify-center  mt-5">{data.name}</h1>
          </div>
        </div>
        <div className=" lg:px-40 px-10 py-5 mt-auto flex justify-center text-justify">
            <p className="text-lg flex items-center justify-center">{data.desc}</p>
          </div>
      </div>

    </>
  );
};

export default About;
