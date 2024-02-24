import External_advisory_committe from "./component/Committee/External_advisory_committe";
import { Navbar } from "./component/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Internal_advisory_committe from "./component/Committee/Internal_advisory_committe";
import Organising_Committe from "./component/Committee/Organising_Committe";
import Technical_committe from "./component/Committee/Technical_committe";
import About_Kurukshetra from "./component/about/About_Kurukshetra";
import AboutNITKurukshetra from "./component/about/about_NIT_Kurukshetra";
import About_SMET_2024 from "./component/about/About_SMET_2024";
import Home from "./component/Home";
import ContactUs from "./component/contact/ContactUs";
import Sponsorship from "./component/sponsers/Sponsorship";
import ConferenceTrack from "./component/conferenceTrack/ConferenceTrack";
import Footer from "./component/Footer";
import RegistrationInformation from "./component/authorSection/Author_Registration";
import Submission from "./component/authorSection/Author_Submission";
import Presentation from "./component/authorSection/Author_Presentation";



function App() {
  return (
    <div className="App">

    <Router>
      <Navbar />
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
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/conference-track" element={<ConferenceTrack />} />
        <Route path="/author/registration-information" element={<RegistrationInformation />} />
        <Route path="/author/submissions" element={<Submission />} />
        <Route path="/author/presentation" element={<Presentation />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
