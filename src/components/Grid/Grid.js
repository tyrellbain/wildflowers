import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Grid.css';

const Grid = ({
  children,
  columns
}) => {

  return (
    <div className="Grid__root">
      {children.map((child, i) => (
        <div
          key={i}
          className={classnames({
            "Grid__cell": true,
            "Grid__column1": columns === 1,
            "Grid__column2": columns === 2,
            "Grid__column3": columns === 3,
            "Grid__column4": columns === 4
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
};

export default Grid;
