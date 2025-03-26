import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import WorkListing from "./components/WorkListing";
import WorkListing2 from "./components/WorkListing2";
import WorkListing3 from "./components/WorkListing3";
import LoadingScreen from "./components/LoadingScreen";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fonts/Poppins/Poppins-Regular.ttf";
import "./fonts/Poppins/Poppins-Bold.ttf"
import "./fonts/Poppins/Poppins-Light.ttf"



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Set the desired duration for the loading screen to appear
  }, []);
  
  useEffect(() => {
    // Only disable overflow for the homepage
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden"; // Disable scrolling on homepage
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling on other pages
    }

    // Cleanup the body overflow on component unmount
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled on unmount
    };
  }, [location.pathname]);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/worklisting' element={<WorkListing />} />
            <Route path='/worklisting2' element={<WorkListing2 />} />
            <Route path='/worklisting3' element={<WorkListing3 />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;