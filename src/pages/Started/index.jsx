import React from 'react';
import { FaSearch, FaBell, FaCog, FaPlay } from 'react-icons/fa'

import './styles.css';


import Light from './assets/light_bulb.png';
import profileImage from './assets/profile.png';


const Started = () => {
    return(
        <div className="started">
            <header id="topo">
                <div className="corp">
                    <div className="image-logo-corporation">
                        <img src={Light} alt="Logo corporation"/>
                    </div>

                    <div className="text"><span className="textTitle">Light Corp.</span><br/> A hackathon company.</div>
                </div>

                <div className="fastTools">
                    <div className="inputBox">
                        <div className="input">
                            <input type="search"/>
                            <span>Buscar</span>
                        </div>
                        <div className="iconSearch">
                            <FaSearch />
                        </div>
                    </div>

                    <div className="config">
                        <div className="setting">
                            <FaCog className="settingIcon"/>
                            <FaBell  className="settingIcon"/>
                        </div>

                        <div className="profile">
                            <img src={profileImage} alt="serfgjsrig"/>
                        </div>
                    </div>
                </div>
            </header>


            <section id="street">
                <div className="infoBoxVideo">
                    <div className="contentInfoBoxVideo">
                        <FaPlay />
                        <span>Videos</span>
                    </div>
                </div>

                <div className="boxVideo">
                    <h3>Trilha: <span>Começando com o ensino remoto</span></h3>
                    <div className="videos-started">
                        <div className="gridVideos">

                            <div className="box-video">
                                <div className="image-video woman-teacher"></div>
                                <div className="legendVideo">dawndiaewfheuhfou</div>
                            </div>
                            <div className="box-video">
                                <div className="image-video"></div>
                                <div className="legendVideo"></div>
                            </div>
                            <div className="box-video">
                                <div className="image-video"></div>
                                <div className="legendVideo"></div>
                            </div>
                            <div className="box-video">
                                <div className="image-video"></div>
                                <div className="legendVideo"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Started