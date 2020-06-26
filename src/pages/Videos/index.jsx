import React from 'react';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';

import Light from '../Started/assets/light_bulb.png';
import profileImage from '..//Started/assets/profile.png';

import './styles.css';


export const VideoOne = () => {
    return(
        <div className="started">
            <Top />
            <ContainerVideo srcFrame="https://www.youtube.com/embed/dJyJ77GkhBE" />
        </div>
    )
}
export const VideoTwo = () => {
    return(
        <div className="started">
            <Top />
            <ContainerVideo srcFrame="https://www.youtube.com/embed/YhK0jVYq4IY" />

        </div>
    )
}


export const VideoTre = () => {
    return(
        <div className="started">
            <Top />
            <ContainerVideo srcFrame="https://www.youtube.com/embed/crZgbrvcjeM"/>
            
        </div>
    )
}


export const VideoFou = () => {
    return(
        <div className="started">
            <Top />
            <ContainerVideo srcFrame="https://www.youtube.com/embed/lgD_G0_5EYE"/>
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
                    <Information text={<h1>Hello woe</h1>} />
                </div>
            </div>
        )
    }
}


class Information extends React.Component{
    render(){
        return(
            <div className="infomation">
                {this.props.text}
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
        )
    }
}