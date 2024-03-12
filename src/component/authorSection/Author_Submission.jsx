import React from "react";
import submissionBanner from "../../assets/images/submissionBanner.png";
const Submission = () => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "white", color: "black" }}
    >
      <img
        src={submissionBanner}
        alt="Submission Image"
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
      />
      <div style={{ padding: "0 10%", textAlign: "left" }}>
        <p className=" font-bold text-4xl text-center my-10 ">Submissions</p>
        <p className=" text-justify pb-10">
          <div className=" mt-10 mb-5">
            <p className=" text-2xl pb-4 text-green-800 font-semibold">
              Submission Methods:
            </p>
            <li>
              <a href="">Online Submission System</a>
            </li>
            <li>Send via mail: smet2024@nitkkr.ac.in</li>
          </div>
          <div className=" mt-10 mb-5">
            <p className=" text-2xl pb-4 text-green-800 font-semibold">
              Full Paper Submission <a href="">( LINK HERE )</a>
            </p>
            <div className="mb-5">
              <li>
                Word File
                <a href={"../../assets/files/splnproc1703.pdf"} download>
                  (Link here)
                </a>
              </li>
              <li>
                Mac File
                <a href={"../../assets/files/splnproc1703_mac.pdf"} download>
                  (Link here)
                </a>
              </li>
            </div>
            <div className="pb-2">
              <p className=" text-green-600 font-medium mb-2">Step 1:</p>
              <p>
                Authors should only submit originally written, unpublished work
                to SMET 2024. All papers must be written in English and has no
                less than 6 pages.
              </p>
            </div>
            <div className="pb-2">
              <p className=" text-green-600 font-medium mb-2">Step 2:</p>
              <p>
                To make sure that the page-size, margin and font-size
                requirements are in required template, prospective authors are
                strongly advised to download above the full paper template
                before submission.
              </p>
            </div>
          </div>
          <div className=" mt-10 mb-5">
            <div>
              <p className=" text-2xl pb-4 text-green-800 font-semibold">
                Abstract Submission
              </p>
              <p>
                If you simply like to share some ideas without publication, we
                do welcome you submit an one-page abstract. Accepted abstract
                will be invited to give presentation at the conference, the
                abstract will NOT be published. Please download the abstract
                template before submitting your abstract.
              </p>
            </div>
          </div>
          <div className=" mt-10 mb-10">
            <p className=" text-2xl pb-4 text-green-800 font-semibold">
              Important Dates
            </p>
            <table
              style={{ borderCollapse: "collapse", backgroundColor: "white" }}
            >
              <tr>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  Submission Deadline
                </td>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  May 31, 2024
                </td>
              </tr>
              {/* <tr>
                                <td style={{ border: '1px solid black', padding: '14px' }}  >Notification Deadline</td>
                                <td style={{ border: '1px solid black', padding: '14px' }}  >January 26, 2024</td>
                            </tr> */}
              <tr>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  {" "}
                  Intimation of acceptance (on website or by email)
                </td>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  June 15, 2024
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  {" "}
                  Submission of camera-ready paper
                </td>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  June 30, 2024
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  Registration Deadline
                </td>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  July 1, 2024 - July 5, 2024
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  Registration Deadline (with late fee)
                </td>
                <td style={{ border: "1px solid black", padding: "14px" }}>
                  July 10, 2024
                </td>
              </tr>
            </table>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Submission;
