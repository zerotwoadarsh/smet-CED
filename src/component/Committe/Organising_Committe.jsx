import React from "react";
import Committe from "./Committe";

const Organising_Committe = () => {
  var data = {
    name: "Organising Committee",
    listItems: [
      "Dr. Babita Saini, NIT Kurukshetra",
      "Dr. A K Prabhakar, NIT Kurukshetra",
      "Dr. Yogesh Aggarwal, NIT Kurukshetra",
      "Dr. Shweta Rathi, NIT Kurukshetra",
      "Dr. Pankaj Munjal, NIT Kurukshetra",
      "Dr. J S Yadav, NIT Kurukshetra",
    ],
  };
  return (
    <div>
      <div>
        <Committe data={data} />
      </div>
    </div>
  );
};

export default Organising_Committe;
