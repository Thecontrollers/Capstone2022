import React from "react";
import "./Footer.css";

//Just to stop confusing
//target={"_blank"} is used to create a new tab, instend of overriding website

function Footer() {
  return (
    <div className="footer-container">
      <p>Social links</p>
      <ul className="items"> 
      <li>
      <a href='https://discord.gg/ZRExKBzA7v' target={"_blank"}>Discord</a>
      </li>
      <li>
      <a href='https://twitter.com/SUNYPolyWCE' target={"_blank"}>Twitter</a>
      </li>
      <li>
      <a href='https://www.instagram.com/sunypolywce/' target={"_blank"}>Instagram</a>
      </li>
      <li>
      <a href='https://www.twitch.tv/wildcat_esports' target={"_blank"}>Twitch</a>
      </li>
      </ul>
    </div>
  );
}

export default Footer;
