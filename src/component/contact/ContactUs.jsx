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
    <div style={{ textAlign: 'center', backgroundColor: '#f8f8f8', padding: '20px', color: '#333' }}>
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
              bootstrapURLKeys={{ key: "" }}
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

        {/* Contact details on the right */}
        <div style={{ flex: 1, marginLeft: '20px', textAlign: 'left' }}>
          <h2>Contact Us</h2>
          <p>
            <strong>Address:</strong> Your Company Address <br />
            <strong>Email:</strong> your.email@example.com <br />
            <strong>Phone:</strong> +91 123 456 7890 <br />
            <strong>Mobile:</strong> +91 987 654 3210
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px', textAlign: 'center', color: '#666' }}>
        <p>
          Your Company © 2024 All Rights Reserved
          <br />
          Site Developed and Maintained by Tech Teams @ Infrastructure Society
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
