import React from 'react';
import spon from "../../assets/images/spon.png";

const Sponsorship = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f8f8f8', color: '#333' }}>
      <img
        src={spon}
        alt="Sponsorship Image"
        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
      />
      <div style={{  padding: '0 10%', textAlign: 'left' }}>
      <div>
        <p className=' text-justify my-10'>
          The organizing committee of SMET-2024 invites companies and organizations to advertise themselves during the conference.
          Sponsors can showcase their service, technology, and solutions to the leading technologists in India. The conference 
          also provides extensive networking opportunities, which can be fully utilized by availing the complimentary registrations 
          awarded to the sponsors. The conference presents sponsorship opportunity in one of the following sponsor categories:
        </p>
      </div>
      <div className='flex justify-center max-sm:text-xs'>
        <table style={{  borderCollapse: 'collapse', backgroundColor: 'white' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ border: '1px solid black', padding: '1.5px' }}>Sponsor Type</th>
              <th style={{ border: '1px solid black', padding: '1.5px' }}>Amount(Rs.)</th>
              <th style={{ border: '1px solid black', padding: '1.5px' }}>No. of Free Registration</th>
              <th style={{ border: '1px solid black', padding: '1.5px' }}>Displayed on website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>Diamond</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>1,00,000</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>5</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>Yes</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>Gold</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>75,000</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>4</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>Yes</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>50,000</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>3</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>Yes</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>Silver</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>Bronze</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>25,000</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>2</td>
              <td style={{ border: '1px solid black', padding: '1.5px' }}>No</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <div style={{  padding: '0 10%', textAlign: 'left' }} className=' text-justify my-10'>
        <p>
          In addition to the above, all sponsorship categories will attract the following benefits:
        </p>
        <ul style={{ textAlign: 'left', listStylePosition: 'inside' }} >
          <li> 1.Display of the sponsor’s logo on the homepage of the conference website and other official documents of the conference.</li>
          <li> 2.Inclusion of brochure/pamphlet in the registration kit of the conference delegates.</li>
          <li> 3.Acknowledgment during the inaugural session.</li>
          <li> 4.Colour advertisement of sponsor details/product details in the abstract book for Diamond, Gold, and Silver sponsors.</li>
        </ul>
        <p>
          Sponsorship amount can be paid in the Director’s account mentioned in the registration information.
        </p>
      </div>
    </div>
  );
};

export default Sponsorship;
