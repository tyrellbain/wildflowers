import React from 'react';
import Layout from '../../components/Layout/Layout';
import GalleryTileContainer from '../../components/GalleryTile/GalleryTileContainer';
import SEO from '../../components/SEO/SEO';

import { graphql } from "gatsby";

import './Gallery.css'

export const query = graphql`
  query($slug: String!) {
    pagesJson(slug: { eq: $slug }) {
      heading
      meta {
        description
        title
      }
    }
  }`;

// used to render out the gallery page
const Gallery = ({data}) => {
  const {heading, meta} = data.pagesJson;
  return (
    <Layout>
      <SEO title={meta.title} description={meta.description} />
      <h1 className="Gallery__title">{heading}</h1>
      <GalleryTileContainer/>
    </Layout>
  )
}

export default Gallery
