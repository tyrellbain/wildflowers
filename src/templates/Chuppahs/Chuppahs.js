import React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO/SEO';
import Grid from '../../components/Grid/Grid';
import Img from "gatsby-image";

import { graphql } from "gatsby";
import './Chuppahs.css';

export const query = graphql`
  query($slug: String!) {
    pagesJson(slug: { eq: $slug }) {
      heading
      content
      featureImg {
        alt
        src {
        childImageSharp {
          fluid(maxWidth: 1000) {
            src
          }
        }
        }
      }
      meta {
        description
        title
      }
    }
  }`;

const Chuppahs = ({ data }) => {
  const {heading, content, featureImg, meta} = data.pagesJson
  return (
    <Layout>
      <SEO title={meta.title} description={meta.description} />
        <Grid columns={2}>
            <Img
              className="Chuppahs__image"
              fluid={featureImg.src.childImageSharp.fluid}
              alt={featureImg.alt}
            />
          <>
            <h2>{heading}</h2>
            <div dangerouslySetInnerHTML={{__html: content}} />
          </>
        </Grid>
    </Layout>
  )
};

export default Chuppahs;
