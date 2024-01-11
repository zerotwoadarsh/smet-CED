import React from "react";
import Committe from "./Committe";

const External_advisory_committe = () => {
  var data = {
    name: "External Advisory Committe",
    listItems: [
      "Dr. Manoranjan Parida, CRRI, Delhi",
      "Dr. Ashish Juneja, IIT Bombay",
      "Dr. M Chandrasekhar, NIT Warangal",
      "Dr. Rathish Kumar Pancharathi, NIT Waranagal",
      "Dr. Mehar Prasad, IIT Madras",
      "Dr. Anupam Chakrabarti, IIT Roorkee",
      "Dr. Abdul Hamid, Adelaide University, Australia",
      "Dr. Mohamed-Ouejdi Belarbi, Biskra, Algeria ",
      "Dr. Ashraf M. Zenkour, Kafrelsheikh University, Iran ",
      "Dr. Mirzi Betasolo, PNG University, Papua New Guinea",
      "Dr. V P Singh, Texas A & M University USA",
      "Dr. CSP Ojha, IIT Roorkee",
      "Dr. Mukand Singh Babel, A. I. T., Thailand",
      "Dr. Ian Holman, Cranfield University, UK.",
      "Dr. Rajagopalan Balaji, University of Colorado, Boulder ",
      "Dr. K C Patra, NIT Rourkela",
      "Dr. S K Singh, NIH, Roorkee",
      "Dr. Suby Bhattacharya, University of Surrey, UK",
      "Dr. Goudappa R. Dodagoudar, IIT Madras",
      "Dr. Debasish Roy, IIT Kharagpur",
      "Dr. Anil Dikshit IIT Bombay",
      "Dr. Ligy Philip IIT Madras",
      "Dr. R D Gupta NIT Allahabad",
      "Dr. R D Garg, IIT Roorkee",
      "Dr. R K Dutta, NIT Hamirpur",
      "Dr. Satish Chandra IIT Roorkee",
      "Dr. M C Deo, IIT Bombay",
      "Dr. Umesh Sharma, PEC Chandigarh",
      "Dr. Pardeep Gupta, PEC Chandigarh",
      "Dr. Siby John, PEC Chandigarh",
      "Dr. Neelima Satyam, IIT Indore",
      "Dr. Suresh Kumar Tiwari, MNIT Jaipur",
      "Dr. N K Samadhiya, IIT Roorkee",
      "Dr. Li Li, Huazhong Univ., Wuhan, China",
      "Dr. Rao Martand Singh, NUST Trondheim, Norway",
      "Dr. Ashutosh Trivedi, DTU, New Delhi",
      "Dr. Arvind Kumar Agnihotri, NIT Jalandhar",
      "Dr. A. K. Chaudhary, NIT Jamshedpur",
      "Dr. I K Pateriya, MORD, GOI, Delhi",
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

export default External_advisory_committe;
