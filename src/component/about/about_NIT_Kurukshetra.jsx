import React from "react";
import About from "./About";

const AboutNITKurukshetra = () => {
  var data = {
    name: "NIT Kurukshetra",
    desc: "NIT Kurukshetra, formerly known as Regional Engineering College Kurukshetra, was established in 1963. It was conferred the NIT status on June 26, 2002. The Institute offers B.Tech., M.Sc., M.Tech. and Ph.D programs in various disciplines of engineering, and MBA & MCA, with an annual intake of about 1600 students. Institute also provides excellent facilities for advanced research in the emerging areas of Engineering, Science and Technology. The institute has well qualified and dedicated faculty along with supporting staff, laboratories and other infrastructure. The infrastructure is geared to enable the institute to produce technical personnel of high quality.",
  };
  return (
    <div>
      <div className="">
        <About data={data} />
      </div>
    </div>
  );
};

export default AboutNITKurukshetra;
