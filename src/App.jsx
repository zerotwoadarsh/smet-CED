import "./App.css";
import { Navbar } from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "../src/component/about/About";
import AboutNITKurukshetra from "./component/about/about_NIT_Kurukshetra";
import About_Kurukshetra from "./component/about/About_Kurukshetra";
import About_SMET_2024 from "./component/about/about_SMET_2024";
import External_advisory_committe from "./component/Committe/External_advisory_committe";
import Committe from "./component/Committe/Committe";
import Organising_Committe from "./component/Committe/Organising_Committe";
import Internal_advisory_committe from "./component/Committe/Internal_advisory_committe";
import Technical_committe from "./component/Committe/Technical_committe";


function App() {
  return (
    <div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <Navbar /> */}
      {/* <AboutNITKurukshetra /> */}
      {/* <About_Kurukshetra /> */}
      {/* <About_SMET_2024 /> */}
      {/* <External_advisory_committe /> */}
      {/* < Organising_Committe /> */}
      {/* <Internal_advisory_committe /> */}
      <Technical_committe />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
