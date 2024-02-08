import { React, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import contact from "../../assets/images/contact.png";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
  const defaultProps = {
    center: {
      lat: 29.947668,
      lng: 76.822359,
    },
    zoom: 15,
  };

  return (
    <div className="pb-5 text-justify bg-white text-black">
      <img
        src={contact}
        alt="Contact Us Banner"
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
      />

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
          <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyADPMQI0jWhUgSE5ugm9QhJpl8w5uQMpbo" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
              29.94906 76.817254
            
            </GoogleMapReact> */}
            <Map latitude={29.94906} longitude={76.817254} />
          </div>
        </div>

        <div style={{ flex: 1, marginLeft: "20px", textAlign: "left" }}>
          <h2 className=" font-bold">Contact Us</h2>
          <br></br>
          <p>
            <span className=" font-semibold">Address:</span> National Institute
            of Technology, Kurukshetra-136119
            <br />
            <span className=" font-semibold">Email:</span> smet2024@nitkkr.ac.in
            <br />
            <span className=" font-semibold">Phone:</span> +91-7206514129
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

const Map = ({ latitude, longitude }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCY0Kuh0x5rOk2yKXejCwEBMcbciJyH5cc">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default ContactUs;
