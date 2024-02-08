import React from "react";
import About from './About'
import aboutKurukshetra from '../../assets/images/aboutKurukshetra.jpeg'

const About_Kurukshetra = () => {
  var data = {
    img :aboutKurukshetra,
    name: "Kurukshetra",
    desc: "Kurukshetra is described as Dharamkshetra, a place of historical and religious importance. The battle  of Mahabharata was fought here. Lord Krishna preached the philosophy of ‘Karma’, as enshrined in the holy book ‘Srimad Bhagwad Gita’. It is one of the premier pilgrimage centers attracting devotees all round the year. Kurukshetra is  very well connected by rail (Delhi-Ambala section), by road (NH44, connecting Delhi-Chandigarh-Amritsar) (Delhi-160 km and Chandigarh-80 km) and by air. NIT Kurukshetra campus is located at about 10 km from Pipli bus stand located on NH44, and about 6 km from Kurukshetra railway station.",
  };
  return (
    <div>
      <div>
        <About data={data} />
      </div>
    </div>
  );
};

export default About_Kurukshetra;
