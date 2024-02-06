import React from "react";
import registrationBanner from '../../assets/images/registrsationBanner.jpg'

const Author = () => {
    return (
        <div className=" h-full bg-white text-black">

            <div style={{ backgroundColor: 'white', color: '#333' }}>


                <div>
                    <img
                        src={registrationBanner}
                        alt="Registration Image"
                        style={{ maxHeight: '300px', objectFit: 'cover' }}
                        className=' w-full'
                    />
                </div>


                <div style={{ padding: '0 10%', textAlign: 'left' }} className=" border-b-2" >
                    <p className=' font-bold text-2xl text-left my-10 '>Submissions</p>
                    <p className=' text-justify pb-10'>
                        Faculty members/research scholars/ scientists from India and abroad are invited to submit original unpublished research on the topics related to the conference. Research papers should present novel perspectives within the general scope of the conference. Literature reviews/survey papers will only be considered if they present a new perspective or clear benefit to the field and define the field in a new way or highlight exciting new technologies or areas of research.
                        The manuscript must adhere to the conference template format. The conference paper template is available on the conference website (website address). The papers received will be peer-reviewed before being accepted for presentation.
                        The registered and presented papers would be submitted for publication in Scopus indexed proceedings or special issues with or without APC. The same would be updated on conference website.
                    </p>
                </div>


                <div>
                    <div style={{ padding: '0 10%', textAlign: 'left' }} >
                        <div>
                            <p className=' font-bold text-2xl text-left my-10 '>Registration Information</p>
                            <p className='text-justify'>
                                It is mandatory for at least one author of an accepted paper to register for the paper to appear in the conference proceeding. The author presenting the second and subsequent papers will get discount, if he/she registers with the same author’s name and e-mail ID. Co-authors must register by paying full registration fee, in case they want to attend and get presentation certificate as conference delegate.
                                <br />
                                The conference presents sponsorship opportunity in one of the following sponsor categories:
                            </p>
                            <br></br>
                        </div>
                        <div className='flex justify-center max-sm:text-xs'>
                            <table style={{ borderCollapse: 'collapse', backgroundColor: 'white' }} className=' sm:w-auto w-2/3'>
                                <thead>
                                    <tr style={{ backgroundColor: '#f2f2f2', }}>
                                        <th style={{ border: '1px solid black', padding: '2px' }}>Participant categories</th>
                                        <th style={{ border: '1px solid black', padding: '2px' }}>Indian Registration fee*</th>
                                        <th style={{ border: '1px solid black', padding: '2px' }}>Foreign Registration fee*</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ border: '1px solid black', padding: '2px' }}>Students/Research Scholars</td>
                                        <td style={{ border: '1px solid black', padding: '2px' }}><span>1,500/- offline</span><br></br><span>1,000/- online</span></td>
                                        <td style={{ border: '1px solid black', padding: '2px' }}><span>$50 offline</span><br></br><span>$25 online</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid black', padding: '2px' }}>Academicians/faculty members</td>
                                        <td style={{ border: '1px solid black', padding: '2px' }}><span>2,500/- offline</span><br></br><span>2,000/- online</span></td>
                                        <td style={{ border: '1px solid black', padding: '2px' }}><span>$80 offline</span><br></br><span>$30 online</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid black', padding: '2px' }}>Industry persons/R&D Professionals/Scientists</td>
                                        <td style={{ border: '1px solid black', padding: '2px' }}><span>3,000/- offline</span><br></br><span>2,500/- online</span></td>
                                        <td style={{ border: '1px solid black', padding: '2px' }}><span>$100 offline</span><br></br><span>$30 online</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{ border: '1px solid black', padding: '2px' }}>Additional paper per author</td>
                                        <td style={{ border: '1px solid black', padding: '2px' }}><span>1,000/- offline</span><br></br><span>500/- online</span></td>
                                        <td style={{ border: '1px solid black', padding: '2px' }}><span>$30 offline</span><br></br><span>$20 online</span></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                    <div className='flex items-center justify-center mt-10 pb-8'>
                        <div className='w-4/5 bg-slate-100 p-5' >
                            <p className=' text-red-700 font-bold'>* Registration fee is non-refundable</p>
                            <p className=' text-red-700 font-bold'>Late Fee: Rs. 500/- or $10 after 15th February 2024</p>
                            <ul><span className=' font-semibold'>For Indian Authors Payment will be made through <span className=' font-bold'>SBI iCollect</span> (Payment link will be displayed soon) or NEFT in the following account:</span>
                                <li className='mt-2'>A/c Name: Director, NIT Kurukshetra</li>
                                <li className='mt-2'>A/c No. 10116885013; IFSC: SBIN0006260</li>
                                <li className='mt-2'>Bank Name: State Bank of India</li>
                                <li className='mt-2'>Bank Branch: SBI, NIT Kurukshetra</li>
                                <li className='mt-2'>Account Type: Saving Account</li>
                            </ul>
                            <br></br>
                            <ul><span className=' font-bold'>Additional details for international transactions: </span>
                                <li className='mt-2'><span className=' font-semibold '>Beneficiary Bank Branch Name:</span> NIT Kurukshetra Beneficiary Bank Branch</li>
                                <li className='mt-2'> <span className=' font-semibold '>SWIFT code:</span> SBININBBP10Beneficiary</li>
                                <li className='mt-2'><span className=' font-semibold '>Bank Correspondent Bank Name:</span> SBI SUGAR MILL AREAR BRANCH (50088) YAMUNANAGAR Beneficiary Bank</li>
                                <li className='mt-2'><span className=' font-semibold '>Correspondent Bank SWIFT code:</span> SBININBBP10</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;
