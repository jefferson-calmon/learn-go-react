import React from 'react';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';

import Light from '../Started/assets/light_bulb.png';
import profileImage from '..//Started/assets/profile.png';

import './styles.css';


export const VideoOne = () => {
    return(
        <div className="started">
            <Top />

            <ContainerVideo 
            srcFrame="https://www.youtube.com/embed/dJyJ77GkhBE" 
            moment1={['1:03', 'Primeiros passos para começar investir.']}   
            moment2={['5:00', 'Explicação dos principais conceitos.']} 
            moment3={['16:23', 'Simulação de um investimento inicial.']} />
        </div>
    )
}
export const VideoTwo = () => {
    return(
        <div className="started">
            <Top />
            <ContainerVideo 
            srcFrame="https://www.youtube.com/embed/YhK0jVYq4IY" 
            moment1={['0:35', '"Trabalhar te gera sustento mas, só o trabalho depois do trabalho te enriquece."']}
            moment2={['2:38', 'Começo das dicas no vídeo']}
            moment3={['16:45', 'Conclusão sobre as dicas dadas no vídeo.']}
            />

        </div>
    )
}


export const VideoTre = () => {
    return(
        <div className="started">
            <Top />
            <ContainerVideo 
            srcFrame="https://www.youtube.com/embed/crZgbrvcjeM"
            moment1={['0:20', 'Explicação do conteúdo do vídeo.']}
            moment2={['3:08', '"Pense nos seus objetivos"']}
            moment3={['4:41', 'Sempre peça ajuda dos outros.']}
            />
            
        </div>
    )
}


export const VideoFou = () => {
    return(
        <div className="started">
            <Top />
            <ContainerVideo 
            srcFrame="https://www.youtube.com/embed/lgD_G0_5EYE"
            moment1={["0:35", 'Explicação metodologias ativas.']}
            moment2={["3:37", '"O aluno ver a aula ao vivo direto com o professor"']}
            moment3={["4:57", 'Resultado do sorteio do vídeo.']}

            />
        </div>
    )
}


class ContainerVideo extends React.Component{
    render(){
        return(

            <div className="watch">
                <div className="watchVideo">
                    <iframe id="frame" className="frame" src={this.props.srcFrame} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Video one Inicio"/>
                </div>

                <div className="infoVideo">
                    <Information title={this.props} moment1={this.props.moment1} moment2={this.props.moment2} moment3={this.props.moment3} />
                </div>
            </div>
        )
    }
}


class Information extends React.Component{
    render(){
        return(
            <div id="information">
                <h2>Momentos<br />Importantes</h2>

                <div className="moments">
                    <div className="moment">
                        <div className="time">
                            <div className="circleHidden3"></div>
                            <span>{this.props.moment1[0]}</span>
                            <div className="circleBot"></div>
                        </div>
                        <div className="time-legend">
                            {this.props.moment1[1]}
                        </div>
                    </div>

                    <div className="moment">
                        <div className="time">
                            <div className="circleTop"></div>
                            {this.props.moment2[0]}
                            <div className="circleBot"></div>
                        </div>
                        <div className="time-legend">{this.props.moment2[1]}</div>
                    </div>

                    <div className="moment">
                        <div className="time">
                            <div className="circleTop"></div>
                            {this.props.moment3[0]}
                            <div className="circleHidden2"></div>
                        </div>
                        <div className="time-legend">{this.props.moment3[1]}</div>
                    </div>
                </div>
            </div>
        )
    }
}


class Top extends React.Component{
    render(){
        return(
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
        )
    }
}