import "./Footer.css";
import facebook from "./pictures/facebookwhite1.png";
import instagram from "./pictures/instagramwhite.png";
import linkedin from "./pictures/linkedinwhite.png";
import pinterest from "./pictures/pinterestwhite.png";
import twitter from "./pictures/twitterwhite.png";
import youtube from "./pictures/youtubewhite.png";

export const FooterCont = () => {
  return (
    <div className="footer-container">
      <p>
        <strong> Connect Through Our Socials! </strong>
      </p>
      <div className="social-media-container">
        <img className="footer-icons" src={facebook} alt="Social Media" />
        <img className="footer-icons" src={instagram} alt="Social Media" />
        <img className="footer-icons" src={linkedin} alt="Social Media" />
        <img className="footer-icons" src={pinterest} alt="Social Media" />
        <img className="footer-icons" src={twitter} alt="Social Media" />
        <img className="footer-icons" src={youtube} alt="Social Media" />
      </div>
      <p>
        <strong>
          Copyright © 2021 Unravel | Designed & Built by Jesus Israel Garcia
        </strong>
      </p>
    </div>
  );
};
