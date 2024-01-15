import React from "react";
import committeeBanner from "../../assets/images/committeeBanner.jpg"

const Committe = ({ data }) => {
  return (
    <div className=" h-full bg-slate-50 text-black">
      <div>
        <div className="flex items-center justify-center ">
          <img src={committeeBanner} alt="" className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-4xl font-bold flex justify-center text-center max-sm:px-4 mt-5">{data.name}</h1>
        </div>
      </div>
      <div  className=" px-12 py-8 mt-auto flex flex-shrink items-end justify-center">
        <ul className="text-lg list-disc list_style">
          {data.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Committe;
