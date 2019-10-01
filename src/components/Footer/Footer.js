import React from "react";

import "./Footer.css"
import Facebook from '../../svgs/Facebook/Facebook';
import Instagram from '../../svgs/Instagram/Instagram';

const Footer = ({ siteTitle }) => (
  <footer className="Footer__root">
      <ul className="Footer__social">
        <li className="Footer__icon"><a href="https://www.instagram.com/wildflowersandco/" target="_blank"><Instagram /></a></li>
        <li className="Footer__icon"><a href="https://www.facebook.com/wildflowersca/" target="_blank"><Facebook /></a></li>
      </ul>
      <div className="Footer__location">
        <p>99 Brisbane Rd # 13, Toronto, Ontario M3J 2K3 Canada</p>
        <p><a className="Footer__phone" href="tel:416-663-2913">416.663.2913</a></p>
        <p>hello@wildflowers.ca</p>
      </div>
      <small>Copyright {new Date().getFullYear()} by Wildflowers & Co.</small>
  </footer>
)

export default Footer;
