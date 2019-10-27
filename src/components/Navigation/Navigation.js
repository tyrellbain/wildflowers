import React from "react"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"
import { breakpoints } from "../../utils/breakpoint"
import { getBreakpoint } from "../../utils/breakpoint"

import "./DesktopNavigation.css"

class Navigation extends React.PureComponent {
  state = {}
  constructor() {
    super()
    this.state = { breakpoint: getBreakpoint(window.outerWidth) }
  }

  componentDidMount() {
    window.addEventListener("resize", e => this._updateBreakpoint(e))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", e => this._updateBreakpoint(e))
  }

  _updateBreakpoint = e => {
    this.setState({ breakpoint: getBreakpoint(e.currentTarget.innerWidth) })
  }

  render() {
    return this.state.breakpoint === breakpoints.DESKTOP ? (
      <DesktopNavigation />
    ) : (
      <MobileNavigation />
    )
  }
}

export default Navigation
