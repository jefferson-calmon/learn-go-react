import React from 'react';
import { FaSearch, FaBell, FaCog, FaPlay, FaCheckCircle, FaTimes } from 'react-icons/fa';

import './styles.css';

import Light from './assets/light_bulb.png';
import profileImage from './assets/profile.png';

let state = true;


const Started = () => {
    const showMessage = () => {
        const msg = document.querySelector('#message')
        const bkg = document.querySelector('#background')

        if (state){
            msg.className = 'active'
            bkg.className = 'started active'
            state = !state
        }else{
            msg.className = ''
            bkg.className = 'started'
            state = !state
        }
    }

    return(
        <div className="started" id="background">
            <header id="topo">
                <a href="/started">
                    <div className="corp">
                        <div className="image-logo-corporation">
                            <img src={Light} alt="Logo corporation"/>
                        </div>
    
                        <div className="text"><span className="textTitle">Learn Go</span><br/> A education plataform.</div>
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
                <div className="infoBoxVideo" onClick={showMessage}>
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

            <section id="message">
                <div className="close" onClick={showMessage}>
                    <FaTimes />
                </div>
                <div className="blob">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0000ff" d="M42,-75.9C51.4,-67.3,53.9,-49.9,61.2,-35.8C68.4,-21.7,80.3,-10.9,82.5,1.2C84.6,13.3,76.9,26.7,69.4,40.3C61.9,53.8,54.5,67.7,42.9,76.4C31.4,85,15.7,88.4,-0.1,88.6C-15.9,88.8,-31.8,85.8,-43.2,77C-54.5,68.2,-61.4,53.8,-66.6,40C-71.9,26.2,-75.7,13.1,-78.3,-1.5C-81,-16.2,-82.5,-32.4,-75.4,-43C-68.4,-53.7,-52.7,-58.9,-38.7,-64.9C-24.7,-70.9,-12.3,-77.6,2,-81C16.3,-84.4,32.6,-84.5,42,-75.9Z" transform="translate(100 100)" />
                </svg>
                    <div className="message">
                        <h1>Primeiro passos</h1>
        
                        <p>Parabens por ter chegado até aqui, isso significa que você realmente quer aprender.</p>
                        <p>Nesta página você podera dar os seus primeiros passos, vendo os vídeos que selecionamos para você.</p>
        
                        <p>É importante que você assista todos antes de continuar, Boa sorte</p>
                        <p className="credito">-Learn Go</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Started