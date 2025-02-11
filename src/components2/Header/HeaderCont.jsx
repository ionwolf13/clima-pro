import React from "react";
import './headercont.css';
import weatherLogo from '../../pictures/weatherlogo.png';

export const Header = () => {

    return(
        <div className='header-cont' style={{display: 'flex'}}>
            <h1> Proj Clima </h1>
            <img src={weatherLogo} alt='Proj Clima Logo' height='75'/>
        </div>
    )
}