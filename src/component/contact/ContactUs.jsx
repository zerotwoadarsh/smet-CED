import React from 'react';
import GoogleMapReact from 'google-map-react';
import contact from '../../assets/images/contact.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
  const defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844,
    },
    zoom: 11,
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f8f8f8', color: '#333' }}>
      {/* {contactus} */}
      <img
        src={contact}
        alt="Contact Us Banner"
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
      />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        {/* Map on the left */}
        <div style={{ flex: 1 }}>
          <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "hAXKtKdDz6uWAe43LeyTxw" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>

        <div style={{ flex: 1, marginLeft: '20px', textAlign: 'left' }}>
          <h2 className=' font-bold'>Contact Us</h2>
          <br></br>
          <p>
            <span className=' font-semibold'>Address:</span> National Institute of Technology, Kurukshetra-136119<br />
            <span className=' font-semibold'>Email:</span> smet2024@nitkkr.ac.in<br />
            <span className=' font-semibold'>Phone:</span> +91-7206514129<br />
          </p>
        </div>
      </div>

      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px', textAlign: 'center', color: '#666' }}>
        <p className=' m-5'>
          Site Developed and Maintained by Tech Teams @ Infrastructure Society
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
