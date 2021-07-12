import React from 'react';
import logo from '../pictures/weatherlogo.png';

export const LogoComponent = () => {

    return(
        <div id='logo-comp'>
            <img src={logo} alt='weather app logo' height='100'/>
        </div>
    )
}