import React from "react"
import PropTypes from "prop-types"
import Footer from "../Footer/Footer"
import Navigation from "../Navigation/Navigation"
import classnames from "classnames"

import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

class Layout extends React.PureComponent {
  state = { mobileNavigationOpen: false }

  render() {
    console.log(this.state.mobileNavigationOpen)
    return (
      <div
        className={classnames({
          Layout__root: true,
          Layout__lock: this.props.bodyLock || this.state.mobileNavigationOpen,
        })}
      >
        <Navigation
          onOpen={isOpen => this.setState({ mobileNavigationOpen: isOpen })}
        />
        <main className="Layout__container" role="main">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyLock: PropTypes.bool,
}

Layout.defaultProps = {
  bodyLock: false,
}

export default Layout
