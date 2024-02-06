import React from "react";
import ListName from "./widget/ListName";
import arun from "../assets/images/arun.jpg";
import ashwini_jain from "../assets/images/ashwini_jain.jpg";
import hd_chalak from "../assets/images/hd_chalak.jpg";
import mahesh from "../assets/images/mahesh.jpg";
import praveen from "../assets/images/praveen.jpg";
import ramana from "../assets/images/ramana.jpg";
import homeBanner from "../assets/images/homeBanner.jpg"
import nitGate from "../assets/images/nitGate.jpg"

const Home = () => {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nitGate})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const prof = [
    {
      name: "B.V. Ramana Reddy",
      img: `${ramana}`,
      designation: "PATRON",
      post: "Director, NIT Kurukshetra",
    },
    {
      name: "Arun Goel",
      img: `${arun}`,
      designation: "ORGANISING CHAIR",
      post: "Professor & Head, Civil Engg. Deptt. ",
    },
    {
      name: "Dr. Mahesh Pal",
      img: `${mahesh}`,
      designation: "Organizing secretary",
      post: "Professor, Civil Engg. Deptt. ",
    },
    {
      name: "Dr. Ashwani Jain ",
      img: `${ashwini_jain}`,
      designation: "Organizing secretary",
      post: "Professor, Civil Engg. Deptt. ",
    },
    {
      name: "Dr. Praveen Aggarwal ",
      img: `${praveen}`,
      designation: "Organizing secretary",
      post: "Professor, Civil Engg. Deptt.",
    },
    {
      name: "Dr. H D Chalak ",
      img: `${hd_chalak}`,
      designation: "Organizing secretary",
      post: "Assistant Professor, Civil Engg. Deptt.",
    },
  ];

  return (
    <div className=" bg-white h-full pb-5">
      <div
        style={styles}
        className="flex flex-col min-h-screen justify-center items-center"
      >
          <div className=" w-4/5 flex flex-col justify-center items-center text-justify">
            <header>
              <p className=" sm:text-6xl font-extrabold text-5xl mb-10 max-sm:mt-20 ">SMET-2024</p>
            </header>
            <p className="font-bold sm:text-3xl text-2xl flex flex-col text-center text-white opacity-100 z-2 mb-3 sm:mb-0">
              Sustainable Materials, Environment and Technologies under climate
              change scenario
            </p>
            <main className=" flex justify-center items-center">
              <p className="flex justify-center items-center text-justify">
                An International Conference on Sustainable Materials, Environment
                and Technologies under climate change scenario is being organized
                by the Department of Civil Engineering, National Institute of
                Technology, Kurukshetra. The need of the era is to use sustainable
                technologies. Sustainable development is the idea that human
                societies must live, and meet their needs, without compromising
                the ability of future generations to achieve their requirements.
                The conference aims to stimulate the exchange of information on
                current research, development and sharing of relevant experience
                in the specific areas of Civil Engineering. The conference shall
                provide a useful forum to academicians, technologists,
                entrepreneurs and the research scholars in respective domain to s
              </p>
            </main>
        </div>
      </div>

      <div className="text-black">
        <div className=" flex justify-center flex-col text-black">
          <div className="flex justify-center mt-32 text-justify">
            <p className="block font-semibold text-3xl mb-5">
              Organising Committee
            </p>
          </div>
          <div className="flex justify-around items-center flex-col mx-10 flex-shrink-3">
            <ListName data={prof} />
          </div>
        </div>

        <div className=" flex flex-col md:flex-row m-10 justify-evenly items-start">
          <div className="flex flex-col justify-center items-center w-full sm:w-1/3 h-auto">
            <p className=" text-4xl m-5 font-bold">Scope</p>
            <p className=" text-blue-800 font-medium text-justify">
              SMET-2024, an International Conference on Sustainable Materials,
              Environment and Technologies under climate change scenario in
              various areas of Civil Engineering, provides a forum for
              presentation of technological advances, latest research and
              policies in theoretical, experimental and applied aspects of
              sustainable developments of the field. High-quality full-length
              papers, which are not under review, and have not already been
              published or accepted for publication or communicated elsewhere,
              are solicited on the topics underlined and within the scope of
              conference theme and are expected to be communicated for possible
              publication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
