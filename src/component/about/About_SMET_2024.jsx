import React from "react";
import About from "./About";

const About_SMET_2024 = () => {
  var data = {
    name: "SMET-2024",
    desc: "An International Conference on Sustainable Materials, Environment and Technologies under climate change scenario is being organized by the Department of Civil Engineering, National Institute of Technology, Kurukshetra. The need of the era is to use sustainable technologies. Sustainable development is the idea that human societies must live, and meet their needs, without compromising the ability of future generations to achieve their requirements. The conference aims to stimulate the exchange of information on current research, development and sharing of relevant experience in the specific areas of Civil Engineering. The conference shall provide a useful forum to academicians, technologists, entrepreneurs and the research scholars in respective domain to share ideas, for further benefit of the mankind at large.",
  };
  return (
    <div>
      <div>
        <About data={data} />
      </div>
    </div>
  );
};

export default About_SMET_2024;
