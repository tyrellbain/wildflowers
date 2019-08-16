import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { graphql, useStaticQuery } from "gatsby";

import './GalleryTile.css';

// used to render out a single gallery tile
const GalleryTile = ({
  slug,
  title,
  imgSrc,
  imgAlt,
  hasOverlay,
}) => {

  return (
    <div className="GalleryTile__root">
      {hasOverlay ?
        <div className="GalleryTile__overlay">
          <h2 className="GalleryTile__categoryName">{title}</h2>
        </div> : null}
        <img className="GalleryTile__img" src={imgSrc} alt={imgAlt} />
    </div>
  )
}

GalleryTile.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  hasOverlay: PropTypes.bool,
};

GalleryTile.defaultProps = {
  hasOverlay: false,
};

export default GalleryTile;
