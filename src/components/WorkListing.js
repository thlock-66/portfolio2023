import React from 'react';
import './WorkListing.css';
import Banner from '../img/banner-1.png';
import Image1 from '../img/img1.1.png';
import Image2 from '../img/img1.2.png';
import { EnvelopeIcon } from '@heroicons/react/24/outline';



const WorkListing = () => {
    return (
        <div className="work-listing">
            <img src={Banner} alt="Banner Image" className="banner-image" />
            <div className="content-row">
                <div className="content-text">
                    <p>
                        As part of NCS Experience Design, we were engaged by Resorts World Sentosa to redesign their gaming website, portal, as well as kiosks. This was a project that spanned 2 months.
                        <br></br>
                        <br></br>
                        We first started by conducting user testing – interviewing participants and observing how they interacted with the current portal and kiosk in order to find out what are the key pieces of information users would like to see/do on the portal and kiosk.                    </p>
                </div>
                <div className="col-6">
                    <img src={Image1} alt="Image 1" className="row-image" />
                </div>
            </div>
            <div className="content-row">
                <div className="col-5">
                    <img src={Image2} alt="Image 2" className="row-image" />
                </div>

                <div className="content-text">
                    <p>
                        Subsequently, we created different concept designs of the homepage for the clients to choose from, and through that designed a design system for us to use for the rest of the pages we would create.
                        <br></br>
                        <br></br>
                        Afterwards, we would work with the relevant business units of the clients, to design the different features of the portal to suit their business needs. Some features included merchandise and a check-out cart, voucher wallet, event listing and redemption flows, etc.                        </p>
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
