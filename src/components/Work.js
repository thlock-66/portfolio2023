import './Work.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonRound from './ButtonRound';
import { ReactComponent as Github } from '../img/github.svg';
import { ReactComponent as Figma } from '../img/figma.svg';
import { LinkIcon } from '@heroicons/react/24/outline';
import card1 from '../img/card-1.gif';
import card2 from '../img/card-2.png';
import card3 from '../img/card-3.png';
import card4 from '../img/card-4.png';
import card5 from '../img/card-5.png';

const Work = () => {
    const [cardsVisible, setCardsVisible] = useState([]);

    useEffect(() => {
        const cardTimeouts = [];

        // Set a timeout for each card
        for (let i = 0; i < 5; i++) {
            cardTimeouts.push(
                setTimeout(() => {
                    setCardsVisible(prevCardsVisible => [...prevCardsVisible, i]);
                }, (i + 1) * 500) // Increase the delay for each card
            );
        }

        return () => {
            // Clear all timeouts when the component unmounts
            cardTimeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, []);

    return (
        <div className="workpage">
            <div className="card-container">
                <div className={`card-work ${cardsVisible.includes(0) ? 'visible' : ''}`}>
                    <div>
                        <div className="card-work-text">
                            <h1>RWS Portal/Kiosk Revamp</h1>
                            <div className='card-work-text2'>
                                <p className='body-large'>
                                    Engaged by Resorts World Sentosa to redesign their portal and kiosk for Genting Reward Members.
                                </p>
                                <p className='sub-text'>
                                    Designed in Figma
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-5 mb-5 mb-lg-0 ms-lg-4">
                        <a>
                            <Link to="/worklisting">
                                <div className="overlay-container">
                                    <img src={card1} alt="Card 1" />
                                </div>
                            </Link>
                        </a>
                    </div>
                </div>
                <div className={`card-work right ${cardsVisible.includes(1) ? 'visible' : ''}`}>
                    <div className="col-md-8 col-lg-5 mb-5 mb-lg-0 me-lg-4">
                        <a>
                            <Link to="/worklisting2">
                                <div className="overlay-container">
                                    <img src={card4} alt="Card 4" />
                                </div>
                            </Link>
                        </a>
                    </div>
                    <div className='col-md-8 col-lg-5'>
                        <div className="card-work-text">
                            <h1>Robot Nurse Interface Design</h1>
                            <div className='card-work-text2'>
                                <p className='body-large'>
                                    Worked on the UI design for a Robotic Nurse Assistant, Florence, as well as product/concept design and prototyping for the robotic base                                 </p>
                                <p className='sub-text'>
                                    Designed in Figma/AfterEffects, developed in PyQt5
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card-work ${cardsVisible.includes(2) ? 'visible' : ''}`}>
                    <div>
                        <div className="card-work-text">
                            <h1>PUB Website Redesign</h1>
                            <div className='card-work-text2'>
                                <p className='body-large'>
                                    Engaged by PUB Singapore to redesign their website. Helped with the front-end development of templates and ensuring code followed Figma designs accurately
                                </p>
                                <p className='sub-text'>
                                    Developed using HTML/CSS/Javascript
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-5 mb-5 mb-lg-0 ms-lg-4">
                        <img src={card3} alt="Card 3" />
                    </div>
                </div>
                <div className={`card-work button-row-right ${cardsVisible.includes(3) ? 'visible' : ''}`}>
                    <ButtonRound
                        icon={<LinkIcon className="heroicon" />}
                        link="https://beta.pub.gov.sg/"
                    />
                </div>
                <div className={`card-work right ${cardsVisible.includes(3) ? 'visible' : ''}`}>
                    <div className="col-md-8 col-lg-5 mb-5 mb-lg-0 me-lg-4">
                        <img src={card2} alt="Card 2" />
                    </div>
                    <div className='col-md-8 col-lg-5'>
                        <div className="card-work-text">
                            <h1>Photography Website</h1>
                            <div className='card-work-text2'>
                                <p className='body-large'>
                                    A simple website designed to house my photography/past school work and learn React.
                                </p>
                                <p className='sub-text'>
                                    Developed with React, hosted on Firebase
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card-work button-row ${cardsVisible.includes(3) ? 'visible' : ''}`}>
                    <ButtonRound
                        icon={<LinkIcon className="heroicon" />}
                        link="https://portfolio-fde6f.web.app/"
                    />
                    <ButtonRound icon={<Github />}
                        link="https://github.com/thlock-66/personalsite/"
                    />
                </div>
                <div className={`card-work ${cardsVisible.includes(4) ? 'visible' : ''}`}>
                    <div>
                        <div className="card-work-text">
                            <h1>Portfolio Website</h1>
                            <div className='card-work-text2'>
                                <p className='body-large'>
                                    A simple website designed to showcase my works and portfolio as well as to learn React and Blender.
                                </p>
                                <p className='sub-text'>
                                    Designed in Blender/Figma, developed with React and hosted on Firebase
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-5 mb-5 mb-lg-0 ms-lg-4">
                        <img src={card5} alt="Card 5" />
                    </div>
                </div>
                <div className={`card-work button-row-right ${cardsVisible.includes(4) ? 'visible' : ''}`}>
                    <ButtonRound
                        icon={<Figma />}
                        link="https://www.figma.com/file/1SN97Y1WTGSxW7geyumyGY/Portfolio?type=design&node-id=0%3A1&t=0KJqBE12Ths3e1pg-1"
                    />
                    <ButtonRound icon={<Github />}
                        link="https://github.com/thlock-66/portfolio2023/tree/master"
                    />
                </div>
            </div>
        </div >
    );
};

export default Work;
