import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'gatsby';
import classnames from 'classnames';

const SliderItem = ({
  children,
  isActive,
  transition,
}) => {

  return (
    <div
      className={
        classnames({
          "Slider__item": true,
          "Slider__activeItem": isActive
        })}
      style={{transitionDuration: `${transition}ms`}}>
      {children}
    </div>
  )
}

SliderItem.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  transition: PropTypes.number,
};

export default SliderItem;
