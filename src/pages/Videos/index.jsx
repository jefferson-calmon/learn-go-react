import React from 'react';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';

import Light from '../Started/assets/light_bulb.png';
import profileImage from '..//Started/assets/profile.png';


export const VideoOne = () => {
    return(
        <Top />
    )
}
export const VideoTwo = () => {
    return(
        <h1>Video two</h1>
    )
}
export const VideoTre = () => {
    return(
        <h1>Video tre</h1>
    )
}
export const VideoFou = () => {
    return(
        <h1>Video Four</h1>
    )
}


class Top{
    render(){
        return(
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
        )
    }
}