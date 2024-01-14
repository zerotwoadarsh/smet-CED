import React from 'react';
import registrationBanner from '../assets/images/registrsationBanner.jpg'

const RegistrationInformation = () => {
    return (
        <div className='bg-white text-black'>

            <div style={{ textAlign: 'center', backgroundColor: 'white', color: '#333' }}>
                <img
                    src={registrationBanner}
                    alt="Registration Image"
                    style={{maxHeight: '300px', objectFit: 'cover' }}
                    className=' w-full'
                />
                <div style={{ margin: '20px', padding: '0 20%', textAlign: 'left' }}>
                    <p>
                        It is mandatory for at least one author of an accepted paper to register for the paper to appear in the conference proceeding. The author presenting the second and subsequent papers will get discount, if he/she registers with the same author’s name and e-mail ID. Co-authors must register by paying full registration fee, in case they want to attend and get presentation certificate as conference delegate.
                        <br />
                        The conference presents sponsorship opportunity in one of the following sponsor categories:
                    </p>
                    <div className='flex flex-row'>
                        <table style={{ width: 'auto', borderCollapse: 'collapse', margin: '20px auto', backgroundColor: 'white' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f2f2f2', }}>
                                    <th style={{ border: '1px solid black', padding: '8px' }}>Participant categories</th>
                                    <th style={{ border: '1px solid black', padding: '8px' }}>Indian Registration fee*</th>
                                    <th style={{ border: '1px solid black', padding: '8px' }}>Foreign Registration fee*</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>Students/Research Scholars</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}><span>1,500/- offline</span><br></br><span>1,000/- online</span></td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}><span>$50 offline</span><br></br><span>$25 online</span></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>Academicians/faculty members</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}><span>2,500/- offline</span><br></br><span>2,000/- online</span></td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}><span>$80 offline</span><br></br><span>$30 online</span></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>Industry persons/R&D Professionals/Scientists</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}><span>3,000/- offline</span><br></br><span>2,500/- online</span></td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}><span>$100 offline</span><br></br><span>$30 online</span></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>Additional paper per author</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}><span>1,000/- offline</span><br></br><span>500/- online</span></td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}><span>$30 offline</span><br></br><span>$20 online</span></td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>

                </div>
            </div>
            <div className='flex items-center justify-center '>
                <div className='w-4/5 bg-slate-100 p-5'>
                    <p className=' text-red-700 font-bold'>* Registration fee is non-refundable</p>
                    <p className=' text-red-700 font-bold'>Late Fee: Rs. 500/- or $10 after 5th Feb. 2024</p>
                    <ul><span className=' font-semibold'>For Indian Authors Payment will be made through <span className=' font-bold'>SBI iCollect</span> (Payment link will be displayed soon) or NEFT in the following account:</span>
                        <li>A/c Name: Director, NIT Kurukshetra</li>
                        <li>A/c No. 10116885013; IFSC: SBIN0006260.</li>
                        <li>Bank Name: State Bank of India</li>
                        <li>Bank Branch: SBI, NIT Kurukshetra</li>
                        <li>Account Type: Saving Account</li>
                    </ul>
                    <br></br>
                    <ul><span className=' font-bold'>Additional details for international transactions: </span>
                        <li><span className=' font-semibold'>Beneficiary Bank Branch Name:</span> NIT Kurukshetra Beneficiary Bank Branch SWIFT code: SBININBBP10Beneficiary</li>
                        <li><span className=' font-semibold'>Bank Correspondent Bank Name:</span> SBI SUGAR MILL AREAR BRANCH (50088) YAMUNANAGAR Beneficiary Bank</li>
                        <li><span className=' font-semibold'>Correspondent Bank SWIFT code:</span> SBININBBP10</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default RegistrationInformation;
