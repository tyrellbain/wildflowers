import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import "./Grid.css"

const Grid = ({
  className,
  children,
  mobileColumns,
  tabletColumns,
  desktopColumns,
  stackAt,
  mobilePadding,
  tabletPadding,
  desktopPadding,
}) => {
  return (
    <div
      className={classnames(
        {
          Grid__root: true,
          Grid__stack_mobile: stackAt === "mobile",
          Grid__stack_tablet: stackAt === "tablet",
        },
        className
      )}
    >
      {children.map((child, i) => (
        <div
          key={i}
          className={classnames({
            Grid__cell: true,
            Grid__mobileColumnOne: mobileColumns === 1,
            Grid__mobileColumnTwo: mobileColumns === 2,
            Grid__mobileColumnThree: mobileColumns === 3,
            Grid__mobileColumnFour: mobileColumns === 4,
            Grid__mobileColumnFour: mobileColumns === 4,
            Grid__mobileColumnFive: mobileColumns === 5,
            Grid__mobileColumnSix: mobileColumns === 6,
            Grid__tabletColumnOne: tabletColumns === 1,
            Grid__tabletColumnTwo: tabletColumns === 2,
            Grid__tabletColumnThree: tabletColumns === 3,
            Grid__tabletColumnFour: tabletColumns === 4,
            Grid__tabletColumnFour: tabletColumns === 4,
            Grid__tabletColumnFive: tabletColumns === 5,
            Grid__tabletColumnSix: tabletColumns === 6,
            Grid__desktopColumnOne: desktopColumns === 1,
            Grid__desktopColumnTwo: desktopColumns === 2,
            Grid__desktopColumnThree: desktopColumns === 3,
            Grid__desktopColumnFour: desktopColumns === 4,
            Grid__desktopColumnFour: desktopColumns === 4,
            Grid__desktopColumnFive: desktopColumns === 5,
            Grid__desktopColumnSix: desktopColumns === 6,
            Grid__cell__mobile__padding__1: mobilePadding === 1,
            Grid__cell__mobile__padding__2: mobilePadding === 2,
            Grid__cell__mobile__padding__3: mobilePadding === 3,
            Grid__cell__tablet__padding__1: tabletPadding === 1,
            Grid__cell__tablet__padding__2: tabletPadding === 2,
            Grid__cell__tablet__padding__3: tabletPadding === 3,
            Grid__cell__desktop__padding__1: desktopPadding === 1,
            Grid__cell__desktop__padding__2: desktopPadding === 2,
            Grid__cell__desktop__padding__3: desktopPadding === 3,
          })}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  mobileColumns: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  tabletColumns: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  desktopColumns: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  stackAt: PropTypes.oneOf(["mobile", "tablet"]).isRequired,
  mobilePadding: PropTypes.oneOf([1, 2, 3]).isRequired,
  tabletPadding: PropTypes.oneOf([1, 2, 3]).isRequired,
  desktopPadding: PropTypes.oneOf([1, 2, 3]).isRequired,
}

export default Grid
