import React from 'react';

import './styles.css';

const Home = () => {
    return(
        <div class="container">
            <section class="banner">
                <header class="header">
                    <h1><a href="/">Education World</a></h1>
        
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#courses">Cursos</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#help">Ajuda</a></li>
                        </ul>
                    </nav>
                </header>

                <div class="info-box">
                    <div class="contentBanner">
                        <h1>A melhor forma de aprender</h1>
                        <h2>Conteúdos exclusivos para pessoas exclusivas</h2>
                    </div>
                </div>
            </section>

            <section class="content">
                <section id="about">
                    <div class="pdt"></div>
                    <h1>Sobre</h1>

                    <p>A Education World é uma plataforma onde é disponibilizado conteúdo gratuito para todos os tipos de pessoas. Temos professores qualificados prontos para te ensinar, contamos também com a plataforma mobile para sua melhor experiência. Aqui você aprende do seu jeito e no seu tempo.</p>

                    <p>
                        Nós somos uma equipe capacitada e especializada em ensino e queremos trazer para você a melhor experiência possível. Com a Education World você pode aprender sobre diversos assuntos que te interessam quando e onde quiser, seja do seu celular, tablet ou computador.
                    </p>
                </section>


                <section id="courses">
                    <div class="pdt"></div>
                    <h1>Cursos</h1>

                    <div className="contentCourse">

                        <div class="box">
                            <div class="boxImg">
                                <img src="./assets/free.png" alt="Cursos gratuitos" />
                            </div>

                            <div class="boxText">
                                <h3>Cursos gratuitos e liberados para todos os públicos.</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="boxImg">
                                <img src="./assets/online.png" alt="Cursos gratuitos" />
                            </div>
                            <div class="boxText">
                                <h3>Totalmente online</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="boxImg">
                                <img src="./assets/certificado.png" alt="Cursos gratuitos"/>
                            </div>
                            <div class="boxText">
                                <h3>Certificação válida em todo território nacional</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="boxImg">
                                <img src="./assets/calendar.png" alt="Cursos gratuitos"/>
                            </div>
                            <div class="boxText">
                                <h3>Horário flexível</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="boxImg">
                                <img src="./assets/live.png" alt="Cursos gratuitos"/>
                            </div>
                            <div class="boxText">
                                <h3>Aulas ao vivo direto com professor</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="boxImg">
                                <img src="./assets/test.png" alt="Cursos gratuitos"/>
                            </div>
                            <div class="boxText">
                                <h3>Atividades e testes onlines na plataforma</h3>
                            </div>
                        </div>

                    </div>
                </section>

            </section>

            <footer>
                <div>Copyright &copy; 2020 Education World</div>
            </footer>
        </div>
    )
}

export default Home;