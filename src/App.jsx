import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import Layout from "./components/dashboard/Layout";
import Home from "./components/views/home/Home";
import ManageAircraft from "./components/views/aircraft/ManageAircraft";

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={<Layout screenWidth={screenWidth} />}
          >
            <Route index element={<Home />} />
            <Route path="aircraft/manage" element={<ManageAircraft />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
