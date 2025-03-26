import React from 'react';
import './WorkListing.css';
import Banner from '../img/banner-3.png';
import Image1 from '../img/img3.1.png';
import Image2 from '../img/img3.2.png';
import { EnvelopeIcon } from '@heroicons/react/24/outline';



const WorkListing = () => {
    return (
        <div className="work-listing">
            <img src={Banner} alt="Banner Image" className="banner-image" />
            <div className="content-row">
                <div className="content-text">
                    <p>
                    As part of the Integrated Digital Product Center (IDPC) in A*STAR, I worked as a Senior UX Designer to turn research into digital products.                        
                    <br></br>
                    <br></br>
                    Some of the products I worked on included a Speech Evaluation Product, targeted at students and teachers to learn and evaluate speech in English and Chinese easily. This was web-based and designed to be responsive to be used on phones and tablets by the students, and on desktops for teachers.
                    <br></br>
                    <br></br>
                    Other projects include a Gen-AI integrator to help harness the power of LLMs and Gen-AI to improve workflows, working with industry partners such as a Real Estate Property Startup, leading ideation and UX workshops to design a better journey and experience for their users .

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
                    Some other notable projects I worked on was on a removable denture design application, in collaboration with NDC, for dentists to easily create removable partial dentures for the elderly, a robot management platform for deployment to NHCS, as well as a delivery and fleet optimisation product.                        
                    <br></br>
                    <br></br>
                    As these products are confidential, I am unable to share the full screens designed but am always happy to share more about these products and my design process over a chat!
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
