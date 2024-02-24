import React from 'react';
import submissionBanner from "../../assets/images/submissionBanner.png"

const Submission = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
            <img
                src={submissionBanner}
                alt="Submission Image"
                style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
            />
            <div style={{ padding: '0 10%', textAlign: 'left' }} >
                <p className=' font-bold text-4xl text-center my-10 '>Submissions</p>
                <p className=' text-justify pb-10'>
                    <div>
                        <p>Submission Methods:</p>
                        <li><a href=''>Online Submission System</a></li>
                        <li>Send via mail: smet2024@nitkkr.ac.in</li>
                    </div>
                    <div>
                        <p>Full Paper Submission <a href=''> LINK HERE </a></p>
                        <div>
                            <p>Step 1</p>
                            <p>Authors should only submit originally written, unpublished work to SMET 2024. All papers must be written in English and has no less than 6 pages.</p>
                        </div>
                        <div>
                            <p>Step 2</p>
                            <p>To make sure that the page-size, margin and font-size requirements are in required template, prospective authors are strongly advised to download above the full paper template before submission.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>
                            If you simply like to share some ideas without publication, we do welcome you submit an one-page abstract. Accepted abstract will be invited to give presentation at the conference, the abstract will NOT be published. Please download the abstract template before submitting your abstract.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>Important Dates</p>
                        <table  style={{  borderCollapse: 'collapse',  backgroundColor: 'white' }}>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '2px' }}>Submission Deadline</td>
                                <td style={{ border: '1px solid black', padding: '2px' }}>January 11, 2024</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '2px' }}>Notification Deadline</td>
                                <td style={{ border: '1px solid black', padding: '2px' }}>January 26, 2024</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', padding: '2px' }}>Registration Deadline</td>
                                <td style={{ border: '1px solid black', padding: '2px' }}>February 2, 2024</td>
                            </tr>
                        </table>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default Submission;
