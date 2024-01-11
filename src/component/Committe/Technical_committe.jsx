import React from 'react'
import Committe from './Committe';

const Technical_committe = () => {
  var data = {
    name: "Technical Committee",
    listItems: [
      "Dr. P K Singh, IIT BHU",
      "Dr. M K Choudhary, NIT Jaipur",
      "Dr. L K Yadu, NIT Raipur",
      "Dr. Rajesh Gupta, NIT Nagpur",
      "Dr. Sanjiv Gupta, GCET Jammu",
      "Dr. Ansari AMU Aligarh",
      "Dr. S M Yadav, NIT Surat",
      "Dr. Santosh G Thampi, NIT Calicut",
      "Dr. Ramakar Jha, NIT Patana",
      "Dr. Shrey Pathak, IIT Ropar",
      "Dr. R K Tiwari, IIT Ropar",
      "Dr. Har Amrit Singh, PEC Chandigarh",
      "Dr. S K Katiyar, MANIT Bhopal",
      "Dr. Manish Kr. Goyal, IIT Indore",
      "Dr. Manish Pandey, NIT Warangal",
      "Dr. Meenakshi, IIT Hyderabad",
      "Dr. Abdul Dar, NIT Srinagar (J&K)",
      "Dr. Muskan Mayank, NIT Srinagar (UK)",
      "Dr. Vikash Garg, CU, Mahendargarh",
      "Dr. C T Dhanya, IIT Delhi",
      "Dr. C V R Murthy, IIT Madras",
      "Dr. Vijay Bansal, NIT Hamirpur",
      "Dr. Nitish Puri, Consultant-LPMR/ERMer",
      "Dr. Aman Garg, Huazhong Univ., China",
      "Dr. A K Sharma, MANIT Bhopal",
      "Dr. R N Singh, MNNIT Allahabad",
      "Dr. Javed Alam, AMU Aligarh",
      "Dr. Pawan Kumar, NEERI Nagpur",
      "Dr. Arpan Mehar, NIT Warangal",
      "Dr. A D Prasad, NIT Raipur",
      "Dr. Virender Kumar, NIT Jamshedpur",
      "Dr. Ashish Dhamania, SVNIT Surat",
      "Dr. Ratnesh, VNIT Nagpur",
      "Dr. Surender Singh, IIT Madras",
      "Dr. Aditya Anupam, NIT Uttrakhand",
      "Dr. Maninder Singh, Punjabi Univ., Patiala",
      // Add more items as needed
    ],
  };
  return (
    <div>
      <div>
        <Committe data={data} />
      </div>
    </div>
  )
}

export default Technical_committe
