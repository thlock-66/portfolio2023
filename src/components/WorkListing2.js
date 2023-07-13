import React from 'react';
import './WorkListing.css';
import Banner from '../img/banner-2.png';
import Image1 from '../img/img2.1.png';
import Image2 from '../img/img2.2.gif';
import { EnvelopeIcon } from '@heroicons/react/24/outline';



const WorkListing = () => {
    return (
        <div className="work-listing">
            <img src={Banner} alt="Banner Image" className="banner-image" />
            <div className="content-row">
                <div className="content-text">
                    <p>
                        As part of NCS Product and Platforms, I worked as a UX Designer to design robotic screens for a robotic nurse assistant that is deployed in hospitals to aid patients.
                        <br></br>
                        <br></br>
                        Some flows I designed for were taking a patient’s blood pressure, as well as measuring their respiratory rate. Due to the small robotic screen, I kept the design as simple as possible, creating gifs in AfterEffects to teach patients how to interact with the specialized equipment installed in the robot.
                    </p>
                </div>
                <div className="col-6">
                    <img src={Image1} alt="Image 1" className="row-image img2" />
                </div>
            </div>
            <div className="content-row">
                <div className="col-5">
                    <img src={Image2} alt="Image 2" className="row-image" />
                </div>

                <div className="content-text">
                    <p>
                        One challenge was that the time taken to measure respiratory rate takes a long time, patients cannot move while this happens, yet informing patients that respiratory measurements are taken will affect their breathing as they become conscious of it. To solve this, I combined the flows of measuring BP and RR, and came up with various ways to distract patients.                        <br></br>
                        <br></br>
                        Through some basic user testing, though the time taken remained constant, we managed to decrease the perceived time taken for measurements through UX changes.
                    </p>
                </div>
            </div>
            <div className='contact-row'>
                <p>
                    Want to know more? Chat with me to find out!
                </p>
                <a href="mailto:tlockyin@gmail.com" className="outline-button">
                    Drop me an email <EnvelopeIcon className="downloadicon" />
                </a>
            </div>
        </div>
    );
};

export default WorkListing;
