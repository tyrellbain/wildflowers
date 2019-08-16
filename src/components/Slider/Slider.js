import React from 'react';
import PropTypes from 'prop-types';
import SliderItem from './SliderItem.js';

import './Slider.css';

class Slider extends React.PureComponent {
  state = {
    activeSlide: 0
  };

  slideInterval = null;
  slideCount = this.props.children.length;

  componentDidMount() {
    this.slideInterval = setInterval(() => this._slide(), (this.props.duration + this.props.transition));
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  _slide() {
    this.setState(state => ({
      activeSlide: state.activeSlide === (this.slideCount - 1) ? 0 : state.activeSlide + 1
    }));
  }

  render() {
    return (
      <div className="Slider__root">
        {this.props.children.map((child, i) => (
          <SliderItem key={i} transition={this.props.transition} isActive={this.state.activeSlide === i}>
            {child}
          </SliderItem>
        ))}
      </div>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.arrayOf(SliderItem).isRequired,
  duration: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
};

Slider.defaultProps = {
  transition: 500,
  duration: 2000,
};

export default Slider;
