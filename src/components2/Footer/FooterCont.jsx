import React from "react";
import './footercont.css';
import facebook from './pictures/facebookwhite1.png';
import instagram from './pictures/instagramwhite.png';
import linkedin from './pictures/linkedinwhite.png';
import pinterest from './pictures/pinterestwhite.png';
import twitter from './pictures/twitterwhite.png';
import youtube from './pictures/youtubewhite.png';

export const FooterCont = ( ) => {

    return(
        <div className="footer-cont">
            <h3> Connect With Us!</h3>
            <div id='social-media-cont'>
                <img src={facebook} alt='Social Media' height='50'/>
                <img src={instagram} alt='Social Media' height='50'/>
                <img src={linkedin} alt='Social Media' height='50'/>
                <img src={pinterest} alt='Social Media' height='50'/>
                <img src={twitter} alt='Social Media' height='50'/>
                <img src={youtube} alt='Social Media' height='50'/>
            </div>
            <h4>Copyright © 2021 Unravel | Designed & Built by Jesus Israel Garcia</h4>    
        </div>
    )
}
