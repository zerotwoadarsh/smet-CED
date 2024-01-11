import React from "react";
import banner from "../../assets/images/banner.jpg";

function About({ data }) {
  return (
    // <div className="h-screen relative py-0 my-0 space-y-px ">
    //   <div>
    //     {/* Image Div */}
    //     <div className="flex items-center justify-center ">
    //       <img src={banner} alt="" className="w-full h-auto" />
    //     </div>
    //     {/* paragraph div */}
    //     <div className="px-4 py-12 mt-auto flex items-end justify-center text-white">
    //       <p className="text-lg">
    //         NIT Kurukshetra, formerly known as Regional Engineering College
    //         Kurukshetra, was established in 1963. It was conferred the NIT
    //         status on June 26, 2002. The Institute offers B.Tech., M.Sc.,
    //         M.Tech. and Ph.D programs in various disciplines of engineering, and
    //         MBA & MCA, with an annual intake of about 1600 students. Institute
    //         also provides excellent facilities for advanced research in the
    //         emerging areas of Engineering, Science and Technology. The institute
    //         has well qualified and dedicated faculty along with supporting
    //         staff, laboratories and other infrastructure. The infrastructure is
    //         geared to enable the institute to produce technical personnel of
    //         high quality.
    //       </p>
    //     </div>
    //   </div>
    //   <div className=" bg-gray-800 text-white text-center">
    //     <footer className="text-center">
    //       <p>SMET © 2024 All Rights Reserved</p>
    //     </footer>
    //   </div>
    // </div>

    <>
      <div className="min-h-screenl">
        <div>
          {/* Image Div */}
          <div className="flex items-center justify-center ">
            <img src={banner} alt="" className="w-full h-auto" />
            <h1 className="m-10">{data.name}</h1>
          </div>
          {/* paragraph div */}
          <div className="px-4 py-12 mt-auto flex items-end justify-center text-white">
            <p className="text-lg">{data.desc}</p>
          </div>
        </div>
        {/* <div className=" bg-gray-800 text-white text-center py-40 "> */}

        {/* </div> */}
      </div>
      <footer className="site-footer">
        <p>SMET © 2024 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default About;
