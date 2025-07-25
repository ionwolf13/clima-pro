import { ReuseContainer } from "../../shared/ReuseContainer/ReuseContainer";
import "./Footer.css";
import facebook from "../../images/facebookwhite1.png";
import instagram from "../../images/instagramwhite.png";
import linkedin from "../../images/linkedinwhite.png";
import pinterest from "../../images/pinterestwhite.png";
import twitter from "../../images/twitterwhite.png";
import youtube from "../../images/youtubewhite.png";

const styling = () => ({
  footerContainer: {
    flexDirection: "column",
    height: "100px",
  },
  socialsContainer: {
    justifyContent: "space-evenly",
    marginTop: "16px",
    backgroundColor: "rgba(0,0,0,0)",
  },
});

export const Footer = () => {
  const styles = styling();

  return (
    <ReuseContainer styling={styles.footerContainer}>
      <ReuseContainer styling={styles.socialsContainer}>
        <img className="footer-icons" src={facebook} alt="Social Media" />
        <img className="footer-icons" src={instagram} alt="Social Media" />
        <img className="footer-icons" src={linkedin} alt="Social Media" />
        <img className="footer-icons" src={pinterest} alt="Social Media" />
        <img className="footer-icons" src={twitter} alt="Social Media" />
        <img className="footer-icons" src={youtube} alt="Social Media" />
      </ReuseContainer>
      <p>Copyright © 2021 Unravel | Designed & Built by Unravel</p>
    </ReuseContainer>
  );
};
