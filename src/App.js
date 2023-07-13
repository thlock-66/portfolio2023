import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import WorkListing from "./components/WorkListing";
import WorkListing2 from "./components/WorkListing2";
import LoadingScreen from "./components/LoadingScreen";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Set the desired duration for the loading screen to appear
  }, []);

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
            <Route path='/about' element={<About />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;