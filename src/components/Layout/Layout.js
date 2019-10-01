import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import classnames from 'classnames';

import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";

const Layout = ({ children, bodyLock }) => {
  return (
    <div className={classnames({"Layout__root": true, "Layout__lock": bodyLock})}>
      <Navigation />
      <main className="Layout__container" role="main">{children}</main>
      <Footer />
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyLock: PropTypes.bool,
};

Layout.defaultProps = {
  bodyLock: false,
};

export default Layout;
