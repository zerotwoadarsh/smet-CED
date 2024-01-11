import React from "react";
import Committe from "./Committe";

const Internal_advisory_committe = () => {
  var data = {
    name: "Internal Advisory Committee",
    listItems: [
      "Dr. S K Madan, Professor, CED, NIT Kurukshetra",
      "Dr. K K Singh, Professor, CED, NIT Kurukshetra",
      "Dr. S M Gupta, Professor, CED, NIT Kurukshetra",
      "Dr. S K Patidar, Professor, CED, NIT Kurukshetra",
      "Dr. Surinder Deswal, Professor, CED, NIT Kurukshetra",
      "Dr. V K Bajpai, Professor, MED, NIT Kurukshetra",
      // Add more items as needed
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

export default Internal_advisory_committe;
