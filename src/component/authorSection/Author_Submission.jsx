import React from "react";
import submissionBanner from "../../assets/images/submissionBanner.png";
import { Link } from "react-router-dom";

import file1 from "../../assets/files/wordFile.pdf"
import file2 from "../../assets/files/macFile.pdf"
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
              Full Paper Submission <a href="https://cmt3.research.microsoft.com/SMET2024" target="_blank">(Click Here)</a>
            </p>

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
                strongly advised to download the full paper template
                before submission.
              </p>
            </div>
            <div className="mb-5">
              <li>
                Word File
                <span className="ml-1"><Link
                  to={file1}
                  download="word-file"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Download file)
                </Link></span>
              </li>
              <li>
                Mac File
                <span className="ml-1"><Link
                  to={file2}
                  download="mac-file"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Download file)
                </Link></span>
              </li>
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
