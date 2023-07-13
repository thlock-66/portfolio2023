import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';


const LoadingScreen = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true);
        }, 2000); // Set the desired duration for the loading screen to appear

        setTimeout(() => {
            // Redirect to the homepage or remove the loading screen component
        }, 3000); // Set the desired duration for the fade-out transition

        setTimeout(() => {
            setSlideIn(true);
        }, 500); // Set the desired duration for the slide-in effect

        setTimeout(() => {
            // Redirect to the homepage or remove the loading screen component
        }, 3000); // Set the desired duration for the fade-out transition
    }, []);


    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <h1 className={`hi ${slideIn ? 'slide-in' : ''}`}>Hello! Welcome to my site</h1>
        </div>
    );
};

export default LoadingScreen;
