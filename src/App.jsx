import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import Layout from "./components/dashboard/Layout";
import ManageAircraft from "./components/views/aircraft/ManageAircraft";

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="aircraft/manage" element={<ManageAircraft />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
