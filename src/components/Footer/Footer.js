import React from "react";

import "./Footer.css"

const Footer = ({ siteTitle }) => (
  <footer className="Footer__root">
      {/* <ul className="Footer__social">
        <li className="Footer__icon">IG</li>
        <li className="Footer__icon">FB</li>
      </ul>
      <p>Wildflowers & Co.</p>
      <p>99 Brisbane Rd # 13, Toronto, Ontario M3J 2K3 Canada</p>
      <p><a href="tel:416-663-2913">416.663.2913</a></p> */}
      <p>Copyright {new Date().getFullYear()} by Wildflowers & Co.</p>
  </footer>
)

export default Footer;
