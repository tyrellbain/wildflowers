import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Grid.css';

const Grid = ({
  children,
  columns,
  stackAt,
  mobilePadding,
  tabletPadding,
  desktopPadding,
}) => {

  return (
    <div className={classnames({
      "Grid__root": true,
      "Grid__stack_mobile": stackAt === "mobile",
      "Grid__stack_tablet": stackAt === "tablet",
    })}>
      {children.map((child, i) => (
        <div
          key={i}
          className={classnames({
            "Grid__cell": true,
            "Grid__column1": columns === 1,
            "Grid__column2": columns === 2,
            "Grid__column3": columns === 3,
            "Grid__column4": columns === 4,
            "Grid__cell__mobile__padding__1": mobilePadding === 1,
            "Grid__cell__mobile__padding__2": mobilePadding === 2,
            "Grid__cell__mobile__padding__3": mobilePadding === 3,
            "Grid__cell__tablet__padding__1": tabletPadding === 1,
            "Grid__cell__tablet__padding__2": tabletPadding === 2,
            "Grid__cell__tablet__padding__3": tabletPadding === 3,
            "Grid__cell__desktop__padding__1": desktopPadding === 1,
            "Grid__cell__desktop__padding__2": desktopPadding === 2,
            "Grid__cell__desktop__padding__3": desktopPadding === 3,
          })}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  stackAt: PropTypes.oneOf(["mobile", "tablet"]).isRequired,
  mobilePadding: PropTypes.oneOf([1, 2, 3]).isRequired,
  tabletPadding: PropTypes.oneOf([1, 2, 3]).isRequired,
  desktopPadding: PropTypes.oneOf([1, 2, 3]).isRequired,
};

export default Grid;
