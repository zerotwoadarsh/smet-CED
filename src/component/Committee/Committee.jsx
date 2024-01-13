import React from "react";
import banner from "../../assets/images/banner.jpg";

const Committe = ({ styles, data }) => {
  return (
    <>
      <div className="min-h-screenl">
        <div>
          {/* Image Div */}
          <div className="flex items-center justify-center ">
            <img src={banner} alt="" className="w-full h-auto" />
          </div>
          <div>
            <h1 className="text-4xl font-bold flex justify-center mt-5">{data.name}</h1>
          </div>
        </div>
        <div style={styles} className=" px-4 py-8 mt-auto flex flex-shrink items-end justify-center text-white">
          <ul className="text-lg list-disc list_style">
            {data.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
};

export default Committe;
