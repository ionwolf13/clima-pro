import "./Footer.css";
import facebook from "../../images/facebookwhite1.png";
import instagram from "../../images/instagramwhite.png";
import linkedin from "../../images/linkedinwhite.png";
import pinterest from "../../images/pinterestwhite.png";
import twitter from "../../images/twitterwhite.png";
import youtube from "../../images/youtubewhite.png";
import { ReuseContainer } from "../container/ReuseContainer";

const footerStyling = {
  flexDirection: "column",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  fontSize: "x-small",
  height: "120px",
};

export const FooterCont = () => {
  return (
    <ReuseContainer styling={footerStyling}>
      <p>
        <strong> Connect Through Our Socials! </strong>
      </p>
      <ReuseContainer styling={{ columnGap: "48px" }}>
        <img className="footer-icons" src={facebook} alt="Social Media" />
        <img className="footer-icons" src={instagram} alt="Social Media" />
        <img className="footer-icons" src={linkedin} alt="Social Media" />
        <img className="footer-icons" src={pinterest} alt="Social Media" />
        <img className="footer-icons" src={twitter} alt="Social Media" />
        <img className="footer-icons" src={youtube} alt="Social Media" />
      </ReuseContainer>
      <p>
        <strong>
          Copyright © 2021 Unravel | Designed & Built by Jesus Israel Garcia
        </strong>
      </p>
    </ReuseContainer>
  );
};
