import React from 'react';
import { FaSearch, FaBell, FaCog, FaPlay, FaCheckCircle } from 'react-icons/fa';

import './styles.css';


import Light from './assets/light_bulb.png';
import profileImage from './assets/profile.png';


const Started = () => {
    return(
        <div className="started">
            <header id="topo">
                <a href="/started">
                    <div className="corp">
                        <div className="image-logo-corporation">
                            <img src={Light} alt="Logo corporation"/>
                        </div>
    
                        <div className="text"><span className="textTitle">Light Corp.</span><br/> A hackathon company.</div>
                    </div>
                </a>

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

                            <a href="/started/video/1">
                                <div className="box-video">
                                    <div className="image-video" id="woman-teacher"></div>
                                    <div className="legendVideo">Estou perdido(a).<br/>Por onde começar?</div>
                                </div>
                            </a>

                            <a  href="/started/video/2">
                                <div className="box-video">
                                    <div className="image-video" id="art-man"></div>
                                    <div className="legendVideo">Como adaptar o meu cenário?</div>
                                </div>
                            </a>

                            <a  href="/started/video/3">
                                <div className="box-video">
                                    <div className="image-video" id="ead"></div>
                                    <div className="legendVideo">Como se organizar para o EAD?</div>
                                </div>
                            </a>

                            <a  href="/started/video/4">
                                <div className="box-video">
                                    <div className="image-video" id="distance"></div>
                                    <div className="legendVideo">Aplicando na prática o ensino a distâcia.</div>
                                </div>
                            </a>

                        </div>

                        <div className="progress" id="progress">
                            <div className="historyColor"></div>

                            <div className="checkVideo">
                                <div className="boxCheck">
                                    <div className="circle-hidden"></div>
                                    <div className="circle-hidden"></div>
                                    <FaCheckCircle className="iconCheck"/>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                </div>

                                <div className="boxCheck">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <FaCheckCircle className="iconCheck"/>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                </div>

                                <div className="boxCheck">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <FaCheckCircle className="iconCheck"/>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                </div>

                                <div className="boxCheck">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <FaCheckCircle className="iconCheck"/>
                                    <div className="circle-hidden"></div>
                                    <div className="circle-hidden"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Started