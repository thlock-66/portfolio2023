import React from 'react';
import ResumeButton from './ResumeButton.js';
import './About.css';

const AboutMe = () => {
    return (
        <div style =
        {{
            overflow: "hidden",
            backgroundColor: "#FFFCF9",
            height: "100vh"
        }}>
        <div className="background-frame1">
            </div>
            <div className="about-me col-12 col-lg-6">
                <div className="about-text">
                    <h1>About Me</h1>
                    <div>
                        <p>
                            Hello! I’m Lock Yin! I have two cats.
                        </p>
                        <p>
                            I am a Product Designer, with a passion for creating interactive and fun digital experiences.
                        </p>
                        <p>
                            I graduated from Nanyang Technological University in Dec 2020 with a B.Sc in Mechanical Engineering and M.S in Technological Management, from the Renaissance Engineering Programme.
                        </p>
                        <p>
                            In my free time, I enjoy bouldering as well as photography.
                        </p>                     
                    </div>
                    <div className="resumesection">
                        <div>
                            <ResumeButton />
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
};

export default AboutMe;
