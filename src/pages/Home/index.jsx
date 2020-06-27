import React from 'react';

import './styles.css';


import Telefone from './assets/telefone.png';
import Whatsapp from "./assets/whatsapp.png";
import Mail from "./assets/email.png"; 
import CourseFree from "./assets/free.png";
import OnlineForever from "./assets/online.png";
import Certificade from "./assets/certificado.png";
import FlexTime from "./assets/calendar.png";
import LearnInLive from "./assets/live.png";
import AvaliableTeste from "./assets/test.png";

let state = true;

const Home = () => {
    const toggle = () => {
        const tog = document.querySelector('#toggle')
        const menu = document.querySelector('#menu');

        if (state){
            tog.className = 'fas fa-times toggle-menu';
            tog.style.color = 'black'
            menu.className = 'active'
            state = !state
        }else{
            tog.className = 'fas fa-bars toggle-menu';
            tog.style.color = 'white'
            menu.className = ''
            state = !state
        }
    }

    return(
        <div className="container">
            <section className="banner">
                <header className="header">
                    <h1><a href="/">Learn Go</a></h1>

                    <div className="fas fa-bars toggle-menu" id="toggle" onClick={toggle}/>
        
                    <nav>
                        <ul id="menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="#courses">Cursos</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#help">Ajuda</a></li>
                        </ul>
                    </nav>
                </header>

                <div className="info-box">
                    <div className="contentBanner">
                        <h1>A melhor forma de aprender</h1>
                        <h2>Conteúdos exclusivos para pessoas exclusivas</h2>
                    </div>
                </div>
            </section>

            <section className="content">
                <section id="about">
                    <div className="pdt"></div>
                    <h1>Sobre</h1>

                    <p>A Learn Go é uma plataforma onde é disponibilizado conteúdo gratuito para todos os tipos de pessoas. Temos professores qualificados prontos para te ensinar, contamos também com a plataforma mobile para sua melhor experiência. Aqui você aprende do seu jeito e no seu tempo.</p>

                    <p>
                        Nós somos uma equipe capacitada e especializada em ensino e queremos trazer para você a melhor experiência possível. Com a Learn Go você pode aprender sobre diversos assuntos que te interessam quando e onde quiser, seja do seu celular, tablet ou computador.
                    </p>
                </section>


                <section id="courses">
                    <div className="pdt"></div>
                    <h1>Cursos</h1>

                    <div className="contentCourse">

                        <div className="box">
                            <div className="boxImg">
                                <img src={CourseFree} alt="Cursos gratuitos" />
                            </div>

                            <div className="boxText">
                                <h3>Cursos gratuitos e liberados para todos os públicos.</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxImg">
                                <img src={OnlineForever} alt="Cursos gratuitos" />
                            </div>
                            <div className="boxText">
                                <h3>Totalmente online</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxImg">
                                <img src={Certificade} alt="Cursos gratuitos"/>
                            </div>
                            <div className="boxText">
                                <h3>Certificação válida em todo território nacional</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxImg">
                                <img src={FlexTime} alt="Cursos gratuitos"/>
                            </div>
                            <div className="boxText">
                                <h3>Horário flexível</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxImg">
                                <img src={LearnInLive} alt="Cursos gratuitos"/>
                            </div>
                            <div className="boxText">
                                <h3>Aulas ao vivo direto com professor</h3>
                            </div>
                        </div>
                        <div className="box">
                            <div className="boxImg">
                                <img src={AvaliableTeste} alt="Cursos gratuitos"/>
                            </div>
                            <div className="boxText">
                                <h3>Atividades e testes onlines na plataforma</h3>
                            </div>
                        </div>

                    </div>

                    <a href="/started">
                        <button className="init">
                            Começar agora
                        </button>
                    </a>
                </section>

                <section id="help">
                    <div className="pdt"></div>
                    <h1>Ajuda</h1>
                    <h2>Entre em contato com a nossa equipe</h2>

                    <div className="contentHelp">
                        <a href="#top">
                            <div className="boxHelp">
                                <div className="boxIcon"><img src={Telefone} alt="Telefone"/></div>
                                <div className="boxTextHelp"><h3>Telefone</h3></div>
                            </div>
                        </a>

                        <a  href="#top">
                            <div className="boxHelp">
                                <div className="boxIcon"><img src={Whatsapp} alt="Whatsapp"/></div>
                                <div className="boxTextHelp"><h3>Whatsapp</h3></div>
                            </div>
                        </a>

                        <a  href="#top">
                            <div className="boxHelp">
                                <div className="boxIcon"><img src={Mail} alt="Email"/></div>
                                <div className="boxTextHelp"><h3>E-mail</h3></div>
                            </div>
                        </a>
                    </div>
                </section>

            </section>

            <footer>
                <div>Copyright &copy; 2020 Learn Go</div>
            </footer>
        </div>
    )
}

export default Home;