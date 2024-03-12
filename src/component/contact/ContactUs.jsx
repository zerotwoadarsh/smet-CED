import { React, useRef, useEffect } from "react";
import contact from "../../assets/images/contact.png";
import GoogleMap from "./GoogleMap";


const ContactUs = () => {

  return (
    <div className="pb-5 text-justify bg-white text-black">
      <img
        src={contact}
        alt="Contact Us Banner"
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
      />

      {/* <h1 className="text-4xl font-bold flex justify-center mt-5 mb-5">Contact Us</h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
        className=" sm:flex sm:flex-row flex-col"
      >
        <div style={{ flex: 1 }}>
          <div style={{ height: '60vh', width: '100%' }} className=" m-4 pr-4 rounded-md">
            <GoogleMap />
          </div>
        </div>

        <div style={{ flex: 1, marginLeft: "60px", textAlign: "left" }}>
          <br></br>
          <p className="text-2xl">
            <p>
              <span className=" text-2xl font-semibold">Address:</span> National Institute
              of Technology, Kurukshetra-136119
            </p>
            <br />
            <p>
              <span className=" text-2xl font-semibold">Email:</span> smet2024@nitkkr.ac.in
            </p>
            <br />
            <p>
              <span className=" text-2xl font-semibold">Phone:</span> +91-7206514129
            </p>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};


export default ContactUs;
