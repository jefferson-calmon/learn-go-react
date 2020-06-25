import React from 'react';

import './styles.css';


import Light from './assets/light_bulb.png';


const Started = () => {
    return(
        <div className="container">
            <header id="topo">
                <div className="corp">
                    <div className="image-logo-corporation">
                        <img src={Light} alt="Logo corporation"/>
                    </div>

                    <div className="text"><span className="textTitle">Light Corp.</span><br/> A hackathon company.</div>
                </div>

                <div className="fastTools">
                    <div >

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Started