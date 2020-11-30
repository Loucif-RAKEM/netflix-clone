import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span>
        2020, Developed with{" "}
        <FavoriteIcon fontSize="small" style={{ color: "red" }} /> by{" "}
        <span className="name">Loucif RAKEM</span>
      </span>
      <a href="https://www.themoviedb.org">
        <img
          className="tmdb_logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="TMDB Logo"
        />
      </a>

      <div className="buttons">
        <a href="https://www.linkedin.com/in/lrakem/">
          <LinkedInIcon className="footer_icon" />
        </a>
        <a href="https://github.com/Loucif-RAKEM/netflix-clone">
          <GitHubIcon className="footer_icon" />
        </a>
        <a href="mailto:rakem.loucif@gmail.com">
          <MailIcon className="footer_icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
