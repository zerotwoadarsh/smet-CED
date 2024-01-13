import External_advisory_committe from "./component/Committe/External_advisory_committe";
import { Navbar } from "./component/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Internal_advisory_committe from "./component/Committe/Internal_advisory_committe";
import Organising_Committe from "./component/Committe/Organising_Committe";
import Technical_committe from "./component/Committe/Technical_committe";
import About_Kurukshetra from "./component/about/About_Kurukshetra";
import AboutNITKurukshetra from "./component/about/about_NIT_Kurukshetra";
import About_SMET_2024 from "./component/about/About_SMET_2024";
import Home from "./component/Home";
import Nav  from "./Nav";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/committee/external-advisory"
          element={<External_advisory_committe />}
        />
        <Route
          path="/committee/internal-advisory"
          element={<Internal_advisory_committe />}
        />
        <Route path="/committee/organizing" element={<Organising_Committe />} />
        <Route path="/committee/technical" element={<Technical_committe />} />
        <Route path="/about/kurukshetra" element={<About_Kurukshetra />} />
        <Route path="/" element={<Home/>} />
        <Route
          path="/about/nit-kurukshetra"
          element={<AboutNITKurukshetra />}
        />
        <Route path="/about/sdcee-23" element={<About_SMET_2024 />} />
      </Routes>
      <footer className="site-footer self-end">
        <p>SMET © 2024 All Rights Reserved</p>
      </footer>
    </Router>
  );
}

export default App;
