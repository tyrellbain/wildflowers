import React from 'react';
import PropTypes from 'prop-types';
import LeftArrow from '../../svgs/LeftArrow/LeftArrow';
import RightArrow from '../../svgs/RightArrow/RightArrow';
import Close from '../../svgs/Close/Close';

import './GalleryLightbox.css';

// used to render out a container for the gallery page tiles
class GalleryLightbox extends React.PureComponent {
  _closeOnClick(event) {
    event.preventDefault();
    this.props.closeLightbox();
  }

  _handleArrowClick(dir) {
    console.log(dir);
    this.props.goToSlide(dir);
  }

  render() {
  const {activeImg, isOpen, imageCount, activeIndex} = this.props;
  if(isOpen){
  return (
    <div className="GalleryLightbox__root">
      <div className="GalleryLightbox__container">
        <div className="GalleryLightbox__imgContainer">
          <button className="GalleryLightbox__close GalleryLightbox__button" onClick={e => this._closeOnClick(e)}><Close /></button>
          <button className="GalleryLightbox__button" onClick={() => this._handleArrowClick(-1)}><LeftArrow /></button>
          <img className="GalleryLightbox__img" src={activeImg.src} alt={activeImg.alt} />
          <button className="GalleryLightbox__button" onClick={() => this._handleArrowClick(1)}><RightArrow /></button>
        </div>
      </div>
    </div>
  )
}
return null;
}
}

GalleryLightbox.propTypes = {
  closeLightbox: PropTypes.func.isRequired,
  goToSlide: PropTypes.func.isRequired,
  activeImg: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  isOpen: PropTypes.bool.isRequired,
  activeIndex: PropTypes.number.isRequired,
  imgCount: PropTypes.number.isRequired,
};

export default GalleryLightbox;
