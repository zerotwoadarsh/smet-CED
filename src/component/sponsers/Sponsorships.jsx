import React from 'react';
import spon from "../../assets/images/spon.png";

const Sponsorships = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f8f8f8', padding: '20px', color: '#333' }}>
      <img
        src={spon}
        alt="Sponsorship Image"
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
      />
      <div style={{ margin: '20px', padding: '0 20%', textAlign: 'left' }}>
        <p>
          The organizing committee of SMET-2024 invites companies and organizations to advertise themselves during the conference.
          Sponsors can showcase their service, technology, and solutions to the leading technologists in India. The conference 
          also provides extensive networking opportunities, which can be fully utilized by availing the complimentary registrations 
          awarded to the sponsors. The conference presents sponsorship opportunity in one of the following sponsor categories:
        </p>
        <table style={{ width: '60%', borderCollapse: 'collapse', margin: '20px auto', backgroundColor: 'white' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid black', padding: '8px' }}>Sponsor Type</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Amount(Rs.)</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>No. of Free Registration</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Displayed on website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Diamond</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>1,00,000</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>5</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Gold</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>75,000</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>4</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Silver</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>50,000</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>3</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Yes</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Bronze</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>25,000</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>2</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ margin: '20px', padding: '0 20%', textAlign: 'left' }}>
        <p>
          In addition to the above, all sponsorship categories will attract the following benefits:
        </p>
        <ul style={{ textAlign: 'left', listStylePosition: 'inside' }}>
          <li> 1.Display of the sponsor’s logo on the homepage of the conference website and other official documents of the conference.</li>
          <li> 2.Inclusion of brochure/pamphlet in the registration kit of the conference delegates.</li>
          <li> 3.Acknowledgment during the inaugural session.</li>
          <li> 4.Colour advertisement of sponsor details/product details in the abstract book for Diamond, Gold, and Silver sponsors.</li>
        </ul>
        <p>
          Sponsorship amount can be paid in the Director’s account mentioned in the registration information.
        </p>
      </div>
      {/* Footer */}
      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px', textAlign: 'center', color: '#666' }}>
        <p>
          SMET © 2024 All Rights Reserved
          <br />
          Site Developed and Maintained by Tech Teams @ Infrastructure Society
        </p>
      </div>
    </div>
  );
};

export default Sponsorships;
