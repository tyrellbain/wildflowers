import React from "react"
import PropTypes from "prop-types"

import classnames from "classnames"

import "./Menu.css"

const Menu = ({ isOpen }) => (
  <svg
    className={classnames({ Menu__root: true, Menu__open: isOpen })}
    viewBox="0 0 34 34"
  >
    <g fill="#979797" stroke-width="none">
      <rect className="Menu__top-line" height="4px" width="30px" x="2" y="4" />
      <rect
        className="Menu__middle-line"
        height="4px"
        width="30px"
        x="2"
        y="14"
      />
      <rect
        className="Menu__bottom-line"
        height="4px"
        width="30px"
        x="2"
        y="25"
      />
    </g>
  </svg>
)

Menu.propTypes = {
  isOpen: PropTypes.bool,
}

Menu.defaultProps = {
  isOpen: false,
}

export default Menu
