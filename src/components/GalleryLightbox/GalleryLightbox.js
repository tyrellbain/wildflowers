import React from "react"
import PropTypes from "prop-types"
import LeftArrow from "../../svgs/LeftArrow/LeftArrow"
import RightArrow from "../../svgs/RightArrow/RightArrow"
import Close from "../../svgs/Close/Close"

import "./GalleryLightbox.css"

// used to render out a container for the gallery page tiles
class GalleryLightbox extends React.PureComponent {
  componentDidMount() {
    document.addEventListener("keydown", this._keyPress)
  }

  _closeOnClick(event) {
    event.preventDefault()
    this.props.closeLightbox()
  }

  _handleArrowClick(dir) {
    this.props.goToSlide(dir)
  }

  _keyPress = event => {
    if (event.keyCode === 27) this.props.closeLightbox()
    if (event.keyCode === 39) this.props.goToSlide(1)
    if (event.keyCode === 37) this.props.goToSlide(-1)
  }

  render() {
    const { activeImg, isOpen, imageCount, activeIndex } = this.props
    if (isOpen) {
      return (
        <div className="GalleryLightbox__root">
          <button
            className="GalleryLightbox__close GalleryLightbox__button"
            onClick={e => this._closeOnClick(e)}
          >
            <Close />
          </button>
          <div className="GalleryLightbox__container">
            <button
              className="GalleryLightbox__button GalleryLightbox__left"
              onClick={() => this._handleArrowClick(-1)}
            >
              <LeftArrow />
            </button>
            <div className="GalleryLightbox__imgContainer">
              <img
                className="GalleryLightbox__img"
                src={activeImg.src}
                alt={activeImg.alt}
              />
            </div>
            <button
              className="GalleryLightbox__button GalleryLightbox__right"
              onClick={() => this._handleArrowClick(1)}
            >
              <RightArrow />
            </button>
          </div>
        </div>
      )
    }
    return null
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
}

export default GalleryLightbox
