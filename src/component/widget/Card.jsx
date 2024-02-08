import React from "react";

export const Card = ({props}) => {
  return (
    <div className="flex flex-row max-w-sm font-medium">
      <div className="flex flex-col items-center m-5">
        <div>
          <img src={props.img} alt={props.name} className=" h-52 rounded-md" />
        </div>
        <div className="  text-indigo-700">{props.designation}</div>
        <div>{props.name}</div>
        <div>{props.post}</div>
      </div>
    </div>
  );
};

export default Card;
