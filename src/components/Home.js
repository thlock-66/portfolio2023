import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ResumeButton from './ResumeButton';

const Home = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        setShowMessage(true);
    }, []);
    return (
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="home">
                <div className="background-frame">
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="text">
                            <div className={`textcontainer ${showMessage ? 'slide-in' : ''}`}>
                                <h1>Hello! My name is Lock Yin :-)</h1>
                                <h1>I create interactive user experiences with intuitive design</h1>
                                <Link to="/work" className="inlinebutton">
                                    <h4>Check out some of my work here</h4> <ArrowRightIcon className="arrow" />
                                </Link>
                            </div>
                            <div>
                                <ResumeButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
